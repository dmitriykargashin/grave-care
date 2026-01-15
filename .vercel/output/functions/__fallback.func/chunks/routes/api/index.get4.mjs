import { d as defineEventHandler, a as getQuery, c as createError } from '../../nitro/nitro.mjs';
import { d as getAllTasks } from '../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../_/db.mjs';
import '@libsql/client';

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  try {
    const tasks = await getAllTasks({
      search: query.q,
      status: query.status,
      type: query.type,
      priority: query.priority,
      dateFilter: query.dateFilter
    });
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch tasks"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
