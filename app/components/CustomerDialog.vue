<template>
  <v-dialog v-model="dialogModel" max-width="500" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon :icon="isEdit ? 'mdi-pencil' : 'mdi-plus'" class="mr-2" />
        {{ isEdit ? 'Edit Customer' : 'New Customer' }}
      </v-card-title>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="submit">
          <v-text-field
            v-model="form.fullName"
            label="Full Name"
            :rules="[v => !!v || 'Name is required']"
            required
          />
          <v-text-field
            v-model="form.phone"
            label="Phone"
            type="tel"
          />
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            :rules="[v => !v || /.+@.+\..+/.test(v) || 'Invalid email']"
          />
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
import type { Customer, CustomerForm } from '~/types'

const props = defineProps<{
  customer?: Customer | null
}>()

const emit = defineEmits<{
  saved: [customer: Customer]
}>()

const dialogModel = defineModel<boolean>({ default: false })
const formRef = ref()
const loading = ref(false)

const isEdit = computed(() => !!props.customer?.id)

const form = ref<CustomerForm>({
  fullName: '',
  phone: '',
  email: '',
  notes: ''
})

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

watch(() => props.customer, (val) => {
  if (val) {
    form.value = {
      fullName: val.fullName,
      phone: val.phone || '',
      email: val.email || '',
      notes: val.notes || ''
    }
  } else {
    resetForm()
  }
}, { immediate: true })

function resetForm() {
  form.value = { fullName: '', phone: '', email: '', notes: '' }
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
    const url = isEdit.value ? `/api/customers/${props.customer!.id}` : '/api/customers'
    const method = isEdit.value ? 'PUT' : 'POST'
    
    const result = await $fetch<Customer>(url, {
      method,
      body: form.value
    })
    
    emit('saved', result)
    showSnackbar?.(`Customer ${isEdit.value ? 'updated' : 'created'} successfully`)
    close()
  } catch (error) {
    console.error('Error saving customer:', error)
    showSnackbar?.('Failed to save customer', 'error')
  } finally {
    loading.value = false
  }
}
</script>
