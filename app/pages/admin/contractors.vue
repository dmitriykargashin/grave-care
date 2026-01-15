<template>
  <v-card elevation="2">
    <v-card-title class="d-flex align-center">
      <v-icon class="mr-2">mdi-hard-hat</v-icon>
      Contractors
      <v-spacer />
      <v-btn color="primary" prepend-icon="mdi-plus" @click="showComingSoon">
        Invite Contractor
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-data-table :headers="headers" :items="contractors" hover>
      <template #item.status="{ item }">
        <v-chip :color="item.status === 'Active' ? 'success' : 'grey'" size="small">
          {{ item.status }}
        </v-chip>
      </template>
      <template #item.rating="{ item }">
        <div class="d-flex align-center">
          <v-icon color="warning" size="small" class="mr-1">mdi-star</v-icon>
          {{ item.rating }}
        </div>
      </template>
      <template #item.actions="{ item }">
        <v-btn icon variant="text" size="small" @click="showComingSoon">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn icon variant="text" size="small" @click="showComingSoon">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
const showComingSoon = inject<() => void>('showComingSoon')

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' },
  { title: 'Region', key: 'region' },
  { title: 'Active Jobs', key: 'activeJobs' },
  { title: 'Completed', key: 'completed' },
  { title: 'Rating', key: 'rating' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false }
]

const contractors = [
  { name: 'Mike Thompson', email: 'mike@example.com', phone: '555-0101', region: 'Austin, TX', activeJobs: 3, completed: 127, rating: 4.9, status: 'Active' },
  { name: 'Sarah Wilson', email: 'sarah@example.com', phone: '555-0102', region: 'Dallas, TX', activeJobs: 2, completed: 89, rating: 4.8, status: 'Active' },
  { name: 'David Garcia', email: 'david@example.com', phone: '555-0103', region: 'Houston, TX', activeJobs: 1, completed: 156, rating: 4.7, status: 'Active' },
  { name: 'Emily Martinez', email: 'emily@example.com', phone: '555-0104', region: 'San Antonio, TX', activeJobs: 2, completed: 72, rating: 4.9, status: 'Active' },
  { name: 'James Brown', email: 'james@example.com', phone: '555-0105', region: 'Austin, TX', activeJobs: 0, completed: 45, rating: 4.5, status: 'Inactive' }
]
</script>
