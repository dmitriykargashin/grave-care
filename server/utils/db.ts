import { createClient, type Client } from '@libsql/client'

let client: Client | null = null

export function useDb(): Client {
  if (!client) {
    const config = useRuntimeConfig()
    
    if (!config.tursoDbUrl) {
      throw new Error('TURSO_DATABASE_URL is not configured')
    }

    client = createClient({
      url: config.tursoDbUrl,
      authToken: config.tursoAuthToken || undefined
    })
  }

  return client
}

// Helper to convert snake_case to camelCase
export function toCamelCase<T extends Record<string, unknown>>(row: Record<string, unknown>): T {
  const result: Record<string, unknown> = {}
  for (const key in row) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    result[camelKey] = row[key]
  }
  return result as T
}

// Helper to convert camelCase to snake_case
export function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

// Generate UUID
export function generateId(): string {
  return crypto.randomUUID()
}

// Get current ISO timestamp
export function nowISO(): string {
  return new Date().toISOString()
}
