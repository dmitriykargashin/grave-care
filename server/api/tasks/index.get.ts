import { getAllTasks } from '#server/repositories/tasks'
import type { TaskStatus, TaskType, TaskPriority } from '#shared/types'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  try {
    const tasks = await getAllTasks({
      search: query.q as string | undefined,
      status: query.status as TaskStatus | undefined,
      type: query.type as TaskType | undefined,
      priority: query.priority as TaskPriority | undefined,
      dateFilter: query.dateFilter as 'all' | 'upcoming' | 'overdue' | undefined
    })
    return tasks
  } catch (error) {
    console.error('Error fetching tasks:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch tasks'
    })
  }
})
