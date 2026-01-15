import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { g as getPhotoById, d as deleteTaskPhoto } from '../../../_/taskPhotos.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../_/db.mjs';
import '@libsql/client';

const _id__delete = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Photo ID is required"
    });
  }
  try {
    const photo = await getPhotoById(id);
    if (!photo) {
      throw createError({
        statusCode: 404,
        message: "Photo not found"
      });
    }
    await deleteTaskPhoto(id);
    return { success: true };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) throw error;
    console.error("Error deleting photo:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to delete photo"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
