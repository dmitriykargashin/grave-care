import type { Task, TaskStatus, TaskType, TaskPriority } from '#shared/types'
import { useDb, toCamelCase, generateId, nowISO } from '../utils/db'

interface TaskFilters {
  search?: string
  status?: TaskStatus
  type?: TaskType
  priority?: TaskPriority
  dateFilter?: 'all' | 'upcoming' | 'overdue'
  graveId?: string
}

export async function getAllTasks(filters: TaskFilters = {}): Promise<Task[]> {
  const db = useDb()
  
  let sql = `
    SELECT 
      t.id, t.grave_id, t.title, t.type, t.status, t.priority, 
      t.scheduled_for, t.notes, t.created_at,
      c.name as cemetery_name,
      g.plot_ref,
      g.deceased_name,
      cu.full_name as customer_name,
      cu.phone as customer_phone,
      cu.email as customer_email
    FROM tasks t
    LEFT JOIN graves g ON t.grave_id = g.id
    LEFT JOIN cemeteries c ON g.cemetery_id = c.id
    LEFT JOIN customers cu ON g.customer_id = cu.id
    WHERE 1=1
  `
  const args: (string | null)[] = []
  
  if (filters.search) {
    sql += ` AND (t.title LIKE ? OR c.name LIKE ? OR g.plot_ref LIKE ? OR g.deceased_name LIKE ?)`
    const pattern = `%${filters.search}%`
    args.push(pattern, pattern, pattern, pattern)
  }
  
  if (filters.status) {
    sql += ` AND t.status = ?`
    args.push(filters.status)
  }
  
  if (filters.type) {
    sql += ` AND t.type = ?`
    args.push(filters.type)
  }
  
  if (filters.priority) {
    sql += ` AND t.priority = ?`
    args.push(filters.priority)
  }
  
  if (filters.graveId) {
    sql += ` AND t.grave_id = ?`
    args.push(filters.graveId)
  }
  
  const today = new Date().toISOString().split('T')[0]
  
  if (filters.dateFilter === 'upcoming') {
    sql += ` AND t.scheduled_for >= ? AND t.status NOT IN ('done', 'canceled')`
    args.push(today)
  } else if (filters.dateFilter === 'overdue') {
    sql += ` AND t.scheduled_for < ? AND t.status NOT IN ('done', 'canceled')`
    args.push(today)
  }
  
  sql += ` ORDER BY 
    CASE WHEN t.scheduled_for IS NULL THEN 1 ELSE 0 END,
    t.scheduled_for ASC, 
    t.created_at DESC`
  
  const result = await db.execute({ sql, args })
  return result.rows.map(row => toCamelCase<Task>(row as Record<string, unknown>))
}

export async function getTaskById(id: string): Promise<Task | null> {
  const db = useDb()
  const result = await db.execute({
    sql: `
      SELECT 
        t.id, t.grave_id, t.title, t.type, t.status, t.priority, 
        t.scheduled_for, t.notes, t.created_at,
        c.name as cemetery_name,
        g.plot_ref,
        g.deceased_name,
        cu.full_name as customer_name,
        cu.phone as customer_phone,
        cu.email as customer_email
      FROM tasks t
      LEFT JOIN graves g ON t.grave_id = g.id
      LEFT JOIN cemeteries c ON g.cemetery_id = c.id
      LEFT JOIN customers cu ON g.customer_id = cu.id
      WHERE t.id = ?
    `,
    args: [id]
  })
  
  if (result.rows.length === 0) return null
  return toCamelCase<Task>(result.rows[0] as Record<string, unknown>)
}

export async function getTasksByGraveId(graveId: string): Promise<Task[]> {
  return getAllTasks({ graveId })
}

export async function createTask(data: {
  graveId: string
  title: string
  type: TaskType
  status: TaskStatus
  priority: TaskPriority
  scheduledFor?: string
  notes?: string
}): Promise<Task> {
  const db = useDb()
  const id = generateId()
  const createdAt = nowISO()
  
  await db.execute({
    sql: `INSERT INTO tasks (id, grave_id, title, type, status, priority, scheduled_for, notes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [id, data.graveId, data.title, data.type, data.status, data.priority, data.scheduledFor || null, data.notes || null, createdAt]
  })
  
  return getTaskById(id) as Promise<Task>
}

export async function updateTask(id: string, data: {
  graveId?: string
  title?: string
  type?: TaskType
  status?: TaskStatus
  priority?: TaskPriority
  scheduledFor?: string | null
  notes?: string | null
}): Promise<Task | null> {
  const db = useDb()
  
  const updates: string[] = []
  const args: (string | null)[] = []
  
  if (data.graveId !== undefined) {
    updates.push('grave_id = ?')
    args.push(data.graveId)
  }
  if (data.title !== undefined) {
    updates.push('title = ?')
    args.push(data.title)
  }
  if (data.type !== undefined) {
    updates.push('type = ?')
    args.push(data.type)
  }
  if (data.status !== undefined) {
    updates.push('status = ?')
    args.push(data.status)
  }
  if (data.priority !== undefined) {
    updates.push('priority = ?')
    args.push(data.priority)
  }
  if (data.scheduledFor !== undefined) {
    updates.push('scheduled_for = ?')
    args.push(data.scheduledFor || null)
  }
  if (data.notes !== undefined) {
    updates.push('notes = ?')
    args.push(data.notes || null)
  }
  
  if (updates.length === 0) return getTaskById(id)
  
  args.push(id)
  await db.execute({
    sql: `UPDATE tasks SET ${updates.join(', ')} WHERE id = ?`,
    args
  })
  
  return getTaskById(id)
}

export async function updateTaskStatus(id: string, status: TaskStatus): Promise<Task | null> {
  return updateTask(id, { status })
}

export async function getDashboardData() {
  const db = useDb()
  const today = new Date().toISOString().split('T')[0]
  
  // Get start and end of current week (Monday to Sunday)
  const now = new Date()
  const dayOfWeek = now.getDay()
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  const monday = new Date(now)
  monday.setDate(now.getDate() + diffToMonday)
  monday.setHours(0, 0, 0, 0)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  sunday.setHours(23, 59, 59, 999)
  
  const weekStart = monday.toISOString().split('T')[0]
  const weekEnd = sunday.toISOString().split('T')[0]
  
  // 7 days ago
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const sevenDaysAgoStr = sevenDaysAgo.toISOString().split('T')[0]
  
  // Open tasks count
  const openResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM tasks WHERE status NOT IN ('done', 'canceled')`,
    args: []
  })
  const openCountRow = openResult.rows[0] as unknown as { count: number }
  const openTasksCount = Number(openCountRow.count)
  
  // Scheduled this week
  const scheduledResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM tasks WHERE scheduled_for >= ? AND scheduled_for <= ? AND status NOT IN ('done', 'canceled')`,
    args: [weekStart, weekEnd]
  })
  const scheduledCountRow = scheduledResult.rows[0] as unknown as { count: number }
  const scheduledThisWeekCount = Number(scheduledCountRow.count)
  
  // Completed last 7 days (approximation: status = done and created_at in last 7 days or scheduled_for in last 7 days)
  const completedResult = await db.execute({
    sql: `SELECT COUNT(*) as count FROM tasks WHERE status = 'done' AND (scheduled_for >= ? OR created_at >= ?)`,
    args: [sevenDaysAgo.toISOString(), sevenDaysAgo.toISOString()]
  })
  const completedCountRow = completedResult.rows[0] as unknown as { count: number }
  const completedLast7DaysCount = Number(completedCountRow.count)
  
  // Overdue tasks (top 6)
  const overdueResult = await db.execute({
    sql: `
      SELECT 
        t.id, t.grave_id, t.title, t.type, t.status, t.priority, 
        t.scheduled_for, t.notes, t.created_at,
        c.name as cemetery_name,
        g.plot_ref,
        g.deceased_name,
        cu.full_name as customer_name
      FROM tasks t
      LEFT JOIN graves g ON t.grave_id = g.id
      LEFT JOIN cemeteries c ON g.cemetery_id = c.id
      LEFT JOIN customers cu ON g.customer_id = cu.id
      WHERE t.scheduled_for < ? AND t.status NOT IN ('done', 'canceled')
      ORDER BY t.scheduled_for ASC
      LIMIT 6
    `,
    args: [today]
  })
  const overdueTasks = overdueResult.rows.map(row => toCamelCase<Task>(row as Record<string, unknown>))
  
  // Recent tasks (top 10)
  const recentResult = await db.execute({
    sql: `
      SELECT 
        t.id, t.grave_id, t.title, t.type, t.status, t.priority, 
        t.scheduled_for, t.notes, t.created_at,
        c.name as cemetery_name,
        g.plot_ref,
        g.deceased_name,
        cu.full_name as customer_name
      FROM tasks t
      LEFT JOIN graves g ON t.grave_id = g.id
      LEFT JOIN cemeteries c ON g.cemetery_id = c.id
      LEFT JOIN customers cu ON g.customer_id = cu.id
      ORDER BY t.created_at DESC
      LIMIT 10
    `,
    args: []
  })
  const recentTasks = recentResult.rows.map(row => toCamelCase<Task>(row as Record<string, unknown>))
  
  return {
    openTasksCount,
    scheduledThisWeekCount,
    completedLast7DaysCount,
    overdueTasks,
    recentTasks
  }
}
