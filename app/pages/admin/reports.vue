<template>
  <div>
    <v-row class="mb-6">
      <v-col cols="12" md="3">
        <v-card class="pa-4" elevation="2">
          <div class="text-overline text-grey mb-1">Total Revenue</div>
          <div class="text-h4 font-weight-bold text-success">$12,450</div>
          <div class="text-caption text-success">+12% from last month</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4" elevation="2">
          <div class="text-overline text-grey mb-1">Total Orders</div>
          <div class="text-h4 font-weight-bold">248</div>
          <div class="text-caption text-success">+8% from last month</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4" elevation="2">
          <div class="text-overline text-grey mb-1">Avg Completion Time</div>
          <div class="text-h4 font-weight-bold">18h</div>
          <div class="text-caption text-success">-2h from last month</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4" elevation="2">
          <div class="text-overline text-grey mb-1">Customer Satisfaction</div>
          <div class="text-h4 font-weight-bold">4.8</div>
          <div class="text-caption text-grey">out of 5 stars</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title>
            <v-icon class="mr-2">mdi-chart-line</v-icon>
            Orders by Service Type
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-list>
              <v-list-item v-for="service in serviceStats" :key="service.name">
                <template #default>
                  <v-list-item-title>{{ service.name }}</v-list-item-title>
                  <v-progress-linear 
                    :model-value="service.percentage" 
                    :color="service.color"
                    height="8"
                    rounded
                    class="mt-2"
                  />
                </template>
                <template #append>
                  <span class="text-body-2 font-weight-medium">{{ service.count }} orders</span>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title>
            <v-icon class="mr-2">mdi-map-marker-multiple</v-icon>
            Top Cemeteries
          </v-card-title>
          <v-divider />
          <v-list>
            <v-list-item v-for="(cemetery, i) in topCemeteries" :key="cemetery.name">
              <template #prepend>
                <v-avatar color="primary" size="32">{{ i + 1 }}</v-avatar>
              </template>
              <template #default>
                <v-list-item-title>{{ cemetery.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ cemetery.location }}</v-list-item-subtitle>
              </template>
              <template #append>
                <span class="font-weight-bold">{{ cemetery.orders }} orders</span>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-card elevation="2" class="mt-6">
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2">mdi-download</v-icon>
        Export Reports
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-btn block variant="outlined" prepend-icon="mdi-file-excel" @click="showComingSoon">
              Export Orders (CSV)
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn block variant="outlined" prepend-icon="mdi-file-pdf-box" @click="showComingSoon">
              Financial Report (PDF)
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn block variant="outlined" prepend-icon="mdi-account-group" @click="showComingSoon">
              Contractor Report (CSV)
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const showComingSoon = inject<() => void>('showComingSoon')

const serviceStats = [
  { name: 'Grave Cleanup', count: 98, percentage: 40, color: 'green' },
  { name: 'Flower Delivery', count: 74, percentage: 30, color: 'pink' },
  { name: 'Headstone Care', count: 49, percentage: 20, color: 'grey' },
  { name: 'Photo Report', count: 27, percentage: 10, color: 'blue' }
]

const topCemeteries = [
  { name: 'Green Lawn Memorial Park', location: 'Austin, TX', orders: 45 },
  { name: 'Oak Hill Cemetery', location: 'Dallas, TX', orders: 38 },
  { name: 'Peaceful Rest', location: 'Houston, TX', orders: 32 },
  { name: 'Memorial Gardens', location: 'San Antonio, TX', orders: 28 },
  { name: 'Sunset Cemetery', location: 'Austin, TX', orders: 21 }
]
</script>
