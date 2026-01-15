<template>
  <v-dialog v-model="dialogModel" max-width="400" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon icon="mdi-clock-outline" color="info" class="mr-2" />
        Coming Soon
      </v-card-title>
      <v-card-text>
        This feature is coming soon! Stay tuned for updates.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" variant="flat" @click="dialogModel = false">
          Got it
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const dialogModel = defineModel<boolean>({ default: false })
</script>
