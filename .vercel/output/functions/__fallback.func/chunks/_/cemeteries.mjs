import { u as useDb, t as toCamelCase, g as generateId, n as nowISO } from './db.mjs';

async function getAllCemeteries() {
  const db = useDb();
  const result = await db.execute({
    sql: `SELECT id, name, address, created_at FROM cemeteries ORDER BY name ASC`,
    args: []
  });
  return result.rows.map((row) => toCamelCase(row));
}
async function getCemeteryById(id) {
  const db = useDb();
  const result = await db.execute({
    sql: `SELECT id, name, address, created_at FROM cemeteries WHERE id = ?`,
    args: [id]
  });
  if (result.rows.length === 0) return null;
  return toCamelCase(result.rows[0]);
}
async function createCemetery(data) {
  const db = useDb();
  const id = generateId();
  const createdAt = nowISO();
  await db.execute({
    sql: `INSERT INTO cemeteries (id, name, address, created_at) VALUES (?, ?, ?, ?)`,
    args: [id, data.name, data.address || null, createdAt]
  });
  return {
    id,
    name: data.name,
    address: data.address || null,
    createdAt
  };
}
async function updateCemetery(id, data) {
  const db = useDb();
  const updates = [];
  const args = [];
  if (data.name !== void 0) {
    updates.push("name = ?");
    args.push(data.name);
  }
  if (data.address !== void 0) {
    updates.push("address = ?");
    args.push(data.address || null);
  }
  if (updates.length === 0) return getCemeteryById(id);
  args.push(id);
  await db.execute({
    sql: `UPDATE cemeteries SET ${updates.join(", ")} WHERE id = ?`,
    args
  });
  return getCemeteryById(id);
}
async function deleteCemetery(id) {
  const db = useDb();
  const gravesResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM graves WHERE cemetery_id = ?`,
    args: [id]
  });
  const countRow = gravesResult.rows[0];
  if (countRow.count > 0) {
    throw new Error("Cannot delete cemetery with associated graves");
  }
  const result = await db.execute({
    sql: `DELETE FROM cemeteries WHERE id = ?`,
    args: [id]
  });
  return result.rowsAffected > 0;
}

export { getAllCemeteries as a, createCemetery as c, deleteCemetery as d, getCemeteryById as g, updateCemetery as u };
//# sourceMappingURL=cemeteries.mjs.map
