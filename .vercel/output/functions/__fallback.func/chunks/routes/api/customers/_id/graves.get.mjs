import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../../nitro/nitro.mjs';
import { g as getGravesByCustomerId } from '../../../../_/graves.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../../_/db.mjs';
import '@libsql/client';

const graves_get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Customer ID is required"
    });
  }
  try {
    const graves = await getGravesByCustomerId(id);
    return graves;
  } catch (error) {
    console.error("Error fetching customer graves:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch customer graves"
    });
  }
});

export { graves_get as default };
//# sourceMappingURL=graves.get.mjs.map
