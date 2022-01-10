import express from 'express'
import { savingsRouter } from './savings'

const getRoutes = () => {
  const router = express.Router()
  router.use('/calculateSavings', savingsRouter)
  return router
}

export { getRoutes }
