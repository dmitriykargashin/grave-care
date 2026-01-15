import { deleteCemetery, getCemeteryById } from '#server/repositories/cemeteries'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Cemetery ID is required'
    })
  }
  
  try {
    const existing = await getCemeteryById(id)
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: 'Cemetery not found'
      })
    }
    
    await deleteCemetery(id)
    return { success: true }
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes('Cannot delete')) {
      throw createError({
        statusCode: 400,
        message: error.message
      })
    }
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error deleting cemetery:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete cemetery'
    })
  }
})
