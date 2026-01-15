import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { g as getCustomerById, d as deleteCustomer } from '../../../_/customers.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../_/db.mjs';
import '@libsql/client';

const _id__delete = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
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
    await deleteCustomer(id);
    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.message.includes("Cannot delete")) {
      throw createError({
        statusCode: 400,
        message: error.message
      });
    }
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error deleting customer:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to delete customer"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
