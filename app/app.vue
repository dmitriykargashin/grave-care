<template>
  <v-app>
    <!-- Customer Website: Mobile drawer for navigation -->
    <template v-if="currentPortal === 'customer'">
      <v-navigation-drawer v-model="mobileDrawer" temporary>
        <v-list-item class="pa-4">
          <template #prepend>
            <v-icon icon="mdi-flower" color="primary" size="32" />
          </template>
          <v-list-item-title class="text-h6 font-weight-bold text-primary">
            GraveCare
          </v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list nav density="comfortable">
          <v-list-item
            v-for="item in customerNavItems"
            :key="item.to"
            :to="item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            rounded="lg"
            class="mx-2 my-1"
            @click="mobileDrawer = false"
          />
          <v-list-item
            prepend-icon="mdi-phone"
            title="Contact"
            rounded="lg"
            class="mx-2 my-1"
            @click="showComingSoon(); mobileDrawer = false"
          />
        </v-list>

        <v-divider class="my-2" />

        <div class="pa-4">
          <PortalSwitcher />
        </div>
      </v-navigation-drawer>

      <v-app-bar app elevation="0" color="white" class="border-b">
        <v-container class="d-flex align-center py-0">
          <!-- Mobile hamburger menu -->
          <v-app-bar-nav-icon class="d-md-none" @click="mobileDrawer = !mobileDrawer" />
          
          <div class="d-flex align-center">
            <v-icon icon="mdi-flower" color="primary" size="32" class="mr-2" />
            <span class="text-h5 font-weight-bold text-primary">GraveCare</span>
          </div>
          <v-spacer />
          <!-- Desktop navigation - hidden on mobile -->
          <div class="d-none d-md-flex align-center">
            <v-btn variant="text" to="/" class="mx-1">Home</v-btn>
            <v-btn variant="text" to="/request" class="mx-1">Request Service</v-btn>
            <v-btn variant="text" to="/track" class="mx-1">Track Order</v-btn>
            <v-btn variant="text" @click="showComingSoon" class="mx-1">Contact</v-btn>
            <v-divider vertical class="mx-3" />
            <PortalSwitcher />
          </div>
        </v-container>
      </v-app-bar>

      <v-main>
        <NuxtPage />
      </v-main>

      <!-- Customer Footer -->
      <v-footer class="bg-grey-darken-4 text-white pa-8">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <div class="d-flex align-center mb-4">
                <v-icon icon="mdi-flower" color="primary" size="28" class="mr-2" />
                <span class="text-h6 font-weight-bold">GraveCare</span>
              </div>
              <p class="text-body-2 text-grey-lighten-1">
                Professional grave care and maintenance services. 
                Keeping your loved ones' resting places beautiful and dignified.
              </p>
            </v-col>
            <v-col cols="12" md="2">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Services</h4>
              <div class="text-body-2 text-grey-lighten-1">
                <p class="mb-2">Grave Cleanup</p>
                <p class="mb-2">Flower Delivery</p>
                <p class="mb-2">Headstone Care</p>
                <p class="mb-2">Photo Reports</p>
              </div>
            </v-col>
            <v-col cols="12" md="2">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Company</h4>
              <div class="text-body-2 text-grey-lighten-1">
                <p class="mb-2">About Us</p>
                <p class="mb-2">Contact</p>
                <p class="mb-2">FAQ</p>
                <p class="mb-2">Blog</p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Contact Us</h4>
              <div class="text-body-2 text-grey-lighten-1">
                <p class="mb-2"><v-icon size="small" class="mr-2">mdi-email</v-icon>support@gravecare.com</p>
                <p class="mb-2"><v-icon size="small" class="mr-2">mdi-phone</v-icon>1-800-GRAVE-CARE</p>
                <p class="mb-2"><v-icon size="small" class="mr-2">mdi-map-marker</v-icon>Nationwide Service</p>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-6" color="grey-darken-2" />
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="text-body-2 text-grey">© 2026 GraveCare. All rights reserved.</span>
            <span class="text-caption text-grey-darken-1">Demo Application</span>
          </div>
        </v-container>
      </v-footer>
    </template>

    <!-- Admin & Contractor: Drawer layout -->
    <template v-else>
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item class="pa-4">
          <template #prepend>
            <v-icon icon="mdi-flower" color="primary" size="32" />
          </template>
          <v-list-item-title class="text-h6 font-weight-bold text-primary">
            GraveCare
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            {{ currentPortal === 'admin' ? 'Admin Dashboard' : 'Contractor Portal' }}
          </v-list-item-subtitle>
        </v-list-item>

        <v-divider />

        <v-list nav density="comfortable">
          <v-list-item
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            rounded="lg"
            class="mx-2 my-1"
          />
        </v-list>

        <template #append>
          <div class="pa-4">
            <v-btn 
              block 
              variant="tonal" 
              color="error" 
              prepend-icon="mdi-logout"
              @click="showComingSoon"
            >
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar app elevation="1" color="surface">
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title class="text-h6 font-weight-medium">
          {{ pageTitle }}
        </v-toolbar-title>
        <v-spacer />
        <PortalSwitcher />
      </v-app-bar>

      <v-main class="bg-background">
        <v-container fluid class="pa-4 pa-md-6">
          <NuxtPage />
        </v-container>
      </v-main>
    </template>

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
      location="bottom right"
    >
      {{ snackbar.text }}
      <template #actions>
        <v-btn variant="text" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <ComingSoonDialog v-model="comingSoonDialog" />
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(true)
const mobileDrawer = ref(false)
const route = useRoute()
const router = useRouter()

// Portal state: customer, admin, contractor
const currentPortal = useState<'customer' | 'admin' | 'contractor'>('portal', () => 'customer')

// Customer navigation items for mobile menu
const customerNavItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Request Service', icon: 'mdi-flower', to: '/request' },
  { title: 'Track Order', icon: 'mdi-package-variant', to: '/track' }
]

// Watch portal changes and redirect appropriately
watch(currentPortal, (newPortal) => {
  if (newPortal === 'customer') {
    router.push('/')
  } else if (newPortal === 'admin') {
    router.push('/admin')
  } else {
    router.push('/contractor')
  }
})

const adminNavItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/admin' },
  { title: 'Service Requests', icon: 'mdi-clipboard-list', to: '/admin/requests' },
  { title: 'Contractors', icon: 'mdi-hard-hat', to: '/admin/contractors' },
  { title: 'Customers', icon: 'mdi-account-group', to: '/customers' },
  { title: 'Cemeteries', icon: 'mdi-map-marker', to: '/cemeteries' },
  { title: 'Reports', icon: 'mdi-chart-bar', to: '/admin/reports' }
]

const contractorNavItems = [
  { title: 'My Jobs', icon: 'mdi-clipboard-check-outline', to: '/contractor' },
  { title: 'Job History', icon: 'mdi-history', to: '/contractor/history' },
  { title: 'My Profile', icon: 'mdi-account', to: '/contractor/profile' }
]

const navItems = computed(() => 
  currentPortal.value === 'admin' ? adminNavItems : contractorNavItems
)

const pageTitle = computed(() => {
  const path = route.path
  if (path === '/') return 'Home'
  if (path === '/admin') return 'Admin Dashboard'
  if (path.startsWith('/admin/requests')) return 'Service Requests'
  if (path.startsWith('/admin/contractors')) return 'Contractors'
  if (path.startsWith('/admin/reports')) return 'Reports'
  if (path === '/contractor') return 'My Jobs'
  if (path.startsWith('/contractor/history')) return 'Job History'
  if (path.startsWith('/contractor/profile')) return 'My Profile'
  if (path.startsWith('/contractor/job')) return 'Job Details'
  if (path.startsWith('/tasks')) return 'Tasks'
  if (path.startsWith('/graves')) return 'Graves'
  if (path.startsWith('/customers')) return 'Customers'
  if (path.startsWith('/cemeteries')) return 'Cemeteries'
  if (path.startsWith('/request')) return 'Request Service'
  if (path.startsWith('/track')) return 'Track Order'
  return 'GraveCare'
})

// Global snackbar state
const snackbar = useState('snackbar', () => ({
  show: false,
  text: '',
  color: 'success'
}))

// Coming soon dialog
const comingSoonDialog = useState('comingSoonDialog', () => false)

const showComingSoon = () => { comingSoonDialog.value = true }

// Provide showSnackbar globally
const showSnackbar = (text: string, color = 'success') => {
  snackbar.value = { show: true, text, color }
}

provide('showSnackbar', showSnackbar)
provide('showComingSoon', showComingSoon)
provide('currentPortal', currentPortal)
</script>

<style>
html {
  overflow-y: auto !important;
}
</style>
