import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../../nitro/nitro.mjs';
import { c as createTaskPhoto } from '../../../../_/taskPhotos.mjs';
import { b as getTaskById } from '../../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../../_/db.mjs';
import '@libsql/client';

const photos_post = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Task ID is required"
    });
  }
  if (!body.blobUrl) {
    throw createError({
      statusCode: 400,
      message: "Blob URL is required"
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
    const photo = await createTaskPhoto({
      taskId: id,
      blobUrl: body.blobUrl,
      caption: body.caption
    });
    return photo;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error creating task photo:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to create task photo"
    });
  }
});

export { photos_post as default };
//# sourceMappingURL=photos.post.mjs.map
