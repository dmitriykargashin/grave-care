<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-6 pa-md-8" elevation="4" rounded="xl">
          <div class="text-center mb-8">
            <v-icon icon="mdi-magnify" color="primary" size="48" class="mb-4" />
            <h1 class="text-h4 font-weight-bold mb-2">Track Your Order</h1>
            <p class="text-body-1 text-grey-darken-1">
              Enter your order number or email to check the status.
            </p>
          </div>

          <v-text-field
            v-model="orderNumber"
            label="Order Number"
            placeholder="e.g., GC-ABC123"
            prepend-inner-icon="mdi-pound"
            class="mb-4"
          />

          <div class="text-center text-grey mb-4">- or -</div>

          <v-text-field
            v-model="email"
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            prepend-inner-icon="mdi-email"
            class="mb-6"
          />

          <v-btn 
            block 
            color="primary" 
            size="large"
            :loading="loading"
            @click="trackOrder"
          >
            Track Order
          </v-btn>
        </v-card>

        <!-- Demo Order Result -->
        <v-card v-if="showResult" class="mt-6 pa-6" elevation="4" rounded="xl">
          <div class="d-flex align-center mb-6">
            <div>
              <div class="text-overline text-grey">Order Number</div>
              <div class="text-h5 font-weight-bold">{{ demoOrder.orderNumber }}</div>
            </div>
            <v-spacer />
            <v-chip :color="statusColor" size="large">
              <v-icon start>{{ statusIcon }}</v-icon>
              {{ demoOrder.status }}
            </v-chip>
          </div>

          <!-- Timeline -->
          <v-timeline density="compact" side="end">
            <v-timeline-item
              v-for="event in demoOrder.timeline"
              :key="event.title"
              :dot-color="event.completed ? 'success' : 'grey-lighten-2'"
              size="small"
            >
              <template #icon>
                <v-icon v-if="event.completed" color="white" size="small">mdi-check</v-icon>
              </template>
              <div :class="{ 'text-grey': !event.completed }">
                <div class="font-weight-medium">{{ event.title }}</div>
                <div class="text-caption">{{ event.date || 'Pending' }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>

          <!-- Order Details -->
          <v-divider class="my-6" />
          
          <h4 class="font-weight-bold mb-3">Order Details</h4>
          <v-list density="compact" class="bg-transparent">
            <v-list-item>
              <template #prepend><v-icon>mdi-map-marker</v-icon></template>
              <v-list-item-title>{{ demoOrder.cemetery }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template #prepend><v-icon>mdi-account-heart</v-icon></template>
              <v-list-item-title>{{ demoOrder.deceasedName }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template #prepend><v-icon>mdi-broom</v-icon></template>
              <v-list-item-title>{{ demoOrder.service }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <!-- Photos (if completed) -->
          <template v-if="demoOrder.status === 'Completed'">
            <v-divider class="my-6" />
            <h4 class="font-weight-bold mb-3">Service Photos</h4>
            <v-row>
              <v-col cols="6">
                <v-card variant="outlined" class="pa-2">
                  <div class="text-caption text-grey mb-1">Before</div>
                  <v-img 
                    src="https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop" 
                    height="150"
                    cover
                    class="rounded"
                  />
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card variant="outlined" class="pa-2">
                  <div class="text-caption text-grey mb-1">After</div>
                  <v-img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
                    height="150"
                    cover
                    class="rounded"
                  />
                </v-card>
              </v-col>
            </v-row>
          </template>

          <div class="text-center mt-6">
            <v-btn variant="text" color="primary" @click="showResult = false">
              Track Another Order
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const orderNumber = ref('')
const email = ref('')
const loading = ref(false)
const showResult = ref(false)

const demoOrder = ref({
  orderNumber: 'GC-DEMO123',
  status: 'In Progress',
  cemetery: 'Green Lawn Memorial Park',
  deceasedName: 'John Smith',
  service: 'Grave Cleanup',
  timeline: [
    { title: 'Order Placed', date: 'Jan 14, 2026 - 2:30 PM', completed: true },
    { title: 'Payment Confirmed', date: 'Jan 14, 2026 - 2:31 PM', completed: true },
    { title: 'Assigned to Contractor', date: 'Jan 14, 2026 - 3:15 PM', completed: true },
    { title: 'Service In Progress', date: 'Jan 15, 2026 - 10:00 AM', completed: true },
    { title: 'Completed', date: '', completed: false }
  ]
})

const statusColor = computed(() => {
  switch (demoOrder.value.status) {
    case 'Completed': return 'success'
    case 'In Progress': return 'warning'
    case 'Assigned': return 'info'
    default: return 'grey'
  }
})

const statusIcon = computed(() => {
  switch (demoOrder.value.status) {
    case 'Completed': return 'mdi-check-circle'
    case 'In Progress': return 'mdi-progress-clock'
    case 'Assigned': return 'mdi-account-check'
    default: return 'mdi-clock-outline'
  }
})

const trackOrder = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Demo: randomly show different statuses
  const statuses = ['In Progress', 'Completed', 'Assigned']
  demoOrder.value.status = statuses[Math.floor(Math.random() * statuses.length)]
  
  if (demoOrder.value.status === 'Completed') {
    demoOrder.value.timeline[4].completed = true
    demoOrder.value.timeline[4].date = 'Jan 15, 2026 - 11:45 AM'
  }
  
  loading.value = false
  showResult.value = true
}
</script>
