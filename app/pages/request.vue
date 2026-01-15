<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-6 pa-md-8" elevation="4" rounded="xl">
          <div class="text-center mb-8">
            <v-icon icon="mdi-flower" color="primary" size="48" class="mb-4" />
            <h1 class="text-h4 font-weight-bold mb-2">Request a Service</h1>
            <p class="text-body-1 text-grey-darken-1">
              Fill out the form below and we'll take care of your loved one's grave.
            </p>
          </div>

          <!-- Stepper -->
          <v-stepper v-model="step" :items="stepItems" alt-labels class="elevation-0">
            <template #item.1>
              <div class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-4">Grave Information</h3>
                
                <v-text-field
                  v-model="form.cemeteryName"
                  label="Cemetery Name *"
                  placeholder="e.g., Green Lawn Memorial Park"
                  prepend-inner-icon="mdi-map-marker"
                  :rules="[rules.required]"
                  class="mb-4"
                />

                <v-text-field
                  v-model="form.cemeteryAddress"
                  label="Cemetery Address"
                  placeholder="City, State"
                  prepend-inner-icon="mdi-map"
                  class="mb-4"
                />

                <v-text-field
                  v-model="form.deceasedName"
                  label="Loved One's Name *"
                  placeholder="Name on headstone"
                  prepend-inner-icon="mdi-account-heart"
                  :rules="[rules.required]"
                  class="mb-4"
                />

                <v-text-field
                  v-model="form.plotReference"
                  label="Plot/Section Reference"
                  placeholder="e.g., Section B, Row 12, Plot 5"
                  prepend-inner-icon="mdi-grave-stone"
                  hint="Helps our team locate the grave faster"
                  class="mb-4"
                />

                <div class="d-flex justify-end">
                  <v-btn color="primary" size="large" @click="step = 2">
                    Continue
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </template>

            <template #item.2>
              <div class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-4">Select Service</h3>

                <v-radio-group v-model="form.serviceType" class="mb-6">
                  <v-card 
                    v-for="service in services" 
                    :key="service.value"
                    :color="form.serviceType === service.value ? 'primary' : undefined"
                    :variant="form.serviceType === service.value ? 'tonal' : 'outlined'"
                    class="mb-3 pa-4"
                    @click="form.serviceType = service.value"
                    style="cursor: pointer"
                  >
                    <div class="d-flex align-center">
                      <v-radio :value="service.value" class="mr-4" />
                      <v-icon :icon="service.icon" size="32" class="mr-4" />
                      <div class="flex-grow-1">
                        <div class="font-weight-bold">{{ service.title }}</div>
                        <div class="text-body-2 text-grey-darken-1">{{ service.description }}</div>
                      </div>
                      <div class="text-h6 font-weight-bold text-primary">{{ service.price }}</div>
                    </div>
                  </v-card>
                </v-radio-group>

                <v-textarea
                  v-model="form.specialInstructions"
                  label="Special Instructions"
                  placeholder="Any specific requests or details about the grave location..."
                  prepend-inner-icon="mdi-text"
                  rows="3"
                  class="mb-4"
                />

                <v-file-input
                  v-model="form.photos"
                  label="Reference Photos (optional)"
                  prepend-inner-icon="mdi-camera"
                  accept="image/*"
                  multiple
                  chips
                  hint="Upload any photos that might help locate or identify the grave"
                  class="mb-4"
                />

                <div class="d-flex justify-space-between">
                  <v-btn variant="text" size="large" @click="step = 1">
                    <v-icon start>mdi-arrow-left</v-icon>
                    Back
                  </v-btn>
                  <v-btn color="primary" size="large" @click="step = 3">
                    Continue
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </template>

            <template #item.3>
              <div class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-4">Your Information</h3>

                <v-text-field
                  v-model="form.customerName"
                  label="Your Name *"
                  prepend-inner-icon="mdi-account"
                  :rules="[rules.required]"
                  class="mb-4"
                />

                <v-text-field
                  v-model="form.customerEmail"
                  label="Email Address *"
                  type="email"
                  prepend-inner-icon="mdi-email"
                  :rules="[rules.required, rules.email]"
                  hint="We'll send confirmation and photos here"
                  class="mb-4"
                />

                <v-text-field
                  v-model="form.customerPhone"
                  label="Phone Number"
                  type="tel"
                  prepend-inner-icon="mdi-phone"
                  hint="Optional - for SMS updates"
                  class="mb-4"
                />

                <div class="d-flex justify-space-between">
                  <v-btn variant="text" size="large" @click="step = 2">
                    <v-icon start>mdi-arrow-left</v-icon>
                    Back
                  </v-btn>
                  <v-btn color="primary" size="large" @click="step = 4">
                    Continue to Payment
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </template>

            <template #item.4>
              <div class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-4">Review & Payment</h3>

                <!-- Order Summary -->
                <v-card variant="tonal" color="grey-lighten-4" class="pa-4 mb-6">
                  <h4 class="font-weight-bold mb-3">Order Summary</h4>
                  <v-list density="compact" class="bg-transparent">
                    <v-list-item>
                      <template #prepend>
                        <v-icon>mdi-map-marker</v-icon>
                      </template>
                      <v-list-item-title>{{ form.cemeteryName || 'Cemetery' }}</v-list-item-title>
                      <v-list-item-subtitle>{{ form.cemeteryAddress }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <template #prepend>
                        <v-icon>mdi-account-heart</v-icon>
                      </template>
                      <v-list-item-title>{{ form.deceasedName || 'Loved one' }}</v-list-item-title>
                      <v-list-item-subtitle>{{ form.plotReference }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <template #prepend>
                        <v-icon>{{ selectedService?.icon }}</v-icon>
                      </template>
                      <v-list-item-title>{{ selectedService?.title }}</v-list-item-title>
                      <template #append>
                        <span class="font-weight-bold">{{ selectedService?.price }}</span>
                      </template>
                    </v-list-item>
                  </v-list>
                  <v-divider class="my-3" />
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-h6 font-weight-bold">Total</span>
                    <span class="text-h5 font-weight-bold text-primary">{{ selectedService?.price }}</span>
                  </div>
                </v-card>

                <!-- Payment Form (Demo) -->
                <v-card variant="outlined" class="pa-4 mb-6">
                  <div class="d-flex align-center mb-4">
                    <v-icon color="primary" class="mr-2">mdi-lock</v-icon>
                    <span class="font-weight-medium">Secure Payment</span>
                    <v-spacer />
                    <v-img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" max-width="60" />
                  </div>

                  <v-text-field
                    v-model="payment.cardNumber"
                    label="Card Number"
                    placeholder="4242 4242 4242 4242"
                    prepend-inner-icon="mdi-credit-card"
                    class="mb-4"
                  />

                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model="payment.expiry"
                        label="Expiry"
                        placeholder="MM/YY"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="payment.cvc"
                        label="CVC"
                        placeholder="123"
                      />
                    </v-col>
                  </v-row>
                </v-card>

                <v-checkbox
                  v-model="form.agreeTerms"
                  label="I agree to the Terms of Service and Privacy Policy"
                  color="primary"
                  class="mb-4"
                />

                <div class="d-flex justify-space-between">
                  <v-btn variant="text" size="large" @click="step = 3">
                    <v-icon start>mdi-arrow-left</v-icon>
                    Back
                  </v-btn>
                  <v-btn 
                    color="primary" 
                    size="large" 
                    :loading="submitting"
                    @click="submitOrder"
                  >
                    <v-icon start>mdi-check</v-icon>
                    Place Order
                  </v-btn>
                </div>
              </div>
            </template>
          </v-stepper>
        </v-card>
      </v-col>
    </v-row>

    <!-- Success Dialog -->
    <v-dialog v-model="showSuccess" max-width="500" persistent>
      <v-card class="pa-6 text-center">
        <v-icon icon="mdi-check-circle" color="success" size="80" class="mb-4" />
        <h2 class="text-h5 font-weight-bold mb-2">Order Confirmed!</h2>
        <p class="text-body-1 text-grey-darken-1 mb-4">
          Thank you for your order. We've sent a confirmation email to 
          <strong>{{ form.customerEmail }}</strong>.
        </p>
        <v-card variant="tonal" color="primary" class="pa-4 mb-6">
          <div class="text-overline">Order Number</div>
          <div class="text-h4 font-weight-bold">{{ orderNumber }}</div>
        </v-card>
        <p class="text-body-2 text-grey mb-6">
          You can track your order status anytime using the order number above.
        </p>
        <div class="d-flex gap-3 justify-center">
          <v-btn variant="outlined" to="/track">
            Track Order
          </v-btn>
          <v-btn color="primary" to="/">
            Back to Home
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
const step = ref(1)
const submitting = ref(false)
const showSuccess = ref(false)
const orderNumber = ref('')

const stepItems = ['Grave Info', 'Service', 'Your Info', 'Payment']

const form = ref({
  cemeteryName: '',
  cemeteryAddress: '',
  deceasedName: '',
  plotReference: '',
  serviceType: 'cleanup',
  specialInstructions: '',
  photos: [] as File[],
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  agreeTerms: false
})

const payment = ref({
  cardNumber: '',
  expiry: '',
  cvc: ''
})

const rules = {
  required: (v: string) => !!v || 'This field is required',
  email: (v: string) => /.+@.+\..+/.test(v) || 'Valid email required'
}

const services = [
  {
    value: 'cleanup',
    title: 'Grave Cleanup',
    description: 'Remove debris, trim grass, general tidying',
    price: '$49',
    icon: 'mdi-broom'
  },
  {
    value: 'flowers',
    title: 'Flower Delivery',
    description: 'Fresh seasonal flowers placed with care',
    price: '$35',
    icon: 'mdi-flower'
  },
  {
    value: 'headstone',
    title: 'Headstone Care',
    description: 'Professional cleaning and maintenance',
    price: '$79',
    icon: 'mdi-grave-stone'
  },
  {
    value: 'photo_report',
    title: 'Photo Report Only',
    description: 'Current condition photos of the grave',
    price: '$25',
    icon: 'mdi-camera'
  }
]

const selectedService = computed(() => 
  services.find(s => s.value === form.value.serviceType)
)

const submitOrder = async () => {
  submitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Generate order number
  orderNumber.value = 'GC-' + Date.now().toString(36).toUpperCase()
  
  submitting.value = false
  showSuccess.value = true
}
</script>

<style scoped>
.gap-3 {
  gap: 12px;
}
</style>
