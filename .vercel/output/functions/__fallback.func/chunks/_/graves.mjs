import { u as useDb, t as toCamelCase, g as generateId, n as nowISO } from './db.mjs';

async function getAllGraves(search) {
  const db = useDb();
  let sql = `
    SELECT 
      g.id, g.cemetery_id, g.customer_id, g.plot_ref, g.deceased_name, 
      g.special_instructions, g.created_at,
      c.name as cemetery_name,
      cu.full_name as customer_name,
      (SELECT COUNT(*) FROM tasks t WHERE t.grave_id = g.id AND t.status NOT IN ('done', 'canceled')) as open_tasks_count
    FROM graves g
    LEFT JOIN cemeteries c ON g.cemetery_id = c.id
    LEFT JOIN customers cu ON g.customer_id = cu.id
  `;
  const args = [];
  if (search) {
    sql += ` WHERE g.deceased_name LIKE ? OR g.plot_ref LIKE ? OR c.name LIKE ? OR cu.full_name LIKE ?`;
    const pattern = `%${search}%`;
    args.push(pattern, pattern, pattern, pattern);
  }
  sql += ` ORDER BY g.deceased_name ASC`;
  const result = await db.execute({ sql, args });
  return result.rows.map((row) => toCamelCase(row));
}
async function getGraveById(id) {
  const db = useDb();
  const result = await db.execute({
    sql: `
      SELECT 
        g.id, g.cemetery_id, g.customer_id, g.plot_ref, g.deceased_name, 
        g.special_instructions, g.created_at,
        c.name as cemetery_name,
        cu.full_name as customer_name,
        (SELECT COUNT(*) FROM tasks t WHERE t.grave_id = g.id AND t.status NOT IN ('done', 'canceled')) as open_tasks_count
      FROM graves g
      LEFT JOIN cemeteries c ON g.cemetery_id = c.id
      LEFT JOIN customers cu ON g.customer_id = cu.id
      WHERE g.id = ?
    `,
    args: [id]
  });
  if (result.rows.length === 0) return null;
  return toCamelCase(result.rows[0]);
}
async function getGravesByCustomerId(customerId) {
  const db = useDb();
  const result = await db.execute({
    sql: `
      SELECT 
        g.id, g.cemetery_id, g.customer_id, g.plot_ref, g.deceased_name, 
        g.special_instructions, g.created_at,
        c.name as cemetery_name,
        cu.full_name as customer_name,
        (SELECT COUNT(*) FROM tasks t WHERE t.grave_id = g.id AND t.status NOT IN ('done', 'canceled')) as open_tasks_count
      FROM graves g
      LEFT JOIN cemeteries c ON g.cemetery_id = c.id
      LEFT JOIN customers cu ON g.customer_id = cu.id
      WHERE g.customer_id = ?
      ORDER BY g.deceased_name ASC
    `,
    args: [customerId]
  });
  return result.rows.map((row) => toCamelCase(row));
}
async function createGrave(data) {
  const db = useDb();
  const id = generateId();
  const createdAt = nowISO();
  await db.execute({
    sql: `INSERT INTO graves (id, cemetery_id, customer_id, plot_ref, deceased_name, special_instructions, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    args: [id, data.cemeteryId, data.customerId, data.plotRef, data.deceasedName || null, data.specialInstructions || null, createdAt]
  });
  return getGraveById(id);
}
async function updateGrave(id, data) {
  const db = useDb();
  const updates = [];
  const args = [];
  if (data.cemeteryId !== void 0) {
    updates.push("cemetery_id = ?");
    args.push(data.cemeteryId);
  }
  if (data.customerId !== void 0) {
    updates.push("customer_id = ?");
    args.push(data.customerId);
  }
  if (data.plotRef !== void 0) {
    updates.push("plot_ref = ?");
    args.push(data.plotRef);
  }
  if (data.deceasedName !== void 0) {
    updates.push("deceased_name = ?");
    args.push(data.deceasedName || null);
  }
  if (data.specialInstructions !== void 0) {
    updates.push("special_instructions = ?");
    args.push(data.specialInstructions || null);
  }
  if (updates.length === 0) return getGraveById(id);
  args.push(id);
  await db.execute({
    sql: `UPDATE graves SET ${updates.join(", ")} WHERE id = ?`,
    args
  });
  return getGraveById(id);
}

export { getGraveById as a, getAllGraves as b, createGrave as c, getGravesByCustomerId as g, updateGrave as u };
//# sourceMappingURL=graves.mjs.map
