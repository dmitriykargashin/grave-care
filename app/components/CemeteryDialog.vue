<template>
  <v-dialog v-model="dialogModel" max-width="500" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon :icon="isEdit ? 'mdi-pencil' : 'mdi-plus'" class="mr-2" />
        {{ isEdit ? 'Edit Cemetery' : 'New Cemetery' }}
      </v-card-title>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="submit">
          <v-text-field
            v-model="form.name"
            label="Cemetery Name"
            :rules="[v => !!v || 'Name is required']"
            required
          />
          <v-textarea
            v-model="form.address"
            label="Address"
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
import type { Cemetery, CemeteryForm } from '~/types'

const props = defineProps<{
  cemetery?: Cemetery | null
}>()

const emit = defineEmits<{
  saved: [cemetery: Cemetery]
}>()

const dialogModel = defineModel<boolean>({ default: false })
const formRef = ref()
const loading = ref(false)

const isEdit = computed(() => !!props.cemetery?.id)

const form = ref<CemeteryForm>({
  name: '',
  address: ''
})

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

watch(() => props.cemetery, (val) => {
  if (val) {
    form.value = {
      name: val.name,
      address: val.address || ''
    }
  } else {
    resetForm()
  }
}, { immediate: true })

function resetForm() {
  form.value = { name: '', address: '' }
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
    const url = isEdit.value ? `/api/cemeteries/${props.cemetery!.id}` : '/api/cemeteries'
    const method = isEdit.value ? 'PUT' : 'POST'
    
    const result = await $fetch<Cemetery>(url, {
      method,
      body: form.value
    })
    
    emit('saved', result)
    showSnackbar?.(`Cemetery ${isEdit.value ? 'updated' : 'created'} successfully`)
    close()
  } catch (error) {
    console.error('Error saving cemetery:', error)
    showSnackbar?.('Failed to save cemetery', 'error')
  } finally {
    loading.value = false
  }
}
</script>
