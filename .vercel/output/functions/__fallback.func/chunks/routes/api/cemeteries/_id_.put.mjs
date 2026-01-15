import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { g as getCemeteryById, u as updateCemetery } from '../../../_/cemeteries.mjs';
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
      message: "Cemetery ID is required"
    });
  }
  try {
    const existing = await getCemeteryById(id);
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: "Cemetery not found"
      });
    }
    const cemetery = await updateCemetery(id, {
      name: body.name,
      address: body.address
    });
    return cemetery;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error updating cemetery:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to update cemetery"
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
