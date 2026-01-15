<template>
  <div>
    <!-- Filters -->
    <v-card class="mb-4 pa-4" elevation="2">
      <v-row align="center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="Search requests..."
            hide-details
            density="compact"
          />
        </v-col>
        <v-col cols="6" md="2">
          <v-select
            v-model="statusFilter"
            :items="statusOptions"
            label="Status"
            hide-details
            density="compact"
            clearable
          />
        </v-col>
        <v-col cols="6" md="2">
          <v-select
            v-model="serviceFilter"
            :items="serviceOptions"
            label="Service"
            hide-details
            density="compact"
            clearable
          />
        </v-col>
        <v-col cols="12" md="4" class="text-right">
          <v-btn color="primary" prepend-icon="mdi-plus" @click="showComingSoon">
            New Request
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Requests Table -->
    <v-card elevation="2">
      <v-data-table
        :headers="headers"
        :items="filteredRequests"
        :search="search"
        hover
      >
        <template #item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" size="small">
            {{ item.status }}
          </v-chip>
        </template>

        <template #item.contractor="{ item }">
          <template v-if="item.contractor">
            <v-avatar size="24" color="grey-lighten-2" class="mr-2">
              <v-icon size="16">mdi-account</v-icon>
            </v-avatar>
            {{ item.contractor }}
          </template>
          <v-btn v-else size="small" variant="tonal" color="primary" @click="assignContractor(item)">
            Assign
          </v-btn>
        </template>

        <template #item.actions="{ item }">
          <v-btn icon variant="text" size="small" :to="`/admin/requests/${item.id}`">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn icon variant="text" size="small" @click="showComingSoon">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Assign Contractor Dialog -->
    <v-dialog v-model="assignDialog" max-width="400">
      <v-card>
        <v-card-title>Assign Contractor</v-card-title>
        <v-card-text>
          <p class="mb-4">Select a contractor for this job:</p>
          <v-select
            v-model="selectedContractor"
            :items="contractors"
            item-title="name"
            item-value="id"
            label="Contractor"
          >
            <template #item="{ item, props }">
              <v-list-item v-bind="props">
                <template #prepend>
                  <v-avatar size="32" color="grey-lighten-2">
                    <v-icon>mdi-account</v-icon>
                  </v-avatar>
                </template>
                <template #append>
                  <v-chip size="x-small" :color="item.raw.online ? 'success' : 'grey'">
                    {{ item.raw.activeJobs }} jobs
                  </v-chip>
                </template>
              </v-list-item>
            </template>
          </v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="assignDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="confirmAssign">Assign</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const showComingSoon = inject<() => void>('showComingSoon')
const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

const search = ref('')
const statusFilter = ref<string | null>(null)
const serviceFilter = ref<string | null>(null)
const assignDialog = ref(false)
const selectedContractor = ref<string | null>(null)
const selectedRequest = ref<any>(null)

const statusOptions = ['Pending', 'Assigned', 'In Progress', 'Completed', 'Cancelled']
const serviceOptions = ['Grave Cleanup', 'Flower Delivery', 'Headstone Care', 'Photo Report']

const headers = [
  { title: 'Order #', key: 'orderNumber', width: '120px' },
  { title: 'Customer', key: 'customerName' },
  { title: 'Deceased', key: 'deceasedName' },
  { title: 'Service', key: 'service' },
  { title: 'Cemetery', key: 'cemetery' },
  { title: 'Status', key: 'status', width: '120px' },
  { title: 'Contractor', key: 'contractor', width: '150px' },
  { title: 'Date', key: 'date', width: '100px' },
  { title: 'Actions', key: 'actions', width: '100px', sortable: false }
]

const requests = ref([
  { id: '1', orderNumber: 'GC-001', customerName: 'Alice Johnson', deceasedName: 'John Smith', service: 'Grave Cleanup', cemetery: 'Green Lawn Memorial', status: 'Pending', contractor: null, date: 'Jan 15' },
  { id: '2', orderNumber: 'GC-002', customerName: 'Bob Williams', deceasedName: 'Mary Johnson', service: 'Flower Delivery', cemetery: 'Oak Hill Cemetery', status: 'Assigned', contractor: 'Mike Thompson', date: 'Jan 15' },
  { id: '3', orderNumber: 'GC-003', customerName: 'Carol Davis', deceasedName: 'Robert Williams', service: 'Headstone Care', cemetery: 'Peaceful Rest', status: 'In Progress', contractor: 'Sarah Wilson', date: 'Jan 14' },
  { id: '4', orderNumber: 'GC-004', customerName: 'Dan Brown', deceasedName: 'Elizabeth Brown', service: 'Photo Report', cemetery: 'Memorial Gardens', status: 'Completed', contractor: 'David Garcia', date: 'Jan 14' },
  { id: '5', orderNumber: 'GC-005', customerName: 'Eve Miller', deceasedName: 'James Davis', service: 'Grave Cleanup', cemetery: 'Sunset Cemetery', status: 'Pending', contractor: null, date: 'Jan 14' },
  { id: '6', orderNumber: 'GC-006', customerName: 'Frank Garcia', deceasedName: 'Patricia Wilson', service: 'Flower Delivery', cemetery: 'Green Lawn Memorial', status: 'Assigned', contractor: 'Emily Martinez', date: 'Jan 13' },
  { id: '7', orderNumber: 'GC-007', customerName: 'Grace Lee', deceasedName: 'Michael Moore', service: 'Headstone Care', cemetery: 'Oak Hill Cemetery', status: 'Completed', contractor: 'Mike Thompson', date: 'Jan 13' },
  { id: '8', orderNumber: 'GC-008', customerName: 'Henry Chen', deceasedName: 'Linda Taylor', service: 'Grave Cleanup', cemetery: 'Peaceful Rest', status: 'Pending', contractor: null, date: 'Jan 12' }
])

const contractors = [
  { id: '1', name: 'Mike Thompson', activeJobs: 3, online: true },
  { id: '2', name: 'Sarah Wilson', activeJobs: 2, online: true },
  { id: '3', name: 'David Garcia', activeJobs: 1, online: false },
  { id: '4', name: 'Emily Martinez', activeJobs: 2, online: true }
]

const filteredRequests = computed(() => {
  return requests.value.filter(r => {
    if (statusFilter.value && r.status !== statusFilter.value) return false
    if (serviceFilter.value && r.service !== serviceFilter.value) return false
    return true
  })
})

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pending': return 'warning'
    case 'Assigned': return 'info'
    case 'In Progress': return 'primary'
    case 'Completed': return 'success'
    case 'Cancelled': return 'error'
    default: return 'grey'
  }
}

const assignContractor = (request: any) => {
  selectedRequest.value = request
  assignDialog.value = true
}

const confirmAssign = () => {
  if (selectedRequest.value && selectedContractor.value) {
    const contractor = contractors.find(c => c.id === selectedContractor.value)
    selectedRequest.value.contractor = contractor?.name
    selectedRequest.value.status = 'Assigned'
    showSnackbar?.(`Assigned to ${contractor?.name}`, 'success')
  }
  assignDialog.value = false
  selectedContractor.value = null
}
</script>
