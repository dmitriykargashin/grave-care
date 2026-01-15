import type { Customer } from '#shared/types'
import { useDb, toCamelCase, generateId, nowISO } from '../utils/db'

export async function getAllCustomers(search?: string): Promise<Customer[]> {
  const db = useDb()
  
  let sql = `
    SELECT id, full_name, phone, email, notes, created_at 
    FROM customers
  `
  const args: string[] = []
  
  if (search) {
    sql += ` WHERE full_name LIKE ? OR phone LIKE ? OR email LIKE ?`
    const pattern = `%${search}%`
    args.push(pattern, pattern, pattern)
  }
  
  sql += ` ORDER BY full_name ASC`
  
  const result = await db.execute({ sql, args })
  return result.rows.map(row => toCamelCase<Customer>(row as Record<string, unknown>))
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  const db = useDb()
  const result = await db.execute({
    sql: `SELECT id, full_name, phone, email, notes, created_at FROM customers WHERE id = ?`,
    args: [id]
  })
  
  if (result.rows.length === 0) return null
  return toCamelCase<Customer>(result.rows[0] as Record<string, unknown>)
}

export async function createCustomer(data: {
  fullName: string
  phone?: string
  email?: string
  notes?: string
}): Promise<Customer> {
  const db = useDb()
  const id = generateId()
  const createdAt = nowISO()
  
  await db.execute({
    sql: `INSERT INTO customers (id, full_name, phone, email, notes, created_at) VALUES (?, ?, ?, ?, ?, ?)`,
    args: [id, data.fullName, data.phone || null, data.email || null, data.notes || null, createdAt]
  })
  
  return {
    id,
    fullName: data.fullName,
    phone: data.phone || null,
    email: data.email || null,
    notes: data.notes || null,
    createdAt
  }
}

export async function updateCustomer(id: string, data: {
  fullName?: string
  phone?: string
  email?: string
  notes?: string
}): Promise<Customer | null> {
  const db = useDb()
  
  const updates: string[] = []
  const args: (string | null)[] = []
  
  if (data.fullName !== undefined) {
    updates.push('full_name = ?')
    args.push(data.fullName)
  }
  if (data.phone !== undefined) {
    updates.push('phone = ?')
    args.push(data.phone || null)
  }
  if (data.email !== undefined) {
    updates.push('email = ?')
    args.push(data.email || null)
  }
  if (data.notes !== undefined) {
    updates.push('notes = ?')
    args.push(data.notes || null)
  }
  
  if (updates.length === 0) return getCustomerById(id)
  
  args.push(id)
  await db.execute({
    sql: `UPDATE customers SET ${updates.join(', ')} WHERE id = ?`,
    args
  })
  
  return getCustomerById(id)
}

export async function deleteCustomer(id: string): Promise<boolean> {
  const db = useDb()
  
  // Check for related graves
  const gravesResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM graves WHERE customer_id = ?`,
    args: [id]
  })
  
  const countRow = gravesResult.rows[0] as unknown as { count: number }
  if (countRow.count > 0) {
    throw new Error('Cannot delete customer with associated graves')
  }
  
  const result = await db.execute({
    sql: `DELETE FROM customers WHERE id = ?`,
    args: [id]
  })
  
  return result.rowsAffected > 0
}
