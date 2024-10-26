import express from 'express'
import cors from 'cors'
import router from './app/routes'
import config from './app/config'

const app = express()

app.use(express.json())
// app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: [config.client_url as string],
  }),
)
//application route
app.use('/api/v1', router)
app.get('/', (req, res) => {
  res.send('Welcome to Personal Portfolio!')
})

export default app
