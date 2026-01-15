<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6">
      <v-card elevation="2">
        <v-card-title>
          <v-icon class="mr-2">mdi-account</v-icon>
          My Profile
        </v-card-title>
        <v-divider />
        <v-card-text>
          <div class="text-center mb-6">
            <v-avatar size="100" color="primary">
              <v-icon size="50" color="white">mdi-account</v-icon>
            </v-avatar>
            <div class="mt-3">
              <h3 class="text-h5 font-weight-bold">Mike Thompson</h3>
              <p class="text-body-2 text-grey">Contractor since Jan 2024</p>
            </div>
          </div>

          <v-row class="mb-6 text-center">
            <v-col cols="4">
              <div class="text-h5 font-weight-bold text-primary">127</div>
              <div class="text-caption text-grey">Jobs Completed</div>
            </v-col>
            <v-col cols="4">
              <div class="text-h5 font-weight-bold text-warning">4.9</div>
              <div class="text-caption text-grey">Rating</div>
            </v-col>
            <v-col cols="4">
              <div class="text-h5 font-weight-bold text-success">$4,850</div>
              <div class="text-caption text-grey">Total Earnings</div>
            </v-col>
          </v-row>

          <v-divider class="mb-6" />

          <v-text-field
            v-model="profile.name"
            label="Full Name"
            prepend-inner-icon="mdi-account"
            class="mb-4"
          />

          <v-text-field
            v-model="profile.email"
            label="Email"
            type="email"
            prepend-inner-icon="mdi-email"
            class="mb-4"
          />

          <v-text-field
            v-model="profile.phone"
            label="Phone"
            type="tel"
            prepend-inner-icon="mdi-phone"
            class="mb-4"
          />

          <v-text-field
            v-model="profile.address"
            label="Address"
            prepend-inner-icon="mdi-map-marker"
            class="mb-4"
          />

          <v-select
            v-model="profile.serviceArea"
            :items="['Austin, TX', 'Dallas, TX', 'Houston, TX', 'San Antonio, TX']"
            label="Service Area"
            prepend-inner-icon="mdi-map"
            class="mb-4"
          />

          <v-divider class="mb-6" />

          <h4 class="font-weight-bold mb-4">Notification Preferences</h4>

          <v-switch
            v-model="profile.emailNotifications"
            label="Email notifications for new jobs"
            color="primary"
            hide-details
            class="mb-2"
          />

          <v-switch
            v-model="profile.smsNotifications"
            label="SMS notifications for new jobs"
            color="primary"
            hide-details
            class="mb-6"
          />

          <v-btn color="primary" block size="large" @click="saveProfile">
            Save Changes
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

const profile = ref({
  name: 'Mike Thompson',
  email: 'mike@example.com',
  phone: '555-0101',
  address: '123 Main St, Austin, TX 78701',
  serviceArea: 'Austin, TX',
  emailNotifications: true,
  smsNotifications: true
})

const saveProfile = () => {
  showSnackbar?.('Profile saved successfully!', 'success')
}
</script>
