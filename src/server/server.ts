import path from 'path'
import express from 'express'

import apiRoute from './route'

const PORT = process.env.PORT || 3500

const app = express()

app.use(express.static(path.resolve('dist/client')))

app.use('/api', apiRoute)

app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})

// tsc ./src/server/server.ts --target esnext --outfile dist/server.js