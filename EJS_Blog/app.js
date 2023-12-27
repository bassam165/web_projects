const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.json({
        message:'helo'
    })
})

const PORT = process.env.PORT
app.listen(PORT,() => {
    console.log(`port is running ${PORT}`)
})