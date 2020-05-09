import deepClone from './index';

const a = {
    v1: 1,
    v2: [2, 2],
    v3: { v30: ['30'] },
    v4: [{ v4: { e: /[a-z]/ } }],
};

const b = [
    { foo: new Date() },
    { bar: [null] },
    new Map([['a', 1], ['b', 2]]),
];

test('测试深拷贝', () => {
    expect(deepClone(a)).toStrictEqual(a);
    expect(deepClone(b)).toStrictEqual(b);
});
