<template>
  <v-menu>
    <template #activator="{ props }">
      <v-chip 
        v-bind="props" 
        :color="portalColor" 
        variant="tonal" 
        class="mr-4"
        style="cursor: pointer"
      >
        <v-icon start :icon="portalIcon" />
        {{ portalLabel }}
        <v-icon end icon="mdi-chevron-down" size="small" />
      </v-chip>
    </template>
    <v-list density="compact" min-width="250">
      <v-list-subheader>Switch Portal (Demo)</v-list-subheader>
      <v-list-item 
        prepend-icon="mdi-web"
        title="Customer Website"
        subtitle="Public site & service requests"
        :active="currentPortal === 'customer'"
        @click="currentPortal = 'customer'"
      />
      <v-list-item 
        prepend-icon="mdi-shield-crown"
        title="Admin Dashboard"
        subtitle="Manage requests & contractors"
        :active="currentPortal === 'admin'"
        @click="currentPortal = 'admin'"
      />
      <v-list-item 
        prepend-icon="mdi-hard-hat"
        title="Contractor Portal"
        subtitle="View & complete assigned jobs"
        :active="currentPortal === 'contractor'"
        @click="currentPortal = 'contractor'"
      />
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const currentPortal = useState<'customer' | 'admin' | 'contractor'>('portal')

const portalIcon = computed(() => {
  switch (currentPortal.value) {
    case 'customer': return 'mdi-web'
    case 'admin': return 'mdi-shield-crown'
    case 'contractor': return 'mdi-hard-hat'
  }
})

const portalColor = computed(() => {
  switch (currentPortal.value) {
    case 'customer': return 'secondary'
    case 'admin': return 'primary'
    case 'contractor': return 'warning'
  }
})

const portalLabel = computed(() => {
  switch (currentPortal.value) {
    case 'customer': return 'Customer'
    case 'admin': return 'Admin'
    case 'contractor': return 'Contractor'
  }
})
</script>
