/**
 * @desc   判断字符串是否为邮箱地址
 * @param  String
 * @return Boolean
 */
function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

module.exports = isEmail;