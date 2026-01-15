import { createCustomer } from '#server/repositories/customers'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.fullName) {
    throw createError({
      statusCode: 400,
      message: 'Full name is required'
    })
  }
  
  try {
    const customer = await createCustomer({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      notes: body.notes
    })
    return customer
  } catch (error) {
    console.error('Error creating customer:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create customer'
    })
  }
})
