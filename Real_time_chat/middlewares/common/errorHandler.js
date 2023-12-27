const createError =require('http-errors')

//handler error like 404
function notFoundHandler(req,res,next){
    next(createError(404, "your requestted data not found"))
}

//default error handler
function errorHandler(err,req,res,next){
    res.render('error', {
        title: "error page"
    })
}

module.exports = {
    notFoundHandler,
    errorHandler,
}