const express = require('express')
const mongoose= require('mongoose')
const morgan=require('morgan')
//const path=require('path')
require('dotenv').config()
const app = express()
const routes=require('./routes/api')
const PORT = process.env.PORT ||8080
const cors=require('cors')

//MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )



app.use(morgan('tiny'))

app.use('/api',routes)


app.listen(PORT,
    console.log(`Server on ${PORT}`))
