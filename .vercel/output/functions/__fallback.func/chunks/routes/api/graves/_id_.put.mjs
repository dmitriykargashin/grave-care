import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { a as getGraveById, u as updateGrave } from '../../../_/graves.mjs';
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
      message: "Grave ID is required"
    });
  }
  try {
    const existing = await getGraveById(id);
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: "Grave not found"
      });
    }
    const grave = await updateGrave(id, {
      cemeteryId: body.cemeteryId,
      customerId: body.customerId,
      plotRef: body.plotRef,
      deceasedName: body.deceasedName,
      specialInstructions: body.specialInstructions
    });
    return grave;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error updating grave:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to update grave"
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
