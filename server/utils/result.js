function createResult(error,data){
    if(data){
        return createSuccessResult(data)
    }
    else{
        return createErrorResult(error)
    }
}

function createSuccessResult(data){
    return {status:"Success",data:data}
}

function createErrorResult(error){
    return {status:"Error",error:error}
}

module.exports={createErrorResult,createResult,createSuccessResult}