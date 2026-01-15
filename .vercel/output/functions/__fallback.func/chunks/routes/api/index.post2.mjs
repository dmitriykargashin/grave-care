import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import { c as createCustomer } from '../../_/customers.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../_/db.mjs';
import '@libsql/client';

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.fullName) {
    throw createError({
      statusCode: 400,
      message: "Full name is required"
    });
  }
  try {
    const customer = await createCustomer({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      notes: body.notes
    });
    return customer;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to create customer"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
