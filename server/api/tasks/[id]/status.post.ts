import { updateTaskStatus, getTaskById } from '#server/repositories/tasks'
import type { TaskStatus } from '#shared/types'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Task ID is required'
    })
  }
  
  if (!body.status) {
    throw createError({
      statusCode: 400,
      message: 'Status is required'
    })
  }
  
  const validStatuses: TaskStatus[] = ['todo', 'scheduled', 'in_progress', 'done', 'canceled']
  if (!validStatuses.includes(body.status)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid status'
    })
  }
  
  try {
    const existing = await getTaskById(id)
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: 'Task not found'
      })
    }
    
    const task = await updateTaskStatus(id, body.status)
    return task
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error updating task status:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update task status'
    })
  }
})
