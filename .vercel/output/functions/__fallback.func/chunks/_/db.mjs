import { u as useRuntimeConfig } from '../nitro/nitro.mjs';
import { createClient } from '@libsql/client';

let client = null;
function useDb() {
  if (!client) {
    const config = useRuntimeConfig();
    if (!config.tursoDbUrl) {
      throw new Error("TURSO_DATABASE_URL is not configured");
    }
    client = createClient({
      url: config.tursoDbUrl,
      authToken: config.tursoAuthToken || void 0
    });
  }
  return client;
}
function toCamelCase(row) {
  const result = {};
  for (const key in row) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    result[camelKey] = row[key];
  }
  return result;
}
function generateId() {
  return crypto.randomUUID();
}
function nowISO() {
  return (/* @__PURE__ */ new Date()).toISOString();
}

export { generateId as g, nowISO as n, toCamelCase as t, useDb as u };
//# sourceMappingURL=db.mjs.map
