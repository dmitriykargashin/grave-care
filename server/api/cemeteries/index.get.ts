import { getAllCemeteries } from '#server/repositories/cemeteries'

export default defineEventHandler(async () => {
  try {
    const cemeteries = await getAllCemeteries()
    return cemeteries
  } catch (error) {
    console.error('Error fetching cemeteries:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch cemeteries'
    })
  }
})
