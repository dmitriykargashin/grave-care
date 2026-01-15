import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../../nitro/nitro.mjs';
import { a as getPhotosByTaskId } from '../../../../_/taskPhotos.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../../_/db.mjs';
import '@libsql/client';

const photos_get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Task ID is required"
    });
  }
  try {
    const photos = await getPhotosByTaskId(id);
    return photos;
  } catch (error) {
    console.error("Error fetching task photos:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch task photos"
    });
  }
});

export { photos_get as default };
//# sourceMappingURL=photos.get.mjs.map
