<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-primary py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-4">
              Honor Their Memory
            </h1>
            <p class="text-h6 text-white mb-8" style="opacity: 0.9">
              Professional grave care services to keep your loved ones' resting places 
              beautiful, dignified, and well-maintained — even when you can't be there.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <v-btn 
                size="x-large" 
                color="white" 
                variant="flat"
                to="/request"
                prepend-icon="mdi-flower"
              >
                Request Service
              </v-btn>
              <v-btn 
                size="x-large" 
                color="white" 
                variant="outlined"
                @click="scrollToServices"
              >
                Learn More
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Cemetery care"
              class="rounded-xl elevation-10"
              aspect-ratio="4/3"
              max-height="400"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Trust Badges -->
    <section class="py-8 bg-grey-lighten-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="6" sm="3" class="text-center">
            <v-icon size="40" color="primary" class="mb-2">mdi-shield-check</v-icon>
            <div class="text-body-2 font-weight-medium">Fully Insured</div>
          </v-col>
          <v-col cols="6" sm="3" class="text-center">
            <v-icon size="40" color="primary" class="mb-2">mdi-star</v-icon>
            <div class="text-body-2 font-weight-medium">5-Star Rated</div>
          </v-col>
          <v-col cols="6" sm="3" class="text-center">
            <v-icon size="40" color="primary" class="mb-2">mdi-map-marker-multiple</v-icon>
            <div class="text-body-2 font-weight-medium">Nationwide</div>
          </v-col>
          <v-col cols="6" sm="3" class="text-center">
            <v-icon size="40" color="primary" class="mb-2">mdi-camera</v-icon>
            <div class="text-body-2 font-weight-medium">Photo Reports</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Our Services</h2>
          <p class="text-body-1 text-grey-darken-1 mx-auto" style="max-width: 600px">
            We offer comprehensive grave care services to ensure your loved ones' 
            final resting places are always treated with respect and care.
          </p>
        </div>

        <v-row>
          <v-col v-for="service in services" :key="service.title" cols="12" sm="6" md="3">
            <v-card class="h-100 text-center pa-6" elevation="2" rounded="xl">
              <v-avatar :color="service.color" size="80" class="mb-4">
                <v-icon :icon="service.icon" size="40" color="white" />
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-2">{{ service.title }}</h3>
              <p class="text-body-2 text-grey-darken-1 mb-4">{{ service.description }}</p>
              <div class="text-h5 font-weight-bold text-primary">{{ service.price }}</div>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-10">
          <v-btn 
            size="large" 
            color="primary" 
            to="/request"
            prepend-icon="mdi-arrow-right"
          >
            Get Started
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">How It Works</h2>
          <p class="text-body-1 text-grey-darken-1">Simple steps to care for your loved ones</p>
        </div>

        <v-row>
          <v-col v-for="(step, i) in steps" :key="step.title" cols="12" md="4">
            <div class="text-center">
              <v-avatar color="primary" size="60" class="mb-4">
                <span class="text-h5 font-weight-bold text-white">{{ i + 1 }}</span>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-2">{{ step.title }}</h3>
              <p class="text-body-2 text-grey-darken-1">{{ step.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials -->
    <section class="py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">What Our Customers Say</h2>
        </div>

        <v-row>
          <v-col v-for="testimonial in testimonials" :key="testimonial.name" cols="12" md="4">
            <v-card class="h-100 pa-6" elevation="2" rounded="xl">
              <div class="d-flex mb-4">
                <v-icon v-for="n in 5" :key="n" color="warning" size="20">mdi-star</v-icon>
              </div>
              <p class="text-body-1 mb-4 font-italic">"{{ testimonial.text }}"</p>
              <div class="d-flex align-center">
                <v-avatar color="grey-lighten-2" size="48" class="mr-3">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">{{ testimonial.name }}</div>
                  <div class="text-caption text-grey">{{ testimonial.location }}</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel v-for="faq in faqs" :key="faq.question">
                <v-expansion-panel-title class="font-weight-medium">
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="text-grey-darken-1">
                  {{ faq.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary">
      <v-container class="text-center">
        <h2 class="text-h3 font-weight-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-h6 text-white mb-8" style="opacity: 0.9">
          Request a service today and receive photos within 48 hours of completion.
        </p>
        <v-btn 
          size="x-large" 
          color="white" 
          variant="flat"
          to="/request"
          prepend-icon="mdi-flower"
        >
          Request Service Now
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Grave Cleanup',
    description: 'Remove debris, trim grass, and general tidying of the grave site.',
    price: '$49',
    icon: 'mdi-broom',
    color: 'green'
  },
  {
    title: 'Flower Delivery',
    description: 'Fresh seasonal flowers placed with care at the grave site.',
    price: '$35+',
    icon: 'mdi-flower',
    color: 'pink'
  },
  {
    title: 'Headstone Care',
    description: 'Professional cleaning and maintenance of headstones.',
    price: '$79',
    icon: 'mdi-grave-stone',
    color: 'grey'
  },
  {
    title: 'Photo Report',
    description: 'Receive photos of the grave site to see its current condition.',
    price: '$25',
    icon: 'mdi-camera',
    color: 'blue'
  }
]

const steps = [
  {
    title: 'Submit Request',
    description: 'Tell us about the cemetery, grave location, and what services you need.'
  },
  {
    title: 'We Take Care',
    description: 'Our verified contractors visit the site and perform the requested services.'
  },
  {
    title: 'Receive Photos',
    description: 'Get before & after photos showing the completed work within 48 hours.'
  }
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'California',
    text: 'Living across the country from my parents\' graves, this service has been a blessing. The photos they send bring me such peace.'
  },
  {
    name: 'James K.',
    location: 'Texas',
    text: 'Professional, respectful, and thorough. They treat my grandmother\'s grave with the same care I would.'
  },
  {
    name: 'Maria L.',
    location: 'Florida',
    text: 'The headstone cleaning service was amazing. It looks brand new. Highly recommend!'
  }
]

const faqs = [
  {
    question: 'How quickly can you complete a service?',
    answer: 'Most services are completed within 48-72 hours of your request, weather permitting. Rush services are available for an additional fee.'
  },
  {
    question: 'Do you service all cemeteries?',
    answer: 'We have contractors nationwide and can service most cemeteries. If we don\'t currently cover your area, we\'ll work to find a solution.'
  },
  {
    question: 'How do I know the work was done?',
    answer: 'Every completed service includes before and after photos sent to your email. You can also track your order status in real-time.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay. Payment is processed securely through Stripe.'
  },
  {
    question: 'Can I schedule recurring services?',
    answer: 'Yes! We offer monthly, quarterly, and annual care packages at discounted rates. Perfect for ongoing maintenance.'
  }
]

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
}

.gap-3 {
  gap: 12px;
}
</style>
