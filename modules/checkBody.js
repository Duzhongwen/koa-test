'use strict'
const ApiError = require('../config/ApiError');
const ApiErrorNames = require('../config/ApiErrorNames');

const isNullBody = async (ctx,next) => {
    const { body={} } = ctx.request;
    if(Object.keys(body).length === 0 ){
        throw new ApiError(ApiErrorNames.DATA_INVALID);
    }
    return next();
}
module.exports = isNullBody;