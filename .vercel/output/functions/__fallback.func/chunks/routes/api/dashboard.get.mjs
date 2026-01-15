import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { g as getDashboardData } from '../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../_/db.mjs';
import '@libsql/client';

const dashboard_get = defineEventHandler(async () => {
  try {
    const data = await getDashboardData();
    return data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch dashboard data"
    });
  }
});

export { dashboard_get as default };
//# sourceMappingURL=dashboard.get.mjs.map
