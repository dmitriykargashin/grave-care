import { updateTask, getTaskById } from '#server/repositories/tasks'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Task ID is required'
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
    
    const task = await updateTask(id, {
      graveId: body.graveId,
      title: body.title,
      type: body.type,
      status: body.status,
      priority: body.priority,
      scheduledFor: body.scheduledFor,
      notes: body.notes
    })
    
    return task
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) throw error
    console.error('Error updating task:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update task'
    })
  }
})
