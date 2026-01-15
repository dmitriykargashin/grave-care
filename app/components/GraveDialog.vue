<template>
  <v-dialog v-model="dialogModel" max-width="600" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon :icon="isEdit ? 'mdi-pencil' : 'mdi-plus'" class="mr-2" />
        {{ isEdit ? 'Edit Grave' : 'New Grave' }}
      </v-card-title>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="submit">
          <v-autocomplete
            v-model="form.cemeteryId"
            :items="cemeteries"
            item-title="name"
            item-value="id"
            label="Cemetery"
            :rules="[v => !!v || 'Cemetery is required']"
            required
          />
          <v-autocomplete
            v-model="form.customerId"
            :items="customers"
            item-title="fullName"
            item-value="id"
            label="Customer"
            :rules="[v => !!v || 'Customer is required']"
            required
          />
          <v-text-field
            v-model="form.plotRef"
            label="Plot Reference"
            :rules="[v => !!v || 'Plot reference is required']"
            required
          />
          <v-text-field
            v-model="form.deceasedName"
            label="Deceased Name"
          />
          <v-textarea
            v-model="form.specialInstructions"
            label="Special Instructions"
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
import type { Grave, GraveForm, Cemetery, Customer } from '~/types'

const props = defineProps<{
  grave?: Grave | null
  prefillCemeteryId?: string
  prefillCustomerId?: string
}>()

const emit = defineEmits<{
  saved: [grave: Grave]
}>()

const dialogModel = defineModel<boolean>({ default: false })
const formRef = ref()
const loading = ref(false)

const isEdit = computed(() => !!props.grave?.id)

const form = ref<GraveForm>({
  cemeteryId: '',
  customerId: '',
  plotRef: '',
  deceasedName: '',
  specialInstructions: ''
})

const { data: cemeteries } = await useFetch<Cemetery[]>('/api/cemeteries')
const { data: customers } = await useFetch<Customer[]>('/api/customers')

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

watch(() => props.grave, (val) => {
  if (val) {
    form.value = {
      cemeteryId: val.cemeteryId,
      customerId: val.customerId,
      plotRef: val.plotRef,
      deceasedName: val.deceasedName || '',
      specialInstructions: val.specialInstructions || ''
    }
  } else {
    resetForm()
  }
}, { immediate: true })

watch(() => dialogModel.value, (val) => {
  if (val && !props.grave) {
    if (props.prefillCemeteryId) form.value.cemeteryId = props.prefillCemeteryId
    if (props.prefillCustomerId) form.value.customerId = props.prefillCustomerId
  }
})

function resetForm() {
  form.value = {
    cemeteryId: props.prefillCemeteryId || '',
    customerId: props.prefillCustomerId || '',
    plotRef: '',
    deceasedName: '',
    specialInstructions: ''
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
    const url = isEdit.value ? `/api/graves/${props.grave!.id}` : '/api/graves'
    const method = isEdit.value ? 'PUT' : 'POST'
    
    const result = await $fetch<Grave>(url, {
      method,
      body: form.value
    })
    
    emit('saved', result)
    showSnackbar?.(`Grave ${isEdit.value ? 'updated' : 'created'} successfully`)
    close()
  } catch (error) {
    console.error('Error saving grave:', error)
    showSnackbar?.('Failed to save grave', 'error')
  } finally {
    loading.value = false
  }
}
</script>
