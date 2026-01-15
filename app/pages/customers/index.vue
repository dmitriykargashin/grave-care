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
              label="Search customers..."
              hide-details
              clearable
              @update:model-value="debouncedRefresh"
            />
          </v-col>
          <v-col cols="12" sm="6" md="8" class="text-right">
            <v-btn color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" start />
              New Customer
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Customers Table -->
    <v-card>
      <v-data-table
        :headers="headers"
        :items="customers || []"
        :loading="pending"
        :items-per-page="15"
        hover
        @click:row="(_event: Event, { item }: { item: Customer }) => navigateTo(`/customers/${item.id}`)"
      >
        <template #item.fullName="{ item }">
          <span class="font-weight-medium">{{ item.fullName }}</span>
        </template>

        <template #item.phone="{ item }">
          {{ item.phone || '-' }}
        </template>

        <template #item.email="{ item }">
          {{ item.email || '-' }}
        </template>

        <template #item.actions="{ item }">
          <v-btn icon variant="text" size="small" @click.stop="openEditDialog(item)">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </template>

        <template #no-data>
          <div class="text-center py-8">
            <v-icon icon="mdi-account-group" size="64" color="grey-lighten-1" />
            <div class="text-h6 mt-4">No customers found</div>
            <div class="text-body-2 text-medium-emphasis mb-4">
              {{ search ? 'Try adjusting your search' : 'Add your first customer to get started' }}
            </div>
            <v-btn v-if="!search" color="primary" @click="openCreateDialog">
              <v-icon icon="mdi-plus" start />
              Add Customer
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <CustomerDialog
      v-model="customerDialog"
      :customer="selectedCustomer"
      @saved="onCustomerSaved"
    />
  </div>
</template>

<script setup lang="ts">
import type { Customer } from '~/types'

const search = ref('')

const queryParams = computed(() => {
  const params: Record<string, string> = {}
  if (search.value) params.q = search.value
  return params
})

const { data: customers, pending, refresh } = await useFetch<Customer[]>('/api/customers', {
  query: queryParams
})

const customerDialog = ref(false)
const selectedCustomer = ref<Customer | null>(null)

const headers = [
  { title: 'Full Name', key: 'fullName', sortable: true },
  { title: 'Phone', key: 'phone', sortable: true },
  { title: 'Email', key: 'email', sortable: true },
  { title: '', key: 'actions', sortable: false, width: 50 }
]

let debounceTimer: ReturnType<typeof setTimeout>
function debouncedRefresh() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => refresh(), 300)
}

function openCreateDialog() {
  selectedCustomer.value = null
  customerDialog.value = true
}

function openEditDialog(customer: Customer) {
  selectedCustomer.value = customer
  customerDialog.value = true
}

function onCustomerSaved() {
  refresh()
}
</script>
