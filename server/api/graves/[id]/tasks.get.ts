import { getTasksByGraveId } from '#server/repositories/tasks'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Grave ID is required'
    })
  }
  
  try {
    const tasks = await getTasksByGraveId(id)
    return tasks
  } catch (error) {
    console.error('Error fetching grave tasks:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch grave tasks'
    })
  }
})
