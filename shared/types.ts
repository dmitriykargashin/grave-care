// Task types
export type TaskType = 'cleanup' | 'flowers' | 'headstone' | 'photo_report' | 'other'
export type TaskStatus = 'todo' | 'scheduled' | 'in_progress' | 'done' | 'canceled'
export type TaskPriority = 'low' | 'normal' | 'high'

export const TASK_TYPES: { value: TaskType; title: string }[] = [
  { value: 'cleanup', title: 'Cleanup' },
  { value: 'flowers', title: 'Flowers' },
  { value: 'headstone', title: 'Headstone' },
  { value: 'photo_report', title: 'Photo Report' },
  { value: 'other', title: 'Other' }
]

export const TASK_STATUSES: { value: TaskStatus; title: string; color: string }[] = [
  { value: 'todo', title: 'To Do', color: 'grey' },
  { value: 'scheduled', title: 'Scheduled', color: 'blue' },
  { value: 'in_progress', title: 'In Progress', color: 'orange' },
  { value: 'done', title: 'Done', color: 'success' },
  { value: 'canceled', title: 'Canceled', color: 'error' }
]

export const TASK_PRIORITIES: { value: TaskPriority; title: string; color: string }[] = [
  { value: 'low', title: 'Low', color: 'grey' },
  { value: 'normal', title: 'Normal', color: 'blue' },
  { value: 'high', title: 'High', color: 'error' }
]

// Entity interfaces
export interface Customer {
  id: string
  fullName: string
  phone: string | null
  email: string | null
  notes: string | null
  createdAt: string
}

export interface Cemetery {
  id: string
  name: string
  address: string | null
  createdAt: string
}

export interface Grave {
  id: string
  cemeteryId: string
  customerId: string
  plotRef: string
  deceasedName: string | null
  specialInstructions: string | null
  createdAt: string
  // Joined fields
  cemeteryName?: string
  customerName?: string
  openTasksCount?: number
}

export interface Task {
  id: string
  graveId: string
  title: string
  type: TaskType
  status: TaskStatus
  priority: TaskPriority
  scheduledFor: string | null
  notes: string | null
  createdAt: string
  // Joined fields
  cemeteryName?: string
  plotRef?: string
  deceasedName?: string
  customerName?: string
  customerPhone?: string
  customerEmail?: string
}

export interface TaskPhoto {
  id: string
  taskId: string
  blobUrl: string
  caption: string | null
  createdAt: string
}

// API response types
export interface DashboardData {
  openTasksCount: number
  scheduledThisWeekCount: number
  completedLast7DaysCount: number
  overdueTasks: Task[]
  recentTasks: Task[]
}

// Form types
export interface CustomerForm {
  fullName: string
  phone: string
  email: string
  notes: string
}

export interface CemeteryForm {
  name: string
  address: string
}

export interface GraveForm {
  cemeteryId: string
  customerId: string
  plotRef: string
  deceasedName: string
  specialInstructions: string
}

export interface TaskForm {
  graveId: string
  title: string
  type: TaskType
  status: TaskStatus
  priority: TaskPriority
  scheduledFor: string
  notes: string
}
