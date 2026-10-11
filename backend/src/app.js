import express from 'express'
import cors from 'cors'
import { pool } from './config/db.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/salud', async (req, res) => {
    try {
    await pool.query('SELECT 1')
    res.json({ ok: true, db: true })
    } catch (error) {
    console.error(error)
    res.status(500).json({ ok: false, db: false })
    }
})

export default app