const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')
const inboxRouter = require('./router/inboxRoute')

//internal imports
const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler')

const app = express()
dotenv.config()

//database connection
mongoose.connect(process.env.Mongo, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("database sucess"))
 .catch(err=>console.log(err))

//requrest parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//set static folder
app.use(express.static(path.join(__dirname,"public")))

//cookie parser
app.use(cookieParser(process.env.CookieParse))

//routing setup
app.use("/",loginRouter)
app.use("/users",usersRouter)
app.use("/inbox",inboxRouter)

//404 error hanalde
app.use(notFoundHandler)

//common error handler
app.use(errorHandler)

app.listen(process.env.PORT, ()=> {
    console.log(`app listeing port ${process.env.PORT}`)
})