import { updateGrave, getGraveById } from '#server/repositories/graves'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Grave ID is required'
    })
  }
  
  try {
    const existing = await getGraveById(id)
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: 'Grave not found'
      })
    }
    
    const grave = await updateGrave(id, {
      cemeteryId: body.cemeteryId,
      customerId: body.customerId,
      plotRef: body.plotRef,
      deceasedName: body.deceasedName,
      specialInstructions: body.specialInstructions
    })
    
    return grave
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error updating grave:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update grave'
    })
  }
})
