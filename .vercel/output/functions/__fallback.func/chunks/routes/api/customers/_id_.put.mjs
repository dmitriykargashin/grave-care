import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { g as getCustomerById, u as updateCustomer } from '../../../_/customers.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../_/db.mjs';
import '@libsql/client';

const _id__put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Customer ID is required"
    });
  }
  try {
    const existing = await getCustomerById(id);
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: "Customer not found"
      });
    }
    const customer = await updateCustomer(id, {
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      notes: body.notes
    });
    return customer;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error updating customer:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to update customer"
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
