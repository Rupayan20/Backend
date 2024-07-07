const asyncHandler= (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(responseHandler(req, res, next)).catch(err => next(err))
    }
}

export {asyncHandler}



// using try-catch
/*
const asyncHandler = (fn) => async (req, res, next) => {
    try{
        await fn(req, res, next);
    } catch(e){
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
    */