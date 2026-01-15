import { u as useDb, t as toCamelCase, g as generateId, n as nowISO } from './db.mjs';

async function getAllCustomers(search) {
  const db = useDb();
  let sql = `
    SELECT id, full_name, phone, email, notes, created_at 
    FROM customers
  `;
  const args = [];
  if (search) {
    sql += ` WHERE full_name LIKE ? OR phone LIKE ? OR email LIKE ?`;
    const pattern = `%${search}%`;
    args.push(pattern, pattern, pattern);
  }
  sql += ` ORDER BY full_name ASC`;
  const result = await db.execute({ sql, args });
  return result.rows.map((row) => toCamelCase(row));
}
async function getCustomerById(id) {
  const db = useDb();
  const result = await db.execute({
    sql: `SELECT id, full_name, phone, email, notes, created_at FROM customers WHERE id = ?`,
    args: [id]
  });
  if (result.rows.length === 0) return null;
  return toCamelCase(result.rows[0]);
}
async function createCustomer(data) {
  const db = useDb();
  const id = generateId();
  const createdAt = nowISO();
  await db.execute({
    sql: `INSERT INTO customers (id, full_name, phone, email, notes, created_at) VALUES (?, ?, ?, ?, ?, ?)`,
    args: [id, data.fullName, data.phone || null, data.email || null, data.notes || null, createdAt]
  });
  return {
    id,
    fullName: data.fullName,
    phone: data.phone || null,
    email: data.email || null,
    notes: data.notes || null,
    createdAt
  };
}
async function updateCustomer(id, data) {
  const db = useDb();
  const updates = [];
  const args = [];
  if (data.fullName !== void 0) {
    updates.push("full_name = ?");
    args.push(data.fullName);
  }
  if (data.phone !== void 0) {
    updates.push("phone = ?");
    args.push(data.phone || null);
  }
  if (data.email !== void 0) {
    updates.push("email = ?");
    args.push(data.email || null);
  }
  if (data.notes !== void 0) {
    updates.push("notes = ?");
    args.push(data.notes || null);
  }
  if (updates.length === 0) return getCustomerById(id);
  args.push(id);
  await db.execute({
    sql: `UPDATE customers SET ${updates.join(", ")} WHERE id = ?`,
    args
  });
  return getCustomerById(id);
}
async function deleteCustomer(id) {
  const db = useDb();
  const gravesResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM graves WHERE customer_id = ?`,
    args: [id]
  });
  const countRow = gravesResult.rows[0];
  if (countRow.count > 0) {
    throw new Error("Cannot delete customer with associated graves");
  }
  const result = await db.execute({
    sql: `DELETE FROM customers WHERE id = ?`,
    args: [id]
  });
  return result.rowsAffected > 0;
}

export { getAllCustomers as a, createCustomer as c, deleteCustomer as d, getCustomerById as g, updateCustomer as u };
//# sourceMappingURL=customers.mjs.map
