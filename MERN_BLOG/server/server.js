const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//dotenv config
dotenv.config()

//router import
const userRoutes = require('./routes/userRoute')

//database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log(err)
    }
}

//instsance create
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRoutes)

//listen port
const port = process.env.PORT || 8080
app.listen(port, () => {
    connectDB()
    console.log(`server is running port ${process.env.PORT} in ${process.env.NODE_MODE} mode`)
})