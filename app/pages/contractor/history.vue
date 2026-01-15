<template>
  <div>
    <v-card elevation="2">
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2">mdi-history</v-icon>
        Job History
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="history" hover>
        <template #item.service="{ item }">
          <div class="d-flex align-center">
            <v-avatar :color="getServiceColor(item.service)" size="32" class="mr-2">
              <v-icon color="white" size="16">{{ getServiceIcon(item.service) }}</v-icon>
            </v-avatar>
            {{ item.service }}
          </div>
        </template>
        <template #item.payout="{ item }">
          <span class="font-weight-bold text-success">{{ item.payout }}</span>
        </template>
        <template #item.rating="{ item }">
          <div class="d-flex align-center">
            <v-icon color="warning" size="small" class="mr-1">mdi-star</v-icon>
            {{ item.rating }}
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Date', key: 'date' },
  { title: 'Order #', key: 'orderNumber' },
  { title: 'Deceased', key: 'deceasedName' },
  { title: 'Service', key: 'service' },
  { title: 'Cemetery', key: 'cemetery' },
  { title: 'Payout', key: 'payout' },
  { title: 'Rating', key: 'rating' }
]

const history = [
  { date: 'Jan 14, 2026', orderNumber: 'GC-004', deceasedName: 'Elizabeth Brown', service: 'Photo Report', cemetery: 'Memorial Gardens', payout: '$18', rating: 5.0 },
  { date: 'Jan 13, 2026', orderNumber: 'GC-007', deceasedName: 'Michael Moore', service: 'Headstone Care', cemetery: 'Oak Hill Cemetery', payout: '$55', rating: 5.0 },
  { date: 'Jan 12, 2026', orderNumber: 'GC-010', deceasedName: 'Susan Anderson', service: 'Grave Cleanup', cemetery: 'Green Lawn Memorial', payout: '$35', rating: 4.5 },
  { date: 'Jan 11, 2026', orderNumber: 'GC-015', deceasedName: 'William Thomas', service: 'Flower Delivery', cemetery: 'Peaceful Rest', payout: '$25', rating: 5.0 },
  { date: 'Jan 10, 2026', orderNumber: 'GC-018', deceasedName: 'Dorothy Jackson', service: 'Grave Cleanup', cemetery: 'Sunset Cemetery', payout: '$35', rating: 4.8 },
  { date: 'Jan 9, 2026', orderNumber: 'GC-022', deceasedName: 'Richard White', service: 'Headstone Care', cemetery: 'Memorial Gardens', payout: '$55', rating: 5.0 },
  { date: 'Jan 8, 2026', orderNumber: 'GC-025', deceasedName: 'Margaret Harris', service: 'Photo Report', cemetery: 'Oak Hill Cemetery', payout: '$18', rating: 4.7 },
  { date: 'Jan 7, 2026', orderNumber: 'GC-028', deceasedName: 'Charles Martin', service: 'Flower Delivery', cemetery: 'Green Lawn Memorial', payout: '$25', rating: 5.0 }
]

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
</script>
