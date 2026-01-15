import { getAllCustomers } from '#server/repositories/customers'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const search = query.q as string | undefined
  
  try {
    const customers = await getAllCustomers(search)
    return customers
  } catch (error) {
    console.error('Error fetching customers:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch customers'
    })
  }
})
