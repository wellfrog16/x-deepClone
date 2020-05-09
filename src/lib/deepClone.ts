import * as types from './typeof';

function isObj(val: any): boolean {
    return !types.isNull(val)
        && (types.isFunction(val) || types.isObject(val));
}

export default function deepClone(val: any): any {
    // 基本数据类型
    if (!isObj(val)) { return val; }

    if (types.isDate(val) || types.isRegExp(val)) {
        // @ts-ignore
        return new val.constructor(val);
    }

    if (types.isArray(val)) {
        return <Array<any>>val.map(v => deepClone(v));
    }

    if (types.isFunction(val)) {
        return val;
    }

    if (types.isMap(val)) {
        const map = new Map();
        val.forEach((value, key) => {
            map.set(key, deepClone(value));
        });
        return map;
    }

    const obj = { ...val };
    Object.keys(val).forEach(key => {
        obj[key] = deepClone(val[key]);
    });
    return obj;
}
