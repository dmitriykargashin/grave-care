import { d as defineEventHandler, b as readMultipartFormData, c as createError, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { put } from '@vercel/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const upload_post = defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      message: "No file uploaded"
    });
  }
  const file = formData.find((f) => f.name === "file");
  if (!file || !file.data) {
    throw createError({
      statusCode: 400,
      message: "No file found in upload"
    });
  }
  const config = useRuntimeConfig();
  if (!config.blobReadWriteToken) {
    console.warn("BLOB_READ_WRITE_TOKEN not configured, using placeholder URL");
    return {
      blobUrl: `https://placeholder.local/gravecare/tasks/${Date.now()}-${file.filename || "photo.jpg"}`
    };
  }
  try {
    const filename = file.filename || `photo-${Date.now()}.jpg`;
    const pathname = `gravecare/tasks/${Date.now()}-${filename}`;
    const blob = await put(pathname, file.data, {
      access: "public",
      token: config.blobReadWriteToken
    });
    return {
      blobUrl: blob.url
    };
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to upload photo"
    });
  }
});

export { upload_post as default };
//# sourceMappingURL=upload.post.mjs.map
