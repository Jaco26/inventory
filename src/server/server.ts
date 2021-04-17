import path from 'path'
import express from 'express'

import pingPong from './routes/ping-pong'

const PORT = process.env.PORT || 3500

const app = express()

app.use(express.static(path.resolve('dist/client')))

app.use(pingPong)

app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})
