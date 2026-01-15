<template>
  <div>
    <!-- Stats -->
    <v-row class="mb-6">
      <v-col cols="6" md="3">
        <v-card class="pa-4 text-center" elevation="2" color="warning" variant="tonal">
          <div class="text-h4 font-weight-bold">{{ pendingJobs.length }}</div>
          <div class="text-body-2">Pending</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card class="pa-4 text-center" elevation="2" color="info" variant="tonal">
          <div class="text-h4 font-weight-bold">{{ activeJobs.length }}</div>
          <div class="text-body-2">In Progress</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card class="pa-4 text-center" elevation="2" color="success" variant="tonal">
          <div class="text-h4 font-weight-bold">12</div>
          <div class="text-body-2">Completed This Week</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card class="pa-4 text-center" elevation="2" color="primary" variant="tonal">
          <div class="text-h4 font-weight-bold">$485</div>
          <div class="text-body-2">Earnings This Week</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Pending Jobs -->
    <v-card elevation="2" class="mb-6">
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2" color="warning">mdi-clock-alert</v-icon>
        Pending Jobs
        <v-chip color="warning" size="small" class="ml-2">{{ pendingJobs.length }}</v-chip>
      </v-card-title>
      <v-divider />
      <v-list v-if="pendingJobs.length > 0">
        <v-list-item
          v-for="job in pendingJobs"
          :key="job.id"
          class="py-4"
        >
          <template #prepend>
            <v-avatar :color="getServiceColor(job.service)" size="48">
              <v-icon color="white">{{ getServiceIcon(job.service) }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-bold">
            {{ job.deceasedName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ job.service }} • {{ job.cemetery }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="text-caption">
            <v-icon size="small">mdi-map-marker</v-icon>
            {{ job.address }}
          </v-list-item-subtitle>
          <template #append>
            <div class="d-flex gap-2">
              <v-btn color="error" variant="outlined" size="small" @click="declineJob(job)">
                Decline
              </v-btn>
              <v-btn color="success" size="small" @click="acceptJob(job)">
                Accept
              </v-btn>
            </div>
          </template>
        </v-list-item>
      </v-list>
      <v-card-text v-else class="text-center text-grey py-8">
        <v-icon size="48" color="grey-lighten-2">mdi-check-circle</v-icon>
        <div class="mt-2">No pending jobs</div>
      </v-card-text>
    </v-card>

    <!-- Active Jobs -->
    <v-card elevation="2">
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2" color="info">mdi-progress-clock</v-icon>
        Active Jobs
        <v-chip color="info" size="small" class="ml-2">{{ activeJobs.length }}</v-chip>
      </v-card-title>
      <v-divider />
      <v-list v-if="activeJobs.length > 0">
        <v-list-item
          v-for="job in activeJobs"
          :key="job.id"
          :to="`/contractor/job/${job.id}`"
          class="py-4"
        >
          <template #prepend>
            <v-avatar :color="getServiceColor(job.service)" size="48">
              <v-icon color="white">{{ getServiceIcon(job.service) }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-bold">
            {{ job.deceasedName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ job.service }} • {{ job.cemetery }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="text-caption">
            <v-icon size="small">mdi-map-marker</v-icon>
            {{ job.address }}
          </v-list-item-subtitle>
          <template #append>
            <div class="text-right">
              <v-chip color="info" size="small" class="mb-1">In Progress</v-chip>
              <div class="text-caption text-grey">Started {{ job.startedAt }}</div>
            </div>
          </template>
        </v-list-item>
      </v-list>
      <v-card-text v-else class="text-center text-grey py-8">
        <v-icon size="48" color="grey-lighten-2">mdi-clipboard-check</v-icon>
        <div class="mt-2">No active jobs</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

const pendingJobs = ref([
  { id: '1', deceasedName: 'John Smith', service: 'Grave Cleanup', cemetery: 'Green Lawn Memorial', address: '123 Memorial Dr, Austin, TX', payout: '$35' },
  { id: '2', deceasedName: 'Mary Johnson', service: 'Flower Delivery', cemetery: 'Oak Hill Cemetery', address: '456 Oak Hill Rd, Austin, TX', payout: '$25' }
])

const activeJobs = ref([
  { id: '3', deceasedName: 'Robert Williams', service: 'Headstone Care', cemetery: 'Peaceful Rest', address: '789 Peace Ln, Austin, TX', startedAt: '2 hours ago', payout: '$55' },
  { id: '4', deceasedName: 'Elizabeth Brown', service: 'Photo Report', cemetery: 'Memorial Gardens', address: '321 Garden Ave, Austin, TX', startedAt: '4 hours ago', payout: '$18' }
])

const getServiceColor = (service: string) => {
  switch (service) {
    case 'Grave Cleanup': return 'green'
    case 'Flower Delivery': return 'pink'
    case 'Headstone Care': return 'grey'
    case 'Photo Report': return 'blue'
    default: return 'primary'
  }
}

const getServiceIcon = (service: string) => {
  switch (service) {
    case 'Grave Cleanup': return 'mdi-broom'
    case 'Flower Delivery': return 'mdi-flower'
    case 'Headstone Care': return 'mdi-grave-stone'
    case 'Photo Report': return 'mdi-camera'
    default: return 'mdi-clipboard'
  }
}

const acceptJob = (job: any) => {
  pendingJobs.value = pendingJobs.value.filter(j => j.id !== job.id)
  activeJobs.value.push({ ...job, startedAt: 'Just now' })
  showSnackbar?.('Job accepted!', 'success')
}

const declineJob = (job: any) => {
  pendingJobs.value = pendingJobs.value.filter(j => j.id !== job.id)
  showSnackbar?.('Job declined', 'warning')
}
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
</style>
