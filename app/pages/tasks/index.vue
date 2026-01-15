<template>
  <div>
    <!-- Filters -->
    <v-card class="mb-4">
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="filters.search"
              prepend-inner-icon="mdi-magnify"
              label="Search tasks..."
              hide-details
              clearable
              @update:model-value="debouncedRefresh"
            />
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <v-select
              v-model="filters.status"
              :items="statusOptions"
              label="Status"
              hide-details
              clearable
              @update:model-value="refresh"
            />
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <v-select
              v-model="filters.type"
              :items="typeOptions"
              label="Type"
              hide-details
              clearable
              @update:model-value="refresh"
            />
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <v-select
              v-model="filters.priority"
              :items="priorityOptions"
              label="Priority"
              hide-details
              clearable
              @update:model-value="refresh"
            />
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <v-btn-toggle v-model="filters.dateFilter" mandatory color="primary" density="comfortable">
              <v-btn value="all" size="small">All</v-btn>
              <v-btn value="upcoming" size="small">Upcoming</v-btn>
              <v-btn value="overdue" size="small">Overdue</v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="12" md="1" class="text-right">
            <v-btn color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" />
              <span class="d-none d-md-inline ml-2">New</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Tasks Table -->
    <v-card>
      <v-data-table
        :headers="headers"
        :items="tasks || []"
        :loading="pending"
        :items-per-page="15"
        hover
        @click:row="(_event: Event, { item }: { item: Task }) => navigateTo(`/tasks/${item.id}`)"
      >
        <template #item.status="{ item }">
          <v-menu>
            <template #activator="{ props }">
              <v-chip
                v-bind="props"
                :color="getStatusColor(item.status)"
                size="small"
                class="cursor-pointer"
                @click.stop
              >
                {{ getStatusLabel(item.status) }}
                <v-icon icon="mdi-menu-down" end size="small" />
              </v-chip>
            </template>
            <v-list density="compact">
              <v-list-item
                v-for="status in TASK_STATUSES"
                :key="status.value"
                :disabled="status.value === item.status"
                @click="updateStatus(item.id, status.value)"
              >
                <v-list-item-title>{{ status.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>

        <template #item.priority="{ item }">
          <v-chip :color="getPriorityColor(item.priority)" size="small" variant="outlined">
            {{ item.priority }}
          </v-chip>
        </template>

        <template #item.type="{ item }">
          <span class="text-capitalize">{{ item.type.replace('_', ' ') }}</span>
        </template>

        <template #item.scheduledFor="{ item }">
          <span :class="{ 'text-error': isOverdue(item) }">
            {{ formatDate(item.scheduledFor) }}
          </span>
        </template>

        <template #item.grave="{ item }">
          <div>
            <div class="font-weight-medium">{{ item.deceasedName || 'Unknown' }}</div>
            <div class="text-caption text-medium-emphasis">
              {{ item.cemeteryName }} · {{ item.plotRef }}
            </div>
          </div>
        </template>

        <template #item.actions="{ item }">
          <v-btn icon variant="text" size="small" @click.stop="openEditDialog(item)">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </template>

        <template #no-data>
          <div class="text-center py-8">
            <v-icon icon="mdi-clipboard-text-outline" size="64" color="grey-lighten-1" />
            <div class="text-h6 mt-4">No tasks found</div>
            <div class="text-body-2 text-medium-emphasis mb-4">
              {{ hasFilters ? 'Try adjusting your filters' : 'Create your first task to get started' }}
            </div>
            <v-btn v-if="!hasFilters" color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" start />
              Create Task
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <TaskDialog
      v-model="taskDialog"
      :task="selectedTask"
      @saved="onTaskSaved"
    />
  </div>
</template>

<script setup lang="ts">
import type { Task, TaskStatus, TaskPriority } from '~/types'
import { TASK_TYPES, TASK_STATUSES, TASK_PRIORITIES } from '~/types'

const route = useRoute()

const filters = ref({
  search: '',
  status: null as string | null,
  type: null as string | null,
  priority: null as string | null,
  dateFilter: (route.query.dateFilter as string) || 'all'
})

const queryParams = computed(() => {
  const params: Record<string, string> = {}
  if (filters.value.search) params.q = filters.value.search
  if (filters.value.status) params.status = filters.value.status
  if (filters.value.type) params.type = filters.value.type
  if (filters.value.priority) params.priority = filters.value.priority
  if (filters.value.dateFilter && filters.value.dateFilter !== 'all') {
    params.dateFilter = filters.value.dateFilter
  }
  return params
})

const { data: tasks, pending, refresh } = await useFetch<Task[]>('/api/tasks', {
  query: queryParams
})

const taskDialog = ref(false)
const selectedTask = ref<Task | null>(null)

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

const headers = [
  { title: 'Title', key: 'title', sortable: true },
  { title: 'Type', key: 'type', sortable: true },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Priority', key: 'priority', sortable: true },
  { title: 'Scheduled', key: 'scheduledFor', sortable: true },
  { title: 'Grave', key: 'grave', sortable: false },
  { title: '', key: 'actions', sortable: false, width: 50 }
]

const statusOptions = TASK_STATUSES.map(s => ({ title: s.title, value: s.value }))
const typeOptions = TASK_TYPES.map(t => ({ title: t.title, value: t.value }))
const priorityOptions = TASK_PRIORITIES.map(p => ({ title: p.title, value: p.value }))

const hasFilters = computed(() => {
  return filters.value.search || filters.value.status || filters.value.type || 
         filters.value.priority || filters.value.dateFilter !== 'all'
})

let debounceTimer: ReturnType<typeof setTimeout>
function debouncedRefresh() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => refresh(), 300)
}

function getStatusColor(status: TaskStatus): string {
  return TASK_STATUSES.find(s => s.value === status)?.color || 'grey'
}

function getStatusLabel(status: TaskStatus): string {
  return TASK_STATUSES.find(s => s.value === status)?.title || status
}

function getPriorityColor(priority: TaskPriority): string {
  return TASK_PRIORITIES.find(p => p.value === priority)?.color || 'grey'
}

function formatDate(date: string | null): string {
  if (!date) return '-'
  return new Date(date).toLocaleDateString()
}

function isOverdue(task: Task): boolean {
  if (!task.scheduledFor || task.status === 'done' || task.status === 'canceled') return false
  return new Date(task.scheduledFor) < new Date(new Date().toDateString())
}

function openCreateDialog() {
  selectedTask.value = null
  taskDialog.value = true
}

function openEditDialog(task: Task) {
  selectedTask.value = task
  taskDialog.value = true
}

async function updateStatus(taskId: string, status: TaskStatus) {
  try {
    await $fetch(`/api/tasks/${taskId}/status`, {
      method: 'POST',
      body: { status }
    })
    showSnackbar?.('Status updated')
    refresh()
  } catch (error) {
    console.error('Error updating status:', error)
    showSnackbar?.('Failed to update status', 'error')
  }
}

function onTaskSaved() {
  refresh()
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
