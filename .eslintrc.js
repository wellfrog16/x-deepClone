module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'airbnb-typescript/base',
    ],
    globals: {
        'window': true,
    },
    rules: {
        indent: [2, 4, { "SwitchCase": 1 }], // 缩进风格
        'max-len': [2, { 'code': 150 }],
        'no-underscore-dangle': [2, { 'allow': ['_id'] }], // nedb专用
        'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // ? 允许 a && a()写法
        'no-param-reassign': 0,
        // 'no-param-reassign': [2, { 'props': true, 'ignorePropertyModificationsFor': ['state', 'item', 'el', 'params'] }], // 允许vuex里的state，备用item, el, params
        '@typescript-eslint/indent': ['error', 4], // 缩进风格
        '@typescript-eslint/no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // ? 允许 a && a()写法
        'spaced-comment': [2, 'always', { 'markers': ['/'] }], // 三斜杠typescript类型引用
        'arrow-parens': [2, 'as-needed'],


        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-debugger': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
