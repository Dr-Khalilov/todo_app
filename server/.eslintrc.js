module.exports = {
    env: {
        node: true,
        browser: true,
        es2022: true,
    },

    plugins: ['prettier', 'import'],
    extends: ['airbnb-base', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { before: false, after: true }],
        'eol-last': ['error', 'always'],
        indent: ['error', 4, { MemberExpression: 1 }],
        'no-multiple-empty-lines': ['error'],
        'no-new-symbol': 'error',
        'no-trailing-spaces': ['error'],
        'no-undef': ['error'],
        'no-unused-vars': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': 'error',
        'prefer-const': 2,
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        strict: [2, 'never'],
    },
};
