/**
 * Created by duzhongwen on 17/11/27.
 */
/**
 * API错误名称
 */
var ApiErrorNames = {
    FORMAT_INVALID: 'FORMAT_INVALID',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    USER_EXISTED: 'USER_EXISTED',
    DATA_INVALID: 'DATA_INVALID',
    LOGIN_REQUIRED: 'LOGIN_REQUIRED',
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    UNKNOW_ERROR:'UNKNOW_ERROR'
}

/**
 * API错误名称对应的错误信息
 */
const error_map = new Map();

error_map.set(ApiErrorNames.UNKNOW_ERROR, { code: -1,success:false, message: '未知错误!' });
error_map.set(ApiErrorNames.USER_NOT_FOUND, { code: 0, success:false,message: '用户不存在!' });
error_map.set(ApiErrorNames.USER_EXISTED, { code: 0, success:false,message: '用户已存在!' });
error_map.set(ApiErrorNames.FORMAT_INVALID, { code: 0, success:false,message: '格式错误!' });
error_map.set(ApiErrorNames.DATA_INVALID, { code: 0, success:false,message: '参数错误' });
error_map.set(ApiErrorNames.PERMISSION_DENIED, { code: 0, success:false,message: '权限不足' });
error_map.set(ApiErrorNames.LOGIN_REQUIRED, { code: 0, success:false,message: '用户账号或密码错误' });
error_map.set(ApiErrorNames.EXPIRED_TOKEN, { code: 0, success:false,message: '登录过期,请重新登录' });

//根据错误名称获取错误信息
ApiErrorNames.getErrorInfo = (error_name) => {

    var error_info;

    if (error_name) {
        error_info = error_map.get(error_name);
    }

    //如果没有对应的错误信息，默认'未知错误'
    if (!error_info) {
        error_name = UNKNOW_ERROR;
        error_info = error_map.get(error_name);
    }

    return error_info;
}

module.exports = ApiErrorNames;