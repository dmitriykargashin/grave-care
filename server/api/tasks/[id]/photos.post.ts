import { createTaskPhoto } from '#server/repositories/taskPhotos'
import { getTaskById } from '#server/repositories/tasks'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Task ID is required'
    })
  }
  
  if (!body.blobUrl) {
    throw createError({
      statusCode: 400,
      message: 'Blob URL is required'
    })
  }
  
  try {
    const task = await getTaskById(id)
    if (!task) {
      throw createError({
        statusCode: 404,
        message: 'Task not found'
      })
    }
    
    const photo = await createTaskPhoto({
      taskId: id,
      blobUrl: body.blobUrl,
      caption: body.caption
    })
    
    return photo
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error creating task photo:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create task photo'
    })
  }
})
