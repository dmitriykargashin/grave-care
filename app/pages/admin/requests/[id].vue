<template>
  <div>
    <v-btn variant="text" class="mb-4" to="/admin/requests">
      <v-icon icon="mdi-arrow-left" start />
      Back to Requests
    </v-btn>

    <template v-if="!request">
      <v-alert type="error" variant="tonal">
        Request not found
      </v-alert>
    </template>

    <template v-else>
      <!-- Header Card -->
      <v-card class="mb-4">
        <v-card-title class="d-flex align-center flex-wrap ga-2">
          <span class="text-h5">Order {{ request.orderNumber }}</span>
          <v-spacer />
          <v-chip :color="getStatusColor(request.status)" size="small">
            {{ request.status }}
          </v-chip>
          <v-btn icon variant="text" @click="showComingSoon">
            <v-icon icon="mdi-pencil" />
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Customer</div>
              <div class="text-body-1">{{ request.customerName }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Service</div>
              <div class="text-body-1">{{ request.service }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Cemetery</div>
              <div class="text-body-1">{{ request.cemetery }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-caption text-medium-emphasis">Date</div>
              <div class="text-body-1">{{ request.date }}</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- Deceased Info -->
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-title>
              <v-icon icon="mdi-account" class="mr-2" />
              Deceased Information
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-account" />
                  </template>
                  <template #default>
                    <v-list-item-title>{{ request.deceasedName }}</v-list-item-title>
                    <v-list-item-subtitle>Deceased Name</v-list-item-subtitle>
                  </template>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon icon="mdi-map-marker" />
                  </template>
                  <template #default>
                    <v-list-item-title>{{ request.cemetery }}</v-list-item-title>
                    <v-list-item-subtitle>Cemetery</v-list-item-subtitle>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Contractor Assignment -->
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-title>
              <v-icon icon="mdi-hard-hat" class="mr-2" />
              Contractor Assignment
            </v-card-title>
            <v-card-text>
              <template v-if="request.contractor">
                <v-list>
                  <v-list-item>
                    <template #prepend>
                      <v-avatar color="primary" size="40">
                        <v-icon icon="mdi-account" />
                      </v-avatar>
                    </template>
                    <template #default>
                      <v-list-item-title>{{ request.contractor }}</v-list-item-title>
                      <v-list-item-subtitle>Assigned Contractor</v-list-item-subtitle>
                    </template>
                  </v-list-item>
                </v-list>
              </template>
              <template v-else>
                <v-alert type="info" variant="tonal" class="mb-4">
                  No contractor assigned yet
                </v-alert>
                <v-btn color="primary" block @click="showComingSoon">
                  Assign Contractor
                </v-btn>
              </template>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Actions -->
      <v-card class="mt-4">
        <v-card-title>
          <v-icon icon="mdi-cog" class="mr-2" />
          Actions
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-btn 
                block 
                variant="outlined" 
                color="success"
                prepend-icon="mdi-check"
                @click="updateStatus('Completed')"
                :disabled="request.status === 'Completed'"
              >
                Mark Complete
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-btn 
                block 
                variant="outlined" 
                color="primary"
                prepend-icon="mdi-play"
                @click="updateStatus('In Progress')"
                :disabled="request.status === 'In Progress'"
              >
                Start Work
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-btn 
                block 
                variant="outlined" 
                color="error"
                prepend-icon="mdi-cancel"
                @click="updateStatus('Cancelled')"
                :disabled="request.status === 'Cancelled'"
              >
                Cancel Request
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-btn 
                block 
                variant="outlined" 
                prepend-icon="mdi-message-text"
                @click="showComingSoon"
              >
                Contact Customer
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showComingSoon = inject<() => void>('showComingSoon')
const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

const requestId = computed(() => route.params.id as string)

// Static demo data (matching the index page)
const allRequests = [
  { id: '1', orderNumber: 'GC-001', customerName: 'Alice Johnson', deceasedName: 'John Smith', service: 'Grave Cleanup', cemetery: 'Green Lawn Memorial', status: 'Pending', contractor: null, date: 'Jan 15' },
  { id: '2', orderNumber: 'GC-002', customerName: 'Bob Williams', deceasedName: 'Mary Johnson', service: 'Flower Delivery', cemetery: 'Oak Hill Cemetery', status: 'Assigned', contractor: 'Mike Thompson', date: 'Jan 15' },
  { id: '3', orderNumber: 'GC-003', customerName: 'Carol Davis', deceasedName: 'Robert Williams', service: 'Headstone Care', cemetery: 'Peaceful Rest', status: 'In Progress', contractor: 'Sarah Wilson', date: 'Jan 14' },
  { id: '4', orderNumber: 'GC-004', customerName: 'Dan Brown', deceasedName: 'Elizabeth Brown', service: 'Photo Report', cemetery: 'Memorial Gardens', status: 'Completed', contractor: 'David Garcia', date: 'Jan 14' },
  { id: '5', orderNumber: 'GC-005', customerName: 'Eve Miller', deceasedName: 'James Davis', service: 'Grave Cleanup', cemetery: 'Sunset Cemetery', status: 'Pending', contractor: null, date: 'Jan 14' },
  { id: '6', orderNumber: 'GC-006', customerName: 'Frank Garcia', deceasedName: 'Patricia Wilson', service: 'Flower Delivery', cemetery: 'Green Lawn Memorial', status: 'Assigned', contractor: 'Emily Martinez', date: 'Jan 13' },
  { id: '7', orderNumber: 'GC-007', customerName: 'Grace Lee', deceasedName: 'Michael Moore', service: 'Headstone Care', cemetery: 'Oak Hill Cemetery', status: 'Completed', contractor: 'Mike Thompson', date: 'Jan 13' },
  { id: '8', orderNumber: 'GC-008', customerName: 'Henry Chen', deceasedName: 'Linda Taylor', service: 'Grave Cleanup', cemetery: 'Peaceful Rest', status: 'Pending', contractor: null, date: 'Jan 12' }
]

const request = ref(allRequests.find(r => r.id === requestId.value) || null)

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

const updateStatus = (newStatus: string) => {
  if (request.value) {
    request.value.status = newStatus
    showSnackbar?.(`Status updated to ${newStatus}`, 'success')
  }
}
</script>
