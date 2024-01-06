const express = require('express')
const postRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/users",usersRoutes)


app.listen(8800,()=>{
    console.log("port run")
})