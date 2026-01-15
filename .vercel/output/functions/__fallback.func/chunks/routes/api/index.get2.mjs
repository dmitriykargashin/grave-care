import { d as defineEventHandler, a as getQuery, c as createError } from '../../nitro/nitro.mjs';
import { a as getAllCustomers } from '../../_/customers.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../_/db.mjs';
import '@libsql/client';

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const search = query.q;
  try {
    const customers = await getAllCustomers(search);
    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch customers"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
