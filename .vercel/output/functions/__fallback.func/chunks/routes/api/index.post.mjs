import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import { c as createCemetery } from '../../_/cemeteries.mjs';
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
  if (!body.name) {
    throw createError({
      statusCode: 400,
      message: "Name is required"
    });
  }
  try {
    const cemetery = await createCemetery({
      name: body.name,
      address: body.address
    });
    return cemetery;
  } catch (error) {
    console.error("Error creating cemetery:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to create cemetery"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
