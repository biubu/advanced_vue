module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [
            'error',
            4
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'no-dupe-keys': 'error',
        'no-eval': 'error',
        'no-alert': 'error',
        'no-eq-null': 'error',
        'max-len': [
            'error',
            {
                'code': 120
            }
        ],
        'max-lines': [
            'error',
            {
                'max': 200,
                'skipBlankLines': true,
                'skipComments': true
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
