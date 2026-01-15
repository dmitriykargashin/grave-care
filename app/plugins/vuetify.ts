import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin({
  name: 'vuetify',
  parallel: true,
  setup(nuxtApp) {
    const vuetify = createVuetify({
      ssr: true,
      components,
      directives,
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#2E7D32',
              secondary: '#558B2F',
              accent: '#8BC34A',
              error: '#D32F2F',
              warning: '#F57C00',
              info: '#1976D2',
              success: '#388E3C',
              background: '#F5F5F5',
              surface: '#FFFFFF'
            }
          }
        }
      },
      defaults: {
        VCard: {
          elevation: 2
        },
        VBtn: {
          variant: 'flat'
        },
        VTextField: {
          variant: 'outlined',
          density: 'comfortable'
        },
        VSelect: {
          variant: 'outlined',
          density: 'comfortable'
        },
        VTextarea: {
          variant: 'outlined',
          density: 'comfortable'
        }
      }
    })

    nuxtApp.vueApp.use(vuetify)
  }
})
