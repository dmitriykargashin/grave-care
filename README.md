# GraveCare

A modern cemetery care management application built with Nuxt 4, Vuetify 3, Turso (libSQL), and Vercel Blob.

## Features

- 📊 **Dashboard** - Overview of open tasks, scheduled work, and recent activity
- ✅ **Task Management** - Create, track, and complete service tasks
- 📷 **Photo Reports** - Upload and manage task photos via Vercel Blob
- 🪦 **Grave Management** - Track grave locations and associated customers
- 👥 **Customer Management** - Manage customer information and their graves
- 🗺️ **Cemetery Management** - Organize cemetery locations

## Tech Stack

- **Frontend**: Nuxt 4, Vue 3, Vuetify 3
- **Backend**: Nitro (Nuxt Server)
- **Database**: Turso (libSQL)
- **File Storage**: Vercel Blob
- **Deployment**: Vercel

## Environment Variables

Create a `.env` file in the root directory:

```env
# Turso Database
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token

# Vercel Blob (for production photo uploads)
BLOB_READ_WRITE_TOKEN=your-blob-token
```

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- Turso account (for database)
- Vercel account (for deployment and Blob storage)

### Installation

```bash
# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials
```

### Database Setup

```bash
# Apply database schema
yarn db:schema

# Seed with demo data
yarn db:seed

# Or run both at once
yarn db:setup
```

### Development

```bash
# Start development server
yarn dev
```

The app will be available at `http://localhost:3000`.

### Production Build

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `BLOB_READ_WRITE_TOKEN`
4. Deploy!

## Project Structure

```
├── app/
│   ├── app.vue           # Main app layout
│   ├── components/       # Vue components
│   │   ├── ComingSoonDialog.vue
│   │   ├── CustomerDialog.vue
│   │   ├── CemeteryDialog.vue
│   │   ├── GraveDialog.vue
│   │   └── TaskDialog.vue
│   └── pages/            # Nuxt pages
│       ├── index.vue     # Dashboard
│       ├── tasks/        # Task pages
│       ├── graves/       # Grave pages
│       ├── customers/    # Customer pages
│       └── cemeteries.vue
├── server/
│   ├── api/              # API routes
│   ├── repositories/     # Database queries
│   └── utils/            # Server utilities
├── types/                # TypeScript types
├── plugins/              # Nuxt plugins
├── scripts/db/           # Database scripts
│   ├── schema.sql
│   ├── apply-schema.ts
│   └── seed.ts
└── nuxt.config.ts
```

## Demo Mode

This is a demo application. Authentication is stubbed and the app always runs as "Admin (Demo)". Some features display "Coming Soon" dialogs:

- Export to PDF
- Send Report to Customer
- Recurring Service Schedules

## License

MIT
