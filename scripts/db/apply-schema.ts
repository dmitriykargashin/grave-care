import 'dotenv/config'
import { createClient } from '@libsql/client'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function applySchema() {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url) {
    console.error('❌ TURSO_DATABASE_URL is not set')
    process.exit(1)
  }

  console.log('🔗 Connecting to database...')
  
  const client = createClient({
    url,
    authToken: authToken || undefined
  })

  try {
    const schemaPath = join(__dirname, 'schema.sql')
    const schema = readFileSync(schemaPath, 'utf-8')
    
    // Remove SQL comments and split by semicolons
    const cleanedSchema = schema
      .split('\n')
      .filter(line => !line.trim().startsWith('--'))
      .join('\n')
    
    const statements = cleanedSchema
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    console.log(`📋 Applying ${statements.length} SQL statements...`)

    for (const statement of statements) {
      console.log(`  → ${statement.substring(0, 50)}...`)
      await client.execute(statement)
    }

    console.log('✅ Schema applied successfully!')
  } catch (error) {
    console.error('❌ Error applying schema:', error)
    process.exit(1)
  } finally {
    client.close()
  }
}

applySchema()
