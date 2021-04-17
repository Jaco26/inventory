import { Router } from 'express'

const api = Router()

api.get('/ping', (req, res) => {
  res.send('pongggFFFg')
})

export default api