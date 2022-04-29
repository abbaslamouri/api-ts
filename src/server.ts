import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const dbUrl = process.env.DB_URL || ''
const port = process.env.PORT ? Number(process.env.PORT) : 5000

// async function run() {
//   await connect(db)
// }

mongoose
  .connect(dbUrl, {dbName: process.env.DB_NAME})
  .then(() => {
    console.log(colors.magenta.bold(`Database connection succesfull`))
    app.listen(port, () => {
      console.log(colors.cyan.bold(`server running on port ${port}...`))
    })
  })
  .catch((err) => {
    console.log(colors.red.bold(`Mongo DB Error ${err}`))
    console.log(colors.red.bold(`Mongo DB Error Message ${err.message}`))
  })
