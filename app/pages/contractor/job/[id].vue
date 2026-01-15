<template>
  <div>
    <v-btn variant="text" to="/contractor" class="mb-4">
      <v-icon start>mdi-arrow-left</v-icon>
      Back to My Jobs
    </v-btn>

    <v-row>
      <!-- Job Details -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="mb-4">
          <v-card-title class="d-flex align-center">
            <v-avatar :color="getServiceColor(job.service)" size="40" class="mr-3">
              <v-icon color="white">{{ getServiceIcon(job.service) }}</v-icon>
            </v-avatar>
            {{ job.service }}
            <v-spacer />
            <v-chip color="info">In Progress</v-chip>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-list density="compact" class="bg-transparent">
              <v-list-item>
                <template #prepend><v-icon>mdi-account-heart</v-icon></template>
                <v-list-item-title>{{ job.deceasedName }}</v-list-item-title>
                <v-list-item-subtitle>Loved One</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend><v-icon>mdi-map-marker</v-icon></template>
                <v-list-item-title>{{ job.cemetery }}</v-list-item-title>
                <v-list-item-subtitle>{{ job.address }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend><v-icon>mdi-grave-stone</v-icon></template>
                <v-list-item-title>{{ job.plotReference }}</v-list-item-title>
                <v-list-item-subtitle>Plot Reference</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-divider class="my-4" />

            <h4 class="font-weight-bold mb-2">Special Instructions</h4>
            <p class="text-body-2 text-grey-darken-1">
              {{ job.instructions || 'No special instructions provided.' }}
            </p>

            <v-divider class="my-4" />

            <div class="d-flex justify-space-between align-center">
              <span class="text-body-2 text-grey">Your Payout</span>
              <span class="text-h5 font-weight-bold text-success">{{ job.payout }}</span>
            </div>
          </v-card-text>
        </v-card>

        <!-- Map Placeholder -->
        <v-card elevation="2">
          <v-card-title>
            <v-icon class="mr-2">mdi-map</v-icon>
            Location
          </v-card-title>
          <v-img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=14&size=600x300&maptype=roadmap&key=demo"
            height="200"
            class="bg-grey-lighten-3"
          >
            <div class="d-flex align-center justify-center h-100">
              <v-btn color="primary" prepend-icon="mdi-navigation" @click="openMaps">
                Open in Maps
              </v-btn>
            </div>
          </v-img>
        </v-card>
      </v-col>

      <!-- Photo Upload -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="mb-4">
          <v-card-title>
            <v-icon class="mr-2">mdi-camera</v-icon>
            Job Photos
          </v-card-title>
          <v-divider />
          <v-card-text>
            <!-- Before Photos -->
            <h4 class="font-weight-bold mb-3">Before Photos</h4>
            <v-row class="mb-4">
              <v-col v-for="(photo, i) in beforePhotos" :key="'before-' + i" cols="4">
                <v-card variant="outlined" class="pa-1">
                  <v-img :src="photo" height="80" cover class="rounded" />
                  <v-btn 
                    icon 
                    size="x-small" 
                    color="error" 
                    class="position-absolute" 
                    style="top: 4px; right: 4px;"
                    @click="removePhoto('before', i)"
                  >
                    <v-icon size="small">mdi-close</v-icon>
                  </v-btn>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card 
                  variant="outlined" 
                  class="d-flex align-center justify-center" 
                  height="80"
                  style="cursor: pointer; border-style: dashed;"
                  @click="addPhoto('before')"
                >
                  <v-icon color="grey">mdi-plus</v-icon>
                </v-card>
              </v-col>
            </v-row>

            <!-- After Photos -->
            <h4 class="font-weight-bold mb-3">After Photos</h4>
            <v-row class="mb-4">
              <v-col v-for="(photo, i) in afterPhotos" :key="'after-' + i" cols="4">
                <v-card variant="outlined" class="pa-1">
                  <v-img :src="photo" height="80" cover class="rounded" />
                  <v-btn 
                    icon 
                    size="x-small" 
                    color="error" 
                    class="position-absolute" 
                    style="top: 4px; right: 4px;"
                    @click="removePhoto('after', i)"
                  >
                    <v-icon size="small">mdi-close</v-icon>
                  </v-btn>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card 
                  variant="outlined" 
                  class="d-flex align-center justify-center" 
                  height="80"
                  style="cursor: pointer; border-style: dashed;"
                  @click="addPhoto('after')"
                >
                  <v-icon color="grey">mdi-plus</v-icon>
                </v-card>
              </v-col>
            </v-row>

            <!-- Notes -->
            <v-textarea
              v-model="notes"
              label="Completion Notes"
              placeholder="Any notes about the work completed..."
              rows="3"
            />
          </v-card-text>
        </v-card>

        <!-- Complete Job -->
        <v-card elevation="2">
          <v-card-text>
            <v-alert 
              v-if="!canComplete" 
              type="warning" 
              variant="tonal" 
              class="mb-4"
            >
              Please upload at least one before and one after photo to complete this job.
            </v-alert>
            <v-btn 
              block 
              color="success" 
              size="large"
              :disabled="!canComplete"
              :loading="completing"
              @click="completeJob"
            >
              <v-icon start>mdi-check-circle</v-icon>
              Mark Job Complete
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Success Dialog -->
    <v-dialog v-model="showSuccess" max-width="400" persistent>
      <v-card class="pa-6 text-center">
        <v-icon icon="mdi-check-circle" color="success" size="80" class="mb-4" />
        <h2 class="text-h5 font-weight-bold mb-2">Job Completed!</h2>
        <p class="text-body-1 text-grey-darken-1 mb-4">
          Great work! The customer will be notified and you'll receive your payout soon.
        </p>
        <v-card variant="tonal" color="success" class="pa-4 mb-6">
          <div class="text-overline">Payout</div>
          <div class="text-h4 font-weight-bold">{{ job.payout }}</div>
        </v-card>
        <v-btn color="primary" block to="/contractor">
          Back to My Jobs
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showSnackbar = inject<(text: string, color?: string) => void>('showSnackbar')

const job = ref({
  id: route.params.id,
  deceasedName: 'Robert Williams',
  service: 'Headstone Care',
  cemetery: 'Peaceful Rest Cemetery',
  address: '789 Peace Ln, Austin, TX 78701',
  plotReference: 'Section C, Row 8, Plot 12',
  instructions: 'The headstone is black granite. Please use appropriate cleaning solution. There may be some moss growing on the north side that needs attention.',
  payout: '$55'
})

const beforePhotos = ref<string[]>([
  'https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=200&h=200&fit=crop'
])
const afterPhotos = ref<string[]>([])
const notes = ref('')
const completing = ref(false)
const showSuccess = ref(false)

const canComplete = computed(() => beforePhotos.value.length > 0 && afterPhotos.value.length > 0)

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

const addPhoto = (type: 'before' | 'after') => {
  // Demo: add a placeholder photo
  const demoPhotos = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=200&h=200&fit=crop'
  ]
  const randomPhoto = demoPhotos[Math.floor(Math.random() * demoPhotos.length)]
  
  if (type === 'before') {
    beforePhotos.value.push(randomPhoto)
  } else {
    afterPhotos.value.push(randomPhoto)
  }
  showSnackbar?.('Photo added (demo)', 'info')
}

const removePhoto = (type: 'before' | 'after', index: number) => {
  if (type === 'before') {
    beforePhotos.value.splice(index, 1)
  } else {
    afterPhotos.value.splice(index, 1)
  }
}

const openMaps = () => {
  window.open(`https://maps.google.com/?q=${encodeURIComponent(job.value.address)}`, '_blank')
}

const completeJob = async () => {
  completing.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  completing.value = false
  showSuccess.value = true
}
</script>
