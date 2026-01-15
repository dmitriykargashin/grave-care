import { getCustomerById } from '#server/repositories/customers'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Customer ID is required'
    })
  }
  
  try {
    const customer = await getCustomerById(id)
    
    if (!customer) {
      throw createError({
        statusCode: 404,
        message: 'Customer not found'
      })
    }
    
    return customer
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error fetching customer:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch customer'
    })
  }
})
