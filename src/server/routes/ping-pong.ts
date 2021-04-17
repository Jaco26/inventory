import { Router } from 'express'

const pingPong = Router()

pingPong.get('/ping', (req, res) => {
  res.send('pong')
})

export default pingPong