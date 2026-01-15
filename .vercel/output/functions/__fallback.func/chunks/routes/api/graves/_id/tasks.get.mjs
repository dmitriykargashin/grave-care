import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../../nitro/nitro.mjs';
import { a as getTasksByGraveId } from '../../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../../_/db.mjs';
import '@libsql/client';

const tasks_get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Grave ID is required"
    });
  }
  try {
    const tasks = await getTasksByGraveId(id);
    return tasks;
  } catch (error) {
    console.error("Error fetching grave tasks:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch grave tasks"
    });
  }
});

export { tasks_get as default };
//# sourceMappingURL=tasks.get.mjs.map
