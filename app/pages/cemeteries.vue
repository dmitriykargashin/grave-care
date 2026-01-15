<template>
  <div>
    <!-- Header -->
    <v-card class="mb-4">
      <v-card-text>
        <v-row align="center">
          <v-col>
            <div class="text-h6">Cemeteries</div>
            <div class="text-body-2 text-medium-emphasis">
              Manage cemetery locations
            </div>
          </v-col>
          <v-col cols="auto">
            <v-btn color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" start />
              New Cemetery
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Cemeteries List -->
    <v-card>
      <v-card-text v-if="pending">
        <v-skeleton-loader type="list-item-two-line@5" />
      </v-card-text>
      <v-list v-else-if="cemeteries?.length">
        <v-list-item
          v-for="cemetery in cemeteries"
          :key="cemetery.id"
        >
          <template #prepend>
            <v-avatar color="primary">
              <v-icon icon="mdi-map-marker" />
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">
            {{ cemetery.name }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="cemetery.address">
            {{ cemetery.address }}
          </v-list-item-subtitle>
          <template #append>
            <v-btn icon variant="text" size="small" @click="openEditDialog(cemetery)">
              <v-icon icon="mdi-pencil" />
            </v-btn>
            <v-btn icon variant="text" size="small" color="error" @click="confirmDelete(cemetery)">
              <v-icon icon="mdi-delete" />
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-card-text v-else class="text-center py-8">
        <v-icon icon="mdi-map-marker" size="64" color="grey-lighten-1" />
        <div class="text-h6 mt-4">No cemeteries yet</div>
        <div class="text-body-2 text-medium-emphasis mb-4">
          Add your first cemetery location
        </div>
        <v-btn color="primary" @click="openCreateDialog">
          <v-icon icon="mdi-plus" start />
          Add Cemetery
        </v-btn>
      </v-card-text>
    </v-card>

    <CemeteryDialog
      v-model="cemeteryDialog"
      :cemetery="selectedCemetery"
      @saved="onCemeterySaved"
    />

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-alert" color="error" class="mr-2" />
          Delete Cemetery
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete "{{ cemeteryToDelete?.name }}"?
          This action cannot be undone.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" :loading="deleting" @click="deleteCemetery">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import type { Cemetery } from '~/types'

const { data: cemeteries, pending, refresh } = await useFetch<Cemetery[]>('/api/cemeteries')

const cemeteryDialog = ref(false)
const deleteDialog = ref(false)
const selectedCemetery = ref<Cemetery | null>(null)
const cemeteryToDelete = ref<Cemetery | null>(null)
const deleting = ref(false)

const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

function openCreateDialog() {
  selectedCemetery.value = null
  cemeteryDialog.value = true
}

function openEditDialog(cemetery: Cemetery) {
  selectedCemetery.value = cemetery
  cemeteryDialog.value = true
}

function onCemeterySaved() {
  refresh()
}

function confirmDelete(cemetery: Cemetery) {
  cemeteryToDelete.value = cemetery
  deleteDialog.value = true
}

async function deleteCemetery() {
  if (!cemeteryToDelete.value) return

  deleting.value = true
  try {
    await $fetch(`/api/cemeteries/${cemeteryToDelete.value.id}`, {
      method: 'DELETE'
    })
    showSnackbar?.('Cemetery deleted')
    refresh()
    deleteDialog.value = false
  } catch (error: unknown) {
    console.error('Error deleting cemetery:', error)
    const message = error instanceof Error ? error.message : 'Failed to delete cemetery'
    showSnackbar?.(message, 'error')
  } finally {
    deleting.value = false
  }
}
</script>
