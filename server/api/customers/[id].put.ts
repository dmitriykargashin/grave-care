import { updateCustomer, getCustomerById } from '#server/repositories/customers'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Customer ID is required'
    })
  }
  
  try {
    const existing = await getCustomerById(id)
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: 'Customer not found'
      })
    }
    
    const customer = await updateCustomer(id, {
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      notes: body.notes
    })
    
    return customer
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error updating customer:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update customer'
    })
  }
})
