<template>
  <div>
    <!-- Filters -->
    <v-card class="mb-4">
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search graves..."
              hide-details
              clearable
              @update:model-value="debouncedRefresh"
            />
          </v-col>
          <v-col cols="12" sm="6" md="8" class="text-right">
            <v-btn color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" start />
              New Grave
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Graves Table -->
    <v-card>
      <v-data-table
        :headers="headers"
        :items="graves || []"
        :loading="pending"
        :items-per-page="15"
        hover
        @click:row="(_event: Event, { item }: { item: Grave }) => navigateTo(`/graves/${item.id}`)"
      >
        <template #item.deceasedName="{ item }">
          <span class="font-weight-medium">{{ item.deceasedName || 'Unknown' }}</span>
        </template>

        <template #item.openTasksCount="{ item }">
          <v-chip
            :color="item.openTasksCount > 0 ? 'warning' : 'success'"
            size="small"
          >
            {{ item.openTasksCount }}
          </v-chip>
        </template>

        <template #item.actions="{ item }">
          <v-btn icon variant="text" size="small" @click.stop="openEditDialog(item)">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </template>

        <template #no-data>
          <div class="text-center py-8">
            <v-icon icon="mdi-grave-stone" size="64" color="grey-lighten-1" />
            <div class="text-h6 mt-4">No graves found</div>
            <div class="text-body-2 text-medium-emphasis mb-4">
              {{ search ? 'Try adjusting your search' : 'Add your first grave to get started' }}
            </div>
            <v-btn v-if="!search" color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" start />
              Add Grave
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <GraveDialog
      v-model="graveDialog"
      :grave="selectedGrave"
      @saved="onGraveSaved"
    />
  </div>
</template>

<script setup lang="ts">
import type { Grave } from '~/types'

const search = ref('')

const queryParams = computed(() => {
  const params: Record<string, string> = {}
  if (search.value) params.q = search.value
  return params
})

const { data: graves, pending, refresh } = await useFetch<Grave[]>('/api/graves', {
  query: queryParams
})

const graveDialog = ref(false)
const selectedGrave = ref<Grave | null>(null)

const headers = [
  { title: 'Deceased Name', key: 'deceasedName', sortable: true },
  { title: 'Cemetery', key: 'cemeteryName', sortable: true },
  { title: 'Plot Ref', key: 'plotRef', sortable: true },
  { title: 'Customer', key: 'customerName', sortable: true },
  { title: 'Open Tasks', key: 'openTasksCount', sortable: true },
  { title: '', key: 'actions', sortable: false, width: 50 }
]

let debounceTimer: ReturnType<typeof setTimeout>
function debouncedRefresh() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => refresh(), 300)
}

function openCreateDialog() {
  selectedGrave.value = null
  graveDialog.value = true
}

function openEditDialog(grave: Grave) {
  selectedGrave.value = grave
  graveDialog.value = true
}

function onGraveSaved() {
  refresh()
}
</script>
