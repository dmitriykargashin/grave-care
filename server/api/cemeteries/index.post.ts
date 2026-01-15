import { createCemetery } from '#server/repositories/cemeteries'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.name) {
    throw createError({
      statusCode: 400,
      message: 'Name is required'
    })
  }
  
  try {
    const cemetery = await createCemetery({
      name: body.name,
      address: body.address
    })
    return cemetery
  } catch (error) {
    console.error('Error creating cemetery:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create cemetery'
    })
  }
})
