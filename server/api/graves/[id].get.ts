import { getGraveById } from '#server/repositories/graves'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Grave ID is required'
    })
  }
  
  try {
    const grave = await getGraveById(id)
    
    if (!grave) {
      throw createError({
        statusCode: 404,
        message: 'Grave not found'
      })
    }
    
    return grave
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error fetching grave:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch grave'
    })
  }
})
