<template>
  <div>
    <v-btn variant="text" class="mb-4" to="/customers">
      <v-icon icon="mdi-arrow-left" start />
      Back to Customers
    </v-btn>

    <template v-if="pending">
      <v-skeleton-loader type="article" />
    </template>

    <template v-else-if="customer">
      <!-- Header Card -->
      <v-card class="mb-4">
        <v-card-title class="d-flex align-center">
          <v-avatar color="primary" class="mr-3">
            <v-icon icon="mdi-account" />
          </v-avatar>
          <span class="text-h5">{{ customer.fullName }}</span>
          <v-spacer />
          <v-btn icon variant="text" @click="openEditDialog">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-if="customer.phone" cols="12" sm="6" md="4">
              <div class="text-caption text-medium-emphasis">Phone</div>
              <div class="text-body-1">
                <v-icon icon="mdi-phone" size="small" class="mr-1" />
                {{ customer.phone }}
              </div>
            </v-col>
            <v-col v-if="customer.email" cols="12" sm="6" md="4">
              <div class="text-caption text-medium-emphasis">Email</div>
              <div class="text-body-1">
                <v-icon icon="mdi-email" size="small" class="mr-1" />
                {{ customer.email }}
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="text-caption text-medium-emphasis">Customer Since</div>
              <div class="text-body-1">{{ formatDate(customer.createdAt) }}</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Notes -->
      <v-card v-if="customer.notes" class="mb-4">
        <v-card-title>
          <v-icon icon="mdi-note-text" class="mr-2" />
          Notes
        </v-card-title>
        <v-card-text>
          <p style="white-space: pre-wrap;">{{ customer.notes }}</p>
        </v-card-text>
      </v-card>

      <!-- Graves -->
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-grave-stone" class="mr-2" />
          Graves
          <v-spacer />
          <v-btn color="primary" size="small" @click="openGraveDialog">
            <v-icon icon="mdi-plus" start />
            New Grave
          </v-btn>
        </v-card-title>
        <v-card-text v-if="gravesPending">
          <v-skeleton-loader type="list-item-two-line@3" />
        </v-card-text>
        <v-list v-else-if="graves?.length">
          <v-list-item
            v-for="grave in graves"
            :key="grave.id"
            :to="`/graves/${grave.id}`"
          >
            <template #prepend>
              <v-avatar color="secondary" size="40">
                <v-icon icon="mdi-grave-stone" />
              </v-avatar>
            </template>
            <v-list-item-title>{{ grave.deceasedName || 'Unknown' }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ grave.cemeteryName }} · {{ grave.plotRef }}
            </v-list-item-subtitle>
            <template #append>
              <v-chip
                :color="grave.openTasksCount > 0 ? 'warning' : 'success'"
                size="small"
                class="mr-2"
              >
                {{ grave.openTasksCount }} tasks
              </v-chip>
              <v-icon icon="mdi-chevron-right" />
            </template>
          </v-list-item>
        </v-list>
        <v-card-text v-else class="text-center text-medium-emphasis py-8">
          <v-icon icon="mdi-grave-stone" size="48" class="mb-2" />
          <div>No graves for this customer</div>
          <v-btn color="primary" variant="tonal" class="mt-4" @click="openGraveDialog">
            Add First Grave
          </v-btn>
        </v-card-text>
      </v-card>
    </template>

    <template v-else>
      <v-alert type="error" variant="tonal">
        Customer not found
      </v-alert>
    </template>

    <CustomerDialog
      v-model="customerDialog"
      :customer="customer"
      @saved="refreshCustomer"
    />

    <GraveDialog
      v-model="graveDialog"
      :prefill-customer-id="customerId"
      @saved="refreshGraves"
    />
  </div>
</template>

<script setup lang="ts">
import type { Customer, Grave } from '~/types'

const route = useRoute()
const customerId = route.params.id as string

const { data: customer, pending, refresh: refreshCustomer } = await useFetch<Customer>(`/api/customers/${customerId}`)
const { data: graves, pending: gravesPending, refresh: refreshGraves } = await useFetch<Grave[]>(`/api/customers/${customerId}/graves`)

const customerDialog = ref(false)
const graveDialog = ref(false)

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString()
}

function openEditDialog() {
  customerDialog.value = true
}

function openGraveDialog() {
  graveDialog.value = true
}
</script>
