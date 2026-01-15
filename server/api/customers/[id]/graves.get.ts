import { getGravesByCustomerId } from '#server/repositories/graves'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Customer ID is required'
    })
  }
  
  try {
    const graves = await getGravesByCustomerId(id)
    return graves
  } catch (error) {
    console.error('Error fetching customer graves:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch customer graves'
    })
  }
})
