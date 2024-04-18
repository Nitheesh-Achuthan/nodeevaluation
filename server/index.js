const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const userRouter = require('./Router/userRouter')

mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("database is not connected");
})

app.use(express.json())
app.use('/student',userRouter)

app.listen(8080,()=>{
    console.log("port is connected");
})