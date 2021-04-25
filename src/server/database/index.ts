import { Pool } from 'pg'

type ParseDatabaseURL = () => {
  user: string
  password: string
  host: string
  port: number
  database: string
}

const parseDatabaseURL: ParseDatabaseURL = () => {
  const DATABASE_URL = process.env.DATABASE_URL || ''
  try {
    const [credentials, andTheRest] = DATABASE_URL
      .slice(DATABASE_URL.indexOf('://') + 3)
      .split('@')
    const [user, password] = credentials.split(':')
    const [host, andMore] = andTheRest.split(':')
    const [port, database] = andMore.split('/')
    return { user, password, host, port: Number(port), database }
  } catch (error) {
    throw error
  }
}

export const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 2_000,
  ...parseDatabaseURL()
})