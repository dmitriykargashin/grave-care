import { getTaskById } from '#server/repositories/tasks'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Task ID is required'
    })
  }
  
  try {
    const task = await getTaskById(id)
    
    if (!task) {
      throw createError({
        statusCode: 404,
        message: 'Task not found'
      })
    }
    
    return task
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error fetching task:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch task'
    })
  }
})
