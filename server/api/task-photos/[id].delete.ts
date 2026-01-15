import { deleteTaskPhoto, getPhotoById } from '#server/repositories/taskPhotos'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Photo ID is required'
    })
  }
  
  try {
    const photo = await getPhotoById(id)
    if (!photo) {
      throw createError({
        statusCode: 404,
        message: 'Photo not found'
      })
    }
    
    // Note: We're not deleting from Vercel Blob to simplify the demo
    // In production, you might want to call del(photo.blobUrl) from @vercel/blob
    
    await deleteTaskPhoto(id)
    return { success: true }
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error deleting photo:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete photo'
    })
  }
})
