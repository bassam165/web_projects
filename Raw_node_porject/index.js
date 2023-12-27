const http= require('http')
const {handleReqRes} = require('./helper/handleReqRes')

//app-module scufholding
const app={}

//config
app.config={
    port:3000
}

//server
app.creteServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`listen to port ${app.config.port}`)
    })
}

app.handleReqRes = handleReqRes

//start server
app.creteServer()