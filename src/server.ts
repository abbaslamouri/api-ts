import mongoose from 'mongoose'
import colors from 'colors'
import 'dotenv/config'
import app from './app'

const db = process.env.DB_URL as string
mongoose
  .connect(db, {})
  .then(() => {
    console.log(colors.magenta.bold(`Database connection succesfull`))
  })
  .catch((err) => {
    console.log(colors.red.bold(`Mongo DB Error ${err}`))
    console.log(colors.red.bold(`Mongo DB Error Message ${err.message}`))
  })

const port: String = process.env.PORT || '5000'
app.listen(port, () => {
  console.log(colors.cyan.bold(`server running on port ${port}...`))
})
