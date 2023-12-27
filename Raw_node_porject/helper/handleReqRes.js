const url = require('url')
const {StringDecoder} = require('string_decoder')

const handler = {}

handler.handleReqRes = (req,res) => {
    //request
    //get the url
    const praseUrl = url.parse(req.url,true)
    const path = praseUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const queryStringObject = praseUrl.query
    const headerObject = req.headers

    const decoder = new StringDecoder('utf-8')
    let realData = ''
    req.on('data',(buffer)=>{
        realData += decoder.write(buffer)
    })
    req.on('end',()=>{
        realData += decoder.end()
    })
    //response
    res.end("hello")
}

module.exports = handler