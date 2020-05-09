module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['last 2 versions', 'ie >= 10'],
                },
                // useBuiltIns: 'usage',
                // corejs: 3,
            },
        ],
        '@babel/preset-typescript',
    ],
};
