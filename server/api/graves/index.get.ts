import { getAllGraves } from '#server/repositories/graves'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const search = query.q as string | undefined
  
  try {
    const graves = await getAllGraves(search)
    return graves
  } catch (error) {
    console.error('Error fetching graves:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch graves'
    })
  }
})
