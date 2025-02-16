const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.oringinalUrl}`)
    req.status(404)
    next(error)
}
const errorHandler = (err, req, res, next) =>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let meessage = err.meessage;
}
if(err.name === 'CastError' && err.kind === 'ObjectId'){
    message = 'Resource Not Found';
    stausCode = 404;
}

res.status(statusCode).json({
    message
})

export{ notFound, errorHandler}