import { getPhotosByTaskId } from '#server/repositories/taskPhotos'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Task ID is required'
    })
  }
  
  try {
    const photos = await getPhotosByTaskId(id)
    return photos
  } catch (error) {
    console.error('Error fetching task photos:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch task photos'
    })
  }
})
