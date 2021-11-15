module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
        es6: true,
        commonjs: true,
    },
    parserOptions: {
        ecmaVersion: 8,
    },
    globals: {
        console: false,
        Uint8Array: false,
    },
    extends: [
        'prettier',
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:promise/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'optimize-regex', 'sonarjs', 'no-loops', 'no-use-extend-native', 'promise'],
    rules: {
        'valid-jsdoc': 'off',
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        'semi-spacing': ['error', { before: false, after: true }],
        'wrap-iife': ['error', 'inside'],
        'no-use-before-define': ['error', 'nofunc'],
        'no-caller': 'error',
        'no-cond-assign': ['error', 'except-parens'],
        'no-constant-condition': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-sparse-arrays': 'error',
        'no-undef': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unused-vars': ['error', {
            vars: 'all',
            args: 'none',
        }],
        strict: 'off',
        'max-params': ['error', 5],
        'max-depth': ['error', 4],
        'no-eq-null': 'off',
        'no-unused-expressions': 'off',
        'dot-notation': 'off',
        'use-isnan': 'error',
        'block-scoped-var': 'error',
        complexity: ['error', { max: 30 }],
        curly: ['error', 'multi-line'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'no-extra-bind': 'error',
        'no-implicit-coercion': 'error',
        'no-return-assign': 'off',
        'no-sequences': 'error',
        yoda: 'error',
        'no-restricted-globals': ['error', 'fdescribe', 'fit'],
        'arrow-parens': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: ['warn', { properties: 'never' }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { before: false, after: true }],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'keyword-spacing': ['error', { before: true, after: true }],
        'max-len': ['error', {
            code: 120,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignoreStrings: true,
            ignoreComments: true,
            ignorePattern: 'require',
        }],
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'object-curly-spacing': ['error', 'always'],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'as-needed', { numbers: true }],
        quotes: ['error', 'single', { avoidEscape: true }],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': 'error',
        'no-console': ['error', { allow: ['assert', 'error', 'warn'] }],
        'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'space-infix-ops': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'template-curly-spacing': 'off',
        indent: ['error', 4, {
            SwitchCase: 1,
            ignoredNodes: ['TemplateLiteral'],
        }],
        'no-var': 'error',
        'no-unused-vars': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'as-needed'],
        'prefer-const': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
};
