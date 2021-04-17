import express from 'express'
import history from 'connect-history-api-fallback'

import api from './api'

const PORT = process.env.PORT || 3500

const app = express()

app.use((req, res, next) => {
  console.log(new Date().toLocaleTimeString(), req.method, req.path)
  next()
})

app.use(express.json())
app.use(express.text())
app.use(express.static('dist/client'))

app.use('/api', api)

app.use(history())

app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})
