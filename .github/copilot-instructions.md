# GraveCare - Copilot Instructions

## Project Overview
GraveCare is a Nuxt 4 demo application for managing cemetery care services. It uses:
- **Nuxt 4** with Vue 3 Composition API
- **Vuetify 3** for UI components
- **Turso (libSQL)** for database
- **Vercel Blob** for photo uploads
- **Yarn** as package manager

## Architecture
- `/pages` - Nuxt pages with file-based routing
- `/components` - Vue components (dialogs, shared UI)
- `/server/api` - Nitro API routes
- `/server/repositories` - Database query modules
- `/server/utils` - Database client and utilities
- `/types` - Shared TypeScript types
- `/scripts/db` - Database schema and seed scripts

## Coding Standards
- Use TypeScript for all code
- Use Vue 3 Composition API with `<script setup>`
- Use Vuetify 3 components for all UI
- All database access goes through repositories
- API routes use parameterized SQL queries
- Use camelCase for JS/TS, snake_case for database columns

## Environment Variables
- `TURSO_DATABASE_URL` - Turso database URL
- `TURSO_AUTH_TOKEN` - Turso auth token
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob token (production)

## Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn db:schema` - Apply database schema
- `yarn db:seed` - Seed database with demo data
- `yarn db:setup` - Run both schema and seed
