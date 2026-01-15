// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  
  ssr: true,
  
  alias: {
    '#shared': fileURLToPath(new URL('./shared', import.meta.url)),
    '#server': fileURLToPath(new URL('./server', import.meta.url))
  },
  
  app: {
    head: {
      title: 'GraveCare',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cemetery care management system' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/styles'
  ],

  build: {
    transpile: ['vuetify']
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    }
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  runtimeConfig: {
    tursoDbUrl: process.env.TURSO_DATABASE_URL || '',
    tursoAuthToken: process.env.TURSO_AUTH_TOKEN || '',
    blobReadWriteToken: process.env.BLOB_READ_WRITE_TOKEN || '',
    public: {
      appName: 'GraveCare'
    }
  },

  nitro: {
    preset: 'vercel',
    externals: {
      inline: ['vue-bundle-renderer', '@vue/shared', '@vue/reactivity', '@vue/runtime-core', '@vue/runtime-dom']
    }
  }
})
