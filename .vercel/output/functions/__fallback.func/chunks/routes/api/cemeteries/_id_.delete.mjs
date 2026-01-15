import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { g as getCemeteryById, d as deleteCemetery } from '../../../_/cemeteries.mjs';
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
    await deleteCemetery(id);
    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.message.includes("Cannot delete")) {
      throw createError({
        statusCode: 400,
        message: error.message
      });
    }
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error deleting cemetery:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to delete cemetery"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
