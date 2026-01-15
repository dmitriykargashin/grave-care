<template>
  <div>
    <!-- Stats Cards -->
    <v-row class="mb-6">
      <v-col v-for="stat in stats" :key="stat.title" cols="12" sm="6" md="3">
        <v-card class="pa-4" elevation="2">
          <div class="d-flex align-center">
            <v-avatar :color="stat.color" size="56" class="mr-4">
              <v-icon :icon="stat.icon" color="white" size="28" />
            </v-avatar>
            <div>
              <div class="text-h4 font-weight-bold">{{ stat.value }}</div>
              <div class="text-body-2 text-grey">{{ stat.title }}</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Recent Requests -->
      <v-col cols="12" lg="8">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-clipboard-list</v-icon>
            Recent Service Requests
            <v-spacer />
            <v-btn variant="text" color="primary" to="/admin/requests">
              View All
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-list>
            <v-list-item
              v-for="request in recentRequests"
              :key="request.id"
              :to="`/admin/requests/${request.id}`"
            >
              <template #prepend>
                <v-avatar :color="getStatusColor(request.status)" size="40">
                  <v-icon color="white" size="20">{{ getStatusIcon(request.status) }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-medium">
                {{ request.deceasedName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ request.service }} • {{ request.cemetery }}
              </v-list-item-subtitle>
              <template #append>
                <div class="text-right">
                  <v-chip :color="getStatusColor(request.status)" size="small" class="mb-1">
                    {{ request.status }}
                  </v-chip>
                  <div class="text-caption text-grey">{{ request.date }}</div>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Sidebar -->
      <v-col cols="12" lg="4">
        <!-- Contractor Status -->
        <v-card elevation="2" class="mb-4">
          <v-card-title>
            <v-icon class="mr-2">mdi-hard-hat</v-icon>
            Contractor Status
          </v-card-title>
          <v-divider />
          <v-list density="compact">
            <v-list-item v-for="contractor in contractors" :key="contractor.name">
              <template #prepend>
                <v-avatar size="36" color="grey-lighten-2">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>{{ contractor.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ contractor.activeJobs }} active jobs</v-list-item-subtitle>
              <template #append>
                <v-chip :color="contractor.online ? 'success' : 'grey'" size="x-small">
                  {{ contractor.online ? 'Online' : 'Offline' }}
                </v-chip>
              </template>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-btn variant="text" color="primary" block to="/admin/contractors">
              Manage Contractors
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Quick Actions -->
        <v-card elevation="2">
          <v-card-title>
            <v-icon class="mr-2">mdi-lightning-bolt</v-icon>
            Quick Actions
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-btn block color="primary" class="mb-2" prepend-icon="mdi-plus" @click="showComingSoon">
              Add New Request
            </v-btn>
            <v-btn block variant="outlined" class="mb-2" prepend-icon="mdi-account-plus" @click="showComingSoon">
              Invite Contractor
            </v-btn>
            <v-btn block variant="outlined" prepend-icon="mdi-download" @click="showComingSoon">
              Export Reports
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const showComingSoon = inject<() => void>('showComingSoon')

const stats = [
  { title: 'Pending Requests', value: 12, icon: 'mdi-clock-outline', color: 'warning' },
  { title: 'In Progress', value: 8, icon: 'mdi-progress-clock', color: 'info' },
  { title: 'Completed Today', value: 5, icon: 'mdi-check-circle', color: 'success' },
  { title: 'Active Contractors', value: 6, icon: 'mdi-hard-hat', color: 'primary' }
]

const recentRequests = [
  { id: '1', deceasedName: 'John Smith', service: 'Grave Cleanup', cemetery: 'Green Lawn Memorial', status: 'Pending', date: '2 min ago' },
  { id: '2', deceasedName: 'Mary Johnson', service: 'Flower Delivery', cemetery: 'Oak Hill Cemetery', status: 'Assigned', date: '15 min ago' },
  { id: '3', deceasedName: 'Robert Williams', service: 'Headstone Care', cemetery: 'Peaceful Rest', status: 'In Progress', date: '1 hour ago' },
  { id: '4', deceasedName: 'Elizabeth Brown', service: 'Photo Report', cemetery: 'Memorial Gardens', status: 'Completed', date: '2 hours ago' },
  { id: '5', deceasedName: 'James Davis', service: 'Grave Cleanup', cemetery: 'Sunset Cemetery', status: 'Pending', date: '3 hours ago' }
]

const contractors = [
  { name: 'Mike Thompson', activeJobs: 3, online: true },
  { name: 'Sarah Wilson', activeJobs: 2, online: true },
  { name: 'David Garcia', activeJobs: 1, online: false },
  { name: 'Emily Martinez', activeJobs: 2, online: true }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pending': return 'warning'
    case 'Assigned': return 'info'
    case 'In Progress': return 'primary'
    case 'Completed': return 'success'
    default: return 'grey'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Pending': return 'mdi-clock-outline'
    case 'Assigned': return 'mdi-account-check'
    case 'In Progress': return 'mdi-progress-clock'
    case 'Completed': return 'mdi-check'
    default: return 'mdi-help'
  }
}
</script>
