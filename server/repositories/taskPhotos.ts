import type { TaskPhoto } from '#shared/types'
import { useDb, toCamelCase, generateId, nowISO } from '../utils/db'

export async function getPhotosByTaskId(taskId: string): Promise<TaskPhoto[]> {
  const db = useDb()
  const result = await db.execute({
    sql: `SELECT id, task_id, blob_url, caption, created_at FROM task_photos WHERE task_id = ? ORDER BY created_at DESC`,
    args: [taskId]
  })
  return result.rows.map(row => toCamelCase<TaskPhoto>(row as Record<string, unknown>))
}

export async function createTaskPhoto(data: {
  taskId: string
  blobUrl: string
  caption?: string
}): Promise<TaskPhoto> {
  const db = useDb()
  const id = generateId()
  const createdAt = nowISO()
  
  await db.execute({
    sql: `INSERT INTO task_photos (id, task_id, blob_url, caption, created_at) VALUES (?, ?, ?, ?, ?)`,
    args: [id, data.taskId, data.blobUrl, data.caption || null, createdAt]
  })
  
  return {
    id,
    taskId: data.taskId,
    blobUrl: data.blobUrl,
    caption: data.caption || null,
    createdAt
  }
}

export async function deleteTaskPhoto(id: string): Promise<boolean> {
  const db = useDb()
  const result = await db.execute({
    sql: `DELETE FROM task_photos WHERE id = ?`,
    args: [id]
  })
  return result.rowsAffected > 0
}

export async function getPhotoById(id: string): Promise<TaskPhoto | null> {
  const db = useDb()
  const result = await db.execute({
    sql: `SELECT id, task_id, blob_url, caption, created_at FROM task_photos WHERE id = ?`,
    args: [id]
  })
  
  if (result.rows.length === 0) return null
  return toCamelCase<TaskPhoto>(result.rows[0] as Record<string, unknown>)
}
