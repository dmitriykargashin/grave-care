import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import { c as createGrave } from '../../_/graves.mjs';
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
  if (!body.cemeteryId || !body.customerId || !body.plotRef) {
    throw createError({
      statusCode: 400,
      message: "Cemetery, customer, and plot reference are required"
    });
  }
  try {
    const grave = await createGrave({
      cemeteryId: body.cemeteryId,
      customerId: body.customerId,
      plotRef: body.plotRef,
      deceasedName: body.deceasedName,
      specialInstructions: body.specialInstructions
    });
    return grave;
  } catch (error) {
    console.error("Error creating grave:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to create grave"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
