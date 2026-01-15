import type { Cemetery } from '#shared/types'
import { useDb, toCamelCase, generateId, nowISO } from '../utils/db'

export async function getAllCemeteries(): Promise<Cemetery[]> {
  const db = useDb()
  const result = await db.execute({
    sql: `SELECT id, name, address, created_at FROM cemeteries ORDER BY name ASC`,
    args: []
  })
  return result.rows.map(row => toCamelCase<Cemetery>(row as Record<string, unknown>))
}

export async function getCemeteryById(id: string): Promise<Cemetery | null> {
  const db = useDb()
  const result = await db.execute({
    sql: `SELECT id, name, address, created_at FROM cemeteries WHERE id = ?`,
    args: [id]
  })
  
  if (result.rows.length === 0) return null
  return toCamelCase<Cemetery>(result.rows[0] as Record<string, unknown>)
}

export async function createCemetery(data: {
  name: string
  address?: string
}): Promise<Cemetery> {
  const db = useDb()
  const id = generateId()
  const createdAt = nowISO()
  
  await db.execute({
    sql: `INSERT INTO cemeteries (id, name, address, created_at) VALUES (?, ?, ?, ?)`,
    args: [id, data.name, data.address || null, createdAt]
  })
  
  return {
    id,
    name: data.name,
    address: data.address || null,
    createdAt
  }
}

export async function updateCemetery(id: string, data: {
  name?: string
  address?: string
}): Promise<Cemetery | null> {
  const db = useDb()
  
  const updates: string[] = []
  const args: (string | null)[] = []
  
  if (data.name !== undefined) {
    updates.push('name = ?')
    args.push(data.name)
  }
  if (data.address !== undefined) {
    updates.push('address = ?')
    args.push(data.address || null)
  }
  
  if (updates.length === 0) return getCemeteryById(id)
  
  args.push(id)
  await db.execute({
    sql: `UPDATE cemeteries SET ${updates.join(', ')} WHERE id = ?`,
    args
  })
  
  return getCemeteryById(id)
}

export async function deleteCemetery(id: string): Promise<boolean> {
  const db = useDb()
  
  // Check for related graves
  const gravesResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM graves WHERE cemetery_id = ?`,
    args: [id]
  })
  
  const countRow = gravesResult.rows[0] as unknown as { count: number }
  if (countRow.count > 0) {
    throw new Error('Cannot delete cemetery with associated graves')
  }
  
  const result = await db.execute({
    sql: `DELETE FROM cemeteries WHERE id = ?`,
    args: [id]
  })
  
  return result.rowsAffected > 0
}
