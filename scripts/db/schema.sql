-- GraveCare Database Schema
-- Run this script to create all tables

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  notes TEXT,
  created_at TEXT NOT NULL
);

-- Cemeteries table
CREATE TABLE IF NOT EXISTS cemeteries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  created_at TEXT NOT NULL
);

-- Graves table
CREATE TABLE IF NOT EXISTS graves (
  id TEXT PRIMARY KEY,
  cemetery_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  plot_ref TEXT NOT NULL,
  deceased_name TEXT,
  special_instructions TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (cemetery_id) REFERENCES cemeteries(id),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Create indexes for graves
CREATE INDEX IF NOT EXISTS idx_graves_cemetery_id ON graves(cemetery_id);
CREATE INDEX IF NOT EXISTS idx_graves_customer_id ON graves(customer_id);

-- Tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  grave_id TEXT NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  priority TEXT NOT NULL,
  scheduled_for TEXT,
  notes TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (grave_id) REFERENCES graves(id)
);

-- Create indexes for tasks
CREATE INDEX IF NOT EXISTS idx_tasks_grave_id ON tasks(grave_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_scheduled_for ON tasks(scheduled_for);

-- Task Photos table
CREATE TABLE IF NOT EXISTS task_photos (
  id TEXT PRIMARY KEY,
  task_id TEXT NOT NULL,
  blob_url TEXT NOT NULL,
  caption TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);

-- Create index for task_photos
CREATE INDEX IF NOT EXISTS idx_task_photos_task_id ON task_photos(task_id);
