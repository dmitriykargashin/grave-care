import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import { e as createTask } from '../../_/tasks.mjs';
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
  if (!body.graveId || !body.title || !body.type || !body.status || !body.priority) {
    throw createError({
      statusCode: 400,
      message: "Grave, title, type, status, and priority are required"
    });
  }
  try {
    const task = await createTask({
      graveId: body.graveId,
      title: body.title,
      type: body.type,
      status: body.status,
      priority: body.priority,
      scheduledFor: body.scheduledFor,
      notes: body.notes
    });
    return task;
  } catch (error) {
    console.error("Error creating task:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to create task"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post4.mjs.map
