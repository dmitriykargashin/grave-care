import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { g as getCustomerById } from '../../../_/customers.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../_/db.mjs';
import '@libsql/client';

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Customer ID is required"
    });
  }
  try {
    const customer = await getCustomerById(id);
    if (!customer) {
      throw createError({
        statusCode: 404,
        message: "Customer not found"
      });
    }
    return customer;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error fetching customer:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch customer"
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
