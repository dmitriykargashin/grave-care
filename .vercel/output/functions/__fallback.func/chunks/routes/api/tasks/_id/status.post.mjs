import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../../nitro/nitro.mjs';
import { b as getTaskById, c as updateTaskStatus } from '../../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../../_/db.mjs';
import '@libsql/client';

const status_post = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Task ID is required"
    });
  }
  if (!body.status) {
    throw createError({
      statusCode: 400,
      message: "Status is required"
    });
  }
  const validStatuses = ["todo", "scheduled", "in_progress", "done", "canceled"];
  if (!validStatuses.includes(body.status)) {
    throw createError({
      statusCode: 400,
      message: "Invalid status"
    });
  }
  try {
    const existing = await getTaskById(id);
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: "Task not found"
      });
    }
    const task = await updateTaskStatus(id, body.status);
    return task;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error updating task status:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to update task status"
    });
  }
});

export { status_post as default };
//# sourceMappingURL=status.post.mjs.map
