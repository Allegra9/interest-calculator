import express from 'express'
import cors from 'cors'
import { getRoutes } from './routes'

export const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', getRoutes())

app.set('port', process.env.PORT || 3001)

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
