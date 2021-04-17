import { Router } from 'express'

import pingPong from './ping-pong'

const api = Router()

api.use(pingPong)

export default api

