import { updateCemetery, getCemeteryById } from '#server/repositories/cemeteries'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
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
    
    const cemetery = await updateCemetery(id, {
      name: body.name,
      address: body.address
    })
    
    return cemetery
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error updating cemetery:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update cemetery'
    })
  }
})
