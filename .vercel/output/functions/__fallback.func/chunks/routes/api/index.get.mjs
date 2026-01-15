import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { a as getAllCemeteries } from '../../_/cemeteries.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../_/db.mjs';
import '@libsql/client';

const index_get = defineEventHandler(async () => {
  try {
    const cemeteries = await getAllCemeteries();
    return cemeteries;
  } catch (error) {
    console.error("Error fetching cemeteries:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch cemeteries"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
