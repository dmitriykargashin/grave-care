import 'dotenv/config'
import { createClient } from '@libsql/client'

function generateId(): string {
  return crypto.randomUUID()
}

function nowISO(): string {
  return new Date().toISOString()
}

function dateOffset(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

async function seed() {
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
    console.log('🧹 Clearing existing data...')
    
    // Clear tables in correct order (respecting foreign keys)
    await client.execute('DELETE FROM task_photos')
    await client.execute('DELETE FROM tasks')
    await client.execute('DELETE FROM graves')
    await client.execute('DELETE FROM customers')
    await client.execute('DELETE FROM cemeteries')

    console.log('📝 Inserting seed data...')

    // ============================================
    // CUSTOMERS (5)
    // ============================================
    const customers = [
      { id: generateId(), fullName: 'Martha Johnson', phone: '555-0101', email: 'martha.johnson@email.com', notes: 'Prefers phone calls over email' },
      { id: generateId(), fullName: 'Robert Williams', phone: '555-0102', email: 'r.williams@email.com', notes: null },
      { id: generateId(), fullName: 'Elizabeth Davis', phone: '555-0103', email: 'elizabeth.d@email.com', notes: 'Annual flower arrangement subscription' },
      { id: generateId(), fullName: 'James Miller', phone: '555-0104', email: null, notes: 'Prefers to be contacted by phone only' },
      { id: generateId(), fullName: 'Patricia Anderson', phone: '555-0105', email: 'p.anderson@email.com', notes: 'Has 3 family plots' }
    ]

    for (const c of customers) {
      await client.execute({
        sql: 'INSERT INTO customers (id, full_name, phone, email, notes, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        args: [c.id, c.fullName, c.phone, c.email, c.notes, nowISO()]
      })
    }
    console.log(`  ✓ Inserted ${customers.length} customers`)

    // ============================================
    // CEMETERIES (3)
    // ============================================
    const cemeteries = [
      { id: generateId(), name: 'Oakwood Memorial Gardens', address: '1234 Oak Street, Springfield, IL 62701' },
      { id: generateId(), name: 'Riverside Cemetery', address: '567 River Road, Springfield, IL 62702' },
      { id: generateId(), name: 'St. Mary\'s Catholic Cemetery', address: '890 Church Lane, Springfield, IL 62703' }
    ]

    for (const c of cemeteries) {
      await client.execute({
        sql: 'INSERT INTO cemeteries (id, name, address, created_at) VALUES (?, ?, ?, ?)',
        args: [c.id, c.name, c.address, nowISO()]
      })
    }
    console.log(`  ✓ Inserted ${cemeteries.length} cemeteries`)

    // ============================================
    // GRAVES (8)
    // ============================================
    const graves = [
      { id: generateId(), cemeteryId: cemeteries[0].id, customerId: customers[0].id, plotRef: 'A-12', deceasedName: 'Harold Johnson', specialInstructions: 'Roses preferred for floral arrangements' },
      { id: generateId(), cemeteryId: cemeteries[0].id, customerId: customers[0].id, plotRef: 'A-13', deceasedName: 'Mary Johnson', specialInstructions: 'Same care as A-12' },
      { id: generateId(), cemeteryId: cemeteries[1].id, customerId: customers[1].id, plotRef: 'B-45', deceasedName: 'Thomas Williams', specialInstructions: null },
      { id: generateId(), cemeteryId: cemeteries[1].id, customerId: customers[2].id, plotRef: 'C-22', deceasedName: 'George Davis', specialInstructions: 'Clean headstone monthly' },
      { id: generateId(), cemeteryId: cemeteries[2].id, customerId: customers[2].id, plotRef: 'D-08', deceasedName: 'Catherine Davis', specialInstructions: null },
      { id: generateId(), cemeteryId: cemeteries[2].id, customerId: customers[3].id, plotRef: 'E-33', deceasedName: 'William Miller', specialInstructions: 'Check drainage after rain' },
      { id: generateId(), cemeteryId: cemeteries[0].id, customerId: customers[4].id, plotRef: 'F-01', deceasedName: 'Richard Anderson', specialInstructions: null },
      { id: generateId(), cemeteryId: cemeteries[0].id, customerId: customers[4].id, plotRef: 'F-02', deceasedName: 'Susan Anderson', specialInstructions: 'Fresh flowers every 2 weeks' }
    ]

    for (const g of graves) {
      await client.execute({
        sql: 'INSERT INTO graves (id, cemetery_id, customer_id, plot_ref, deceased_name, special_instructions, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        args: [g.id, g.cemeteryId, g.customerId, g.plotRef, g.deceasedName, g.specialInstructions, nowISO()]
      })
    }
    console.log(`  ✓ Inserted ${graves.length} graves`)

    // ============================================
    // TASKS (20)
    // ============================================
    type TaskStatus = 'todo' | 'scheduled' | 'in_progress' | 'done' | 'canceled'
    type TaskType = 'cleanup' | 'flowers' | 'headstone' | 'photo_report' | 'other'
    type TaskPriority = 'low' | 'normal' | 'high'
    
    interface TaskData {
      graveId: string
      title: string
      type: TaskType
      status: TaskStatus
      priority: TaskPriority
      scheduledFor: string | null
      notes: string | null
    }
    
    const tasks: TaskData[] = [
      // 5 Overdue tasks (scheduled in the past, not done)
      { graveId: graves[0].id, title: 'Spring cleanup overdue', type: 'cleanup', status: 'todo', priority: 'high', scheduledFor: dateOffset(-10), notes: 'Winter debris removal needed' },
      { graveId: graves[1].id, title: 'Replace faded flowers', type: 'flowers', status: 'scheduled', priority: 'normal', scheduledFor: dateOffset(-7), notes: null },
      { graveId: graves[2].id, title: 'Headstone cleaning overdue', type: 'headstone', status: 'todo', priority: 'high', scheduledFor: dateOffset(-5), notes: 'Moss removal required' },
      { graveId: graves[3].id, title: 'Photo documentation needed', type: 'photo_report', status: 'scheduled', priority: 'normal', scheduledFor: dateOffset(-3), notes: 'Customer requested current photos' },
      { graveId: graves[4].id, title: 'General maintenance overdue', type: 'other', status: 'in_progress', priority: 'high', scheduledFor: dateOffset(-2), notes: 'Fence repair around plot' },

      // 5 Scheduled this week
      { graveId: graves[0].id, title: 'Weekly flower refresh', type: 'flowers', status: 'scheduled', priority: 'normal', scheduledFor: dateOffset(1), notes: 'White lilies requested' },
      { graveId: graves[2].id, title: 'Monthly inspection', type: 'other', status: 'scheduled', priority: 'low', scheduledFor: dateOffset(2), notes: null },
      { graveId: graves[5].id, title: 'Drainage check', type: 'other', status: 'todo', priority: 'normal', scheduledFor: dateOffset(3), notes: 'Check after recent rains' },
      { graveId: graves[6].id, title: 'Summer cleanup', type: 'cleanup', status: 'scheduled', priority: 'normal', scheduledFor: dateOffset(4), notes: 'Trim overgrown grass' },
      { graveId: graves[7].id, title: 'Fresh flower delivery', type: 'flowers', status: 'scheduled', priority: 'high', scheduledFor: dateOffset(5), notes: 'Customer anniversary date' },

      // 5 Done in the last 7 days
      { graveId: graves[0].id, title: 'Headstone polishing completed', type: 'headstone', status: 'done', priority: 'normal', scheduledFor: dateOffset(-6), notes: 'Looks great now' },
      { graveId: graves[1].id, title: 'Photo report delivered', type: 'photo_report', status: 'done', priority: 'low', scheduledFor: dateOffset(-5), notes: 'Sent to customer via email' },
      { graveId: graves[3].id, title: 'Winter cleanup finished', type: 'cleanup', status: 'done', priority: 'normal', scheduledFor: dateOffset(-4), notes: null },
      { graveId: graves[4].id, title: 'Easter flowers placed', type: 'flowers', status: 'done', priority: 'high', scheduledFor: dateOffset(-3), notes: 'Beautiful arrangement' },
      { graveId: graves[5].id, title: 'Fence painting completed', type: 'other', status: 'done', priority: 'normal', scheduledFor: dateOffset(-1), notes: 'White fence restored' },

      // 5 Additional varied tasks
      { graveId: graves[6].id, title: 'Fall leaf cleanup', type: 'cleanup', status: 'todo', priority: 'low', scheduledFor: dateOffset(14), notes: null },
      { graveId: graves[7].id, title: 'Annual headstone inspection', type: 'headstone', status: 'scheduled', priority: 'normal', scheduledFor: dateOffset(21), notes: 'Check for cracks or damage' },
      { graveId: graves[2].id, title: 'Plant perennials', type: 'flowers', status: 'todo', priority: 'low', scheduledFor: dateOffset(30), notes: 'Customer wants lavender' },
      { graveId: graves[1].id, title: 'Memorial day preparation', type: 'cleanup', status: 'canceled', priority: 'high', scheduledFor: dateOffset(-30), notes: 'Rescheduled by customer' },
      { graveId: graves[4].id, title: 'Quarterly photo update', type: 'photo_report', status: 'in_progress', priority: 'normal', scheduledFor: dateOffset(0), notes: 'Due today' }
    ]

    for (const t of tasks) {
      await client.execute({
        sql: 'INSERT INTO tasks (id, grave_id, title, type, status, priority, scheduled_for, notes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        args: [generateId(), t.graveId, t.title, t.type, t.status, t.priority, t.scheduledFor, t.notes, nowISO()]
      })
    }
    console.log(`  ✓ Inserted ${tasks.length} tasks`)

    console.log('\n✅ Database seeded successfully!')
    console.log('\n📊 Summary:')
    console.log(`   • ${customers.length} customers`)
    console.log(`   • ${cemeteries.length} cemeteries`)
    console.log(`   • ${graves.length} graves`)
    console.log(`   • ${tasks.length} tasks`)
    console.log(`     - 5 overdue`)
    console.log(`     - 5 scheduled this week`)
    console.log(`     - 5 completed last 7 days`)

  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  } finally {
    client.close()
  }
}

seed()
