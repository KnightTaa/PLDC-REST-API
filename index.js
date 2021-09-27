import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRouter from './routes/post.js'
import coviddataRouter from './routes/covidData.js'

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log("Database Connected"))

const app = express()
const PORT = process.env.PORT || 5000
app.use(bodyParser.json())
app.use('/posts', postRouter)
app.use('/covid', coviddataRouter)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))