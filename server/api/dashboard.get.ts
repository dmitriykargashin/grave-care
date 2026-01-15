import { getDashboardData } from '#server/repositories/tasks'

export default defineEventHandler(async () => {
  try {
    const data = await getDashboardData()
    return data
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch dashboard data'
    })
  }
})
