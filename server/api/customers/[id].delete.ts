import { deleteCustomer, getCustomerById } from '#server/repositories/customers'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
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
    
    await deleteCustomer(id)
    return { success: true }
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes('Cannot delete')) {
      throw createError({
        statusCode: 400,
        message: error.message
      })
    }
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error deleting customer:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete customer'
    })
  }
})
