<template>
  <v-dialog v-model="dialogModel" max-width="600" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon :icon="isEdit ? 'mdi-pencil' : 'mdi-plus'" class="mr-2" />
        {{ isEdit ? 'Edit Task' : 'New Task' }}
      </v-card-title>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="submit">
          <v-autocomplete
            v-model="form.graveId"
            :items="graveOptions"
            item-title="label"
            item-value="id"
            label="Grave"
            :rules="[v => !!v || 'Grave is required']"
            required
          >
            <template #item="{ item, props: itemProps }">
              <v-list-item v-bind="itemProps">
                <v-list-item-subtitle>
                  {{ item.raw.cemetery }} · {{ item.raw.plot }}
                </v-list-item-subtitle>
              </v-list-item>
            </template>
          </v-autocomplete>
          
          <v-text-field
            v-model="form.title"
            label="Title"
            :rules="[v => !!v || 'Title is required']"
            required
          />
          
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                v-model="form.type"
                :items="TASK_TYPES"
                item-title="title"
                item-value="value"
                label="Type"
                :rules="[v => !!v || 'Type is required']"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="form.priority"
                :items="TASK_PRIORITIES"
                item-title="title"
                item-value="value"
                label="Priority"
                :rules="[v => !!v || 'Priority is required']"
                required
              />
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                v-model="form.status"
                :items="TASK_STATUSES"
                item-title="title"
                item-value="value"
                label="Status"
                :rules="[v => !!v || 'Status is required']"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.scheduledFor"
                label="Scheduled For"
                type="date"
              />
            </v-col>
          </v-row>
          
          <v-textarea
            v-model="form.notes"
            label="Notes"
            rows="3"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="close">Cancel</v-btn>
        <v-btn color="primary" :loading="loading" @click="submit">
          {{ isEdit ? 'Save' : 'Create' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { Task, TaskForm, Grave } from '~/types'
import { TASK_TYPES, TASK_STATUSES, TASK_PRIORITIES } from '~/types'

const props = defineProps<{
  task?: Task | null
  prefillGraveId?: string
}>()

const emit = defineEmits<{
  saved: [task: Task]
}>()

const dialogModel = defineModel<boolean>({ default: false })
const formRef = ref()
const loading = ref(false)

const isEdit = computed(() => !!props.task?.id)

const form = ref<TaskForm>({
  graveId: '',
  title: '',
  type: 'cleanup',
  status: 'todo',
  priority: 'normal',
  scheduledFor: '',
  notes: ''
})

const { data: graves } = await useFetch<Grave[]>('/api/graves')

const graveOptions = computed(() => {
  return (graves.value || []).map(g => ({
    id: g.id,
    label: `${g.deceasedName || 'Unknown'} - ${g.plotRef}`,
    cemetery: g.cemeteryName || '',
    plot: g.plotRef
  }))
})

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

watch(() => props.task, (val) => {
  if (val) {
    form.value = {
      graveId: val.graveId,
      title: val.title,
      type: val.type,
      status: val.status,
      priority: val.priority,
      scheduledFor: val.scheduledFor?.split('T')[0] || '',
      notes: val.notes || ''
    }
  } else {
    resetForm()
  }
}, { immediate: true })

watch(() => dialogModel.value, (val) => {
  if (val && !props.task && props.prefillGraveId) {
    form.value.graveId = props.prefillGraveId
  }
})

function resetForm() {
  form.value = {
    graveId: props.prefillGraveId || '',
    title: '',
    type: 'cleanup',
    status: 'todo',
    priority: 'normal',
    scheduledFor: '',
    notes: ''
  }
}

function close() {
  dialogModel.value = false
  resetForm()
}

async function submit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  try {
    const url = isEdit.value ? `/api/tasks/${props.task!.id}` : '/api/tasks'
    const method = isEdit.value ? 'PUT' : 'POST'
    
    const result = await $fetch<Task>(url, {
      method,
      body: {
        ...form.value,
        scheduledFor: form.value.scheduledFor || null
      }
    })
    
    emit('saved', result)
    showSnackbar?.(`Task ${isEdit.value ? 'updated' : 'created'} successfully`)
    close()
  } catch (error) {
    console.error('Error saving task:', error)
    showSnackbar?.('Failed to save task', 'error')
  } finally {
    loading.value = false
  }
}
</script>
