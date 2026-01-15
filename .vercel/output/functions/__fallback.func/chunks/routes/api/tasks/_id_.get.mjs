import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { b as getTaskById } from '../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../_/db.mjs';
import '@libsql/client';

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Task ID is required"
    });
  }
  try {
    const task = await getTaskById(id);
    if (!task) {
      throw createError({
        statusCode: 404,
        message: "Task not found"
      });
    }
    return task;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error fetching task:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch task"
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
