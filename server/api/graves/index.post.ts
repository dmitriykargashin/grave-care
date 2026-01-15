import { createGrave } from '#server/repositories/graves'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.cemeteryId || !body.customerId || !body.plotRef) {
    throw createError({
      statusCode: 400,
      message: 'Cemetery, customer, and plot reference are required'
    })
  }
  
  try {
    const grave = await createGrave({
      cemeteryId: body.cemeteryId,
      customerId: body.customerId,
      plotRef: body.plotRef,
      deceasedName: body.deceasedName,
      specialInstructions: body.specialInstructions
    })
    return grave
  } catch (error) {
    console.error('Error creating grave:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create grave'
    })
  }
})
