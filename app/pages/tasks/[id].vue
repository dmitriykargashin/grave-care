<template>
  <div>
    <v-btn variant="text" class="mb-4" to="/tasks">
      <v-icon icon="mdi-arrow-left" start />
      Back to Tasks
    </v-btn>

    <template v-if="pending">
      <v-skeleton-loader type="article" />
    </template>

    <template v-else-if="task">
      <!-- Header Card -->
      <v-card class="mb-4">
        <v-card-title class="d-flex align-center flex-wrap ga-2">
          <span class="text-h5">{{ task.title }}</span>
          <v-spacer />
          <v-chip :color="getStatusColor(task.status)" size="small">
            {{ getStatusLabel(task.status) }}
          </v-chip>
          <v-chip :color="getPriorityColor(task.priority)" size="small" variant="outlined">
            {{ task.priority }}
          </v-chip>
          <v-btn icon variant="text" @click="openEditDialog">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Type</div>
              <div class="text-body-1 text-capitalize">{{ task.type.replace('_', ' ') }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Scheduled For</div>
              <div class="text-body-1" :class="{ 'text-error': isOverdue }">
                {{ formatDate(task.scheduledFor) }}
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Created</div>
              <div class="text-body-1">{{ formatDateTime(task.createdAt) }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Quick Actions</div>
              <v-btn-group density="compact" class="mt-1">
                <v-btn
                  v-for="status in quickStatuses"
                  :key="status.value"
                  :color="task.status === status.value ? status.color : undefined"
                  :variant="task.status === status.value ? 'flat' : 'outlined'"
                  size="small"
                  @click="updateStatus(status.value)"
                >
                  {{ status.title }}
                </v-btn>
              </v-btn-group>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- Grave Info -->
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-title>
              <v-icon icon="mdi-grave-stone" class="mr-2" />
              Grave Information
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-map-marker" />
                  </template>
                  <v-list-item-title>{{ task.cemeteryName }}</v-list-item-title>
                  <v-list-item-subtitle>Cemetery</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-grid" />
                  </template>
                  <v-list-item-title>{{ task.plotRef }}</v-list-item-title>
                  <v-list-item-subtitle>Plot Reference</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-account" />
                  </template>
                  <v-list-item-title>{{ task.deceasedName || 'Unknown' }}</v-list-item-title>
                  <v-list-item-subtitle>Deceased</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" :to="`/graves/${task.graveId}`">
                View Grave Details
                <v-icon icon="mdi-arrow-right" end />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Customer Info -->
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-title>
              <v-icon icon="mdi-account-circle" class="mr-2" />
              Customer Information
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-account" />
                  </template>
                  <v-list-item-title>{{ task.customerName || 'Unknown' }}</v-list-item-title>
                  <v-list-item-subtitle>Name</v-list-item-subtitle>
                </v-list-item>
                <v-list-item v-if="task.customerPhone">
                  <template #prepend>
                    <v-icon icon="mdi-phone" />
                  </template>
                  <v-list-item-title>{{ task.customerPhone }}</v-list-item-title>
                  <v-list-item-subtitle>Phone</v-list-item-subtitle>
                </v-list-item>
                <v-list-item v-if="task.customerEmail">
                  <template #prepend>
                    <v-icon icon="mdi-email" />
                  </template>
                  <v-list-item-title>{{ task.customerEmail }}</v-list-item-title>
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" @click="showComingSoon?.()">
                <v-icon icon="mdi-email-send" start />
                Send Report
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Notes -->
      <v-card v-if="task.notes" class="mt-4">
        <v-card-title>
          <v-icon icon="mdi-note-text" class="mr-2" />
          Notes
        </v-card-title>
        <v-card-text>
          <p class="text-body-1" style="white-space: pre-wrap;">{{ task.notes }}</p>
        </v-card-text>
      </v-card>

      <!-- Photo Report -->
      <v-card class="mt-4">
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-camera" class="mr-2" />
          Photo Report
          <v-spacer />
          <v-btn color="primary" size="small" @click="triggerFileInput">
            <v-icon icon="mdi-upload" start />
            Upload Photo
          </v-btn>
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            style="display: none;"
            @change="uploadPhoto"
          >
        </v-card-title>
        <v-card-text>
          <div v-if="photosPending" class="text-center py-4">
            <v-progress-circular indeterminate />
          </div>
          <v-row v-else-if="photos?.length">
            <v-col
              v-for="photo in photos"
              :key="photo.id"
              cols="6"
              sm="4"
              md="3"
            >
              <v-card variant="outlined">
                <v-img
                  :src="photo.blobUrl"
                  aspect-ratio="1"
                  cover
                  class="cursor-pointer"
                  @click="openPhotoDialog(photo)"
                >
                  <template #placeholder>
                    <v-skeleton-loader type="image" />
                  </template>
                </v-img>
                <v-card-text v-if="photo.caption" class="pa-2 text-caption">
                  {{ photo.caption }}
                </v-card-text>
                <v-card-actions class="pa-2">
                  <v-spacer />
                  <v-btn
                    icon
                    size="x-small"
                    color="error"
                    variant="text"
                    @click="deletePhoto(photo.id)"
                  >
                    <v-icon icon="mdi-delete" />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <div v-else class="text-center text-medium-emphasis py-8">
            <v-icon icon="mdi-camera-off" size="48" class="mb-2" />
            <div>No photos uploaded yet</div>
          </div>
        </v-card-text>
      </v-card>
    </template>

    <template v-else>
      <v-alert type="error" variant="tonal">
        Task not found
      </v-alert>
    </template>

    <TaskDialog
      v-model="taskDialog"
      :task="task"
      @saved="refreshTask"
    />

    <!-- Photo Preview Dialog -->
    <v-dialog v-model="photoDialog" max-width="800">
      <v-card v-if="selectedPhoto">
        <v-img :src="selectedPhoto.blobUrl" max-height="600" />
        <v-card-text v-if="selectedPhoto.caption">
          {{ selectedPhoto.caption }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="photoDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Caption Dialog -->
    <v-dialog v-model="captionDialog" max-width="400" persistent>
      <v-card>
        <v-card-title>Add Caption (Optional)</v-card-title>
        <v-card-text>
          <v-textarea
            v-model="photoCaption"
            label="Caption"
            rows="2"
            hide-details
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="cancelUpload">Cancel</v-btn>
          <v-btn color="primary" :loading="uploading" @click="confirmUpload">
            Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import type { Task, TaskPhoto, TaskStatus, TaskPriority } from '~/types'
import { TASK_STATUSES, TASK_PRIORITIES } from '~/types'

const route = useRoute()
const taskId = route.params.id as string

const { data: task, pending, refresh: refreshTask } = await useFetch<Task>(`/api/tasks/${taskId}`)
const { data: photos, pending: photosPending, refresh: refreshPhotos } = await useFetch<TaskPhoto[]>(`/api/tasks/${taskId}/photos`)

const taskDialog = ref(false)
const photoDialog = ref(false)
const captionDialog = ref(false)
const selectedPhoto = ref<TaskPhoto | null>(null)
const fileInput = ref<HTMLInputElement>()
const pendingFile = ref<File | null>(null)
const photoCaption = ref('')
const uploading = ref(false)

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')
const showComingSoon = inject<() => void>('showComingSoon')

const quickStatuses: { value: TaskStatus; title: string; color: string }[] = [
  { value: 'in_progress', title: 'Start', color: 'orange' },
  { value: 'done', title: 'Complete', color: 'success' },
  { value: 'canceled', title: 'Cancel', color: 'error' }
]

const isOverdue = computed(() => {
  if (!task.value?.scheduledFor || task.value.status === 'done' || task.value.status === 'canceled') {
    return false
  }
  return new Date(task.value.scheduledFor) < new Date(new Date().toDateString())
})

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
  if (!date) return 'Not scheduled'
  return new Date(date).toLocaleDateString()
}

function formatDateTime(date: string): string {
  return new Date(date).toLocaleString()
}

function openEditDialog() {
  taskDialog.value = true
}

async function updateStatus(status: TaskStatus) {
  try {
    await $fetch(`/api/tasks/${taskId}/status`, {
      method: 'POST',
      body: { status }
    })
    showSnackbar?.('Status updated')
    refreshTask()
  } catch (error) {
    console.error('Error updating status:', error)
    showSnackbar?.('Failed to update status', 'error')
  }
}

function triggerFileInput() {
  fileInput.value?.click()
}

function uploadPhoto(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  pendingFile.value = file
  photoCaption.value = ''
  captionDialog.value = true
  
  // Reset input
  input.value = ''
}

function cancelUpload() {
  pendingFile.value = null
  photoCaption.value = ''
  captionDialog.value = false
}

async function confirmUpload() {
  if (!pendingFile.value) return

  uploading.value = true
  try {
    // Upload to blob
    const formData = new FormData()
    formData.append('file', pendingFile.value)

    const { blobUrl } = await $fetch<{ blobUrl: string }>('/api/photos/upload', {
      method: 'POST',
      body: formData
    })

    // Save to database
    await $fetch(`/api/tasks/${taskId}/photos`, {
      method: 'POST',
      body: {
        blobUrl,
        caption: photoCaption.value || null
      }
    })

    showSnackbar?.('Photo uploaded successfully')
    refreshPhotos()
    cancelUpload()
  } catch (error) {
    console.error('Error uploading photo:', error)
    showSnackbar?.('Failed to upload photo', 'error')
  } finally {
    uploading.value = false
  }
}

function openPhotoDialog(photo: TaskPhoto) {
  selectedPhoto.value = photo
  photoDialog.value = true
}

async function deletePhoto(photoId: string) {
  if (!confirm('Delete this photo?')) return

  try {
    await $fetch(`/api/task-photos/${photoId}`, {
      method: 'DELETE'
    })
    showSnackbar?.('Photo deleted')
    refreshPhotos()
  } catch (error) {
    console.error('Error deleting photo:', error)
    showSnackbar?.('Failed to delete photo', 'error')
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
