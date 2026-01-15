import { u as useDb, t as toCamelCase, g as generateId, n as nowISO } from './db.mjs';

async function getPhotosByTaskId(taskId) {
  const db = useDb();
  const result = await db.execute({
    sql: `SELECT id, task_id, blob_url, caption, created_at FROM task_photos WHERE task_id = ? ORDER BY created_at DESC`,
    args: [taskId]
  });
  return result.rows.map((row) => toCamelCase(row));
}
async function createTaskPhoto(data) {
  const db = useDb();
  const id = generateId();
  const createdAt = nowISO();
  await db.execute({
    sql: `INSERT INTO task_photos (id, task_id, blob_url, caption, created_at) VALUES (?, ?, ?, ?, ?)`,
    args: [id, data.taskId, data.blobUrl, data.caption || null, createdAt]
  });
  return {
    id,
    taskId: data.taskId,
    blobUrl: data.blobUrl,
    caption: data.caption || null,
    createdAt
  };
}
async function deleteTaskPhoto(id) {
  const db = useDb();
  const result = await db.execute({
    sql: `DELETE FROM task_photos WHERE id = ?`,
    args: [id]
  });
  return result.rowsAffected > 0;
}
async function getPhotoById(id) {
  const db = useDb();
  const result = await db.execute({
    sql: `SELECT id, task_id, blob_url, caption, created_at FROM task_photos WHERE id = ?`,
    args: [id]
  });
  if (result.rows.length === 0) return null;
  return toCamelCase(result.rows[0]);
}

export { getPhotosByTaskId as a, createTaskPhoto as c, deleteTaskPhoto as d, getPhotoById as g };
//# sourceMappingURL=taskPhotos.mjs.map
