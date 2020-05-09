/**
 * 判断是否数组
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isArray(value: any): boolean {
    return Array.isArray(value);
}

/**
 * 判断是否日期
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isDate(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * 判断是否函数
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
    return typeof value === 'function';
}

/**
 * 判断是否null
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isNull(value: any): boolean {
    return value === null;
}

/**
 * 判断是否object
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
    return typeof value === 'object';
}

/**
 * 判断是否正则
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isRegExp(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

/**
 * 判断是否为map
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isMap(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object Map]';
}
