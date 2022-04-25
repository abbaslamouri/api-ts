import express, { Application, Request, Response, NextFunction } from 'express'
import Product from './models/product'

const app: Application = express()
app.use(express.json({ limit: '1000kb' }))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const products = await Product.find()
  console.log(products)
  // const docs = await features.query.explain()
  res.status(200).json({
    status: 'success',
    products,
  })
})

export default app
