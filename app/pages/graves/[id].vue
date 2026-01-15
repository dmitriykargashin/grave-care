<template>
  <div>
    <v-btn variant="text" class="mb-4" to="/graves">
      <v-icon icon="mdi-arrow-left" start />
      Back to Graves
    </v-btn>

    <template v-if="pending">
      <v-skeleton-loader type="article" />
    </template>

    <template v-else-if="grave">
      <!-- Header Card -->
      <v-card class="mb-4">
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-grave-stone" class="mr-2" />
          <span class="text-h5">{{ grave.deceasedName || 'Unknown Deceased' }}</span>
          <v-spacer />
          <v-btn icon variant="text" @click="openEditDialog">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Cemetery</div>
              <div class="text-body-1">{{ grave.cemeteryName }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Plot Reference</div>
              <div class="text-body-1">{{ grave.plotRef }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Customer</div>
              <div class="text-body-1">{{ grave.customerName }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Open Tasks</div>
              <v-chip :color="grave.openTasksCount > 0 ? 'warning' : 'success'" size="small">
                {{ grave.openTasksCount }}
              </v-chip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Special Instructions -->
      <v-card v-if="grave.specialInstructions" class="mb-4">
        <v-card-title>
          <v-icon icon="mdi-information" class="mr-2" />
          Special Instructions
        </v-card-title>
        <v-card-text>
          <p style="white-space: pre-wrap;">{{ grave.specialInstructions }}</p>
        </v-card-text>
      </v-card>

      <!-- Customer Card -->
      <v-card class="mb-4">
        <v-card-title>
          <v-icon icon="mdi-account-circle" class="mr-2" />
          Customer Details
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item :to="`/customers/${grave.customerId}`">
              <template #prepend>
                <v-avatar color="primary">
                  <v-icon icon="mdi-account" />
                </v-avatar>
              </template>
              <v-list-item-title>{{ grave.customerName }}</v-list-item-title>
              <v-list-item-subtitle>Click to view customer details</v-list-item-subtitle>
              <template #append>
                <v-icon icon="mdi-chevron-right" />
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>

      <!-- Tasks for this Grave -->
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-clipboard-check" class="mr-2" />
          Tasks
          <v-spacer />
          <v-btn color="primary" size="small" @click="openTaskDialog">
            <v-icon icon="mdi-plus" start />
            New Task
          </v-btn>
        </v-card-title>
        <v-card-text v-if="tasksPending">
          <v-skeleton-loader type="list-item-two-line@3" />
        </v-card-text>
        <v-list v-else-if="tasks?.length">
          <v-list-item
            v-for="task in tasks"
            :key="task.id"
            :to="`/tasks/${task.id}`"
          >
            <template #prepend>
              <v-chip :color="getStatusColor(task.status)" size="small" class="mr-2">
                {{ getStatusLabel(task.status) }}
              </v-chip>
            </template>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ task.type.replace('_', ' ') }}
              <span v-if="task.scheduledFor">
                · {{ formatDate(task.scheduledFor) }}
              </span>
            </v-list-item-subtitle>
            <template #append>
              <v-chip
                :color="getPriorityColor(task.priority)"
                size="x-small"
                variant="outlined"
                class="mr-2"
              >
                {{ task.priority }}
              </v-chip>
              <v-icon icon="mdi-chevron-right" />
            </template>
          </v-list-item>
        </v-list>
        <v-card-text v-else class="text-center text-medium-emphasis py-8">
          <v-icon icon="mdi-clipboard-text-outline" size="48" class="mb-2" />
          <div>No tasks for this grave</div>
          <v-btn color="primary" variant="tonal" class="mt-4" @click="openTaskDialog">
            Create First Task
          </v-btn>
        </v-card-text>
      </v-card>
    </template>

    <template v-else>
      <v-alert type="error" variant="tonal">
        Grave not found
      </v-alert>
    </template>

    <GraveDialog
      v-model="graveDialog"
      :grave="grave"
      @saved="refreshGrave"
    />

    <TaskDialog
      v-model="taskDialog"
      :prefill-grave-id="graveId"
      @saved="refreshTasks"
    />
  </div>
</template>

<script setup lang="ts">
import type { Grave, Task, TaskStatus, TaskPriority } from '~/types'
import { TASK_STATUSES, TASK_PRIORITIES } from '~/types'

const route = useRoute()
const graveId = route.params.id as string

const { data: grave, pending, refresh: refreshGrave } = await useFetch<Grave>(`/api/graves/${graveId}`)
const { data: tasks, pending: tasksPending, refresh: refreshTasks } = await useFetch<Task[]>(`/api/graves/${graveId}/tasks`)

const graveDialog = ref(false)
const taskDialog = ref(false)

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

function openEditDialog() {
  graveDialog.value = true
}

function openTaskDialog() {
  taskDialog.value = true
}
</script>
