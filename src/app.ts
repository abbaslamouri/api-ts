import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
app.use(express.json({ limit: '1000kb' }))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello')
})

export default app
