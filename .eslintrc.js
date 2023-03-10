module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures : {
      jsx : false
    }
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'array-callback-return': ['error', { 'allowImplicit': true }],
    '@typescript-eslint/no-empty-interface': 'off',
    'eqeqeq': [1, 'always', { 'null': 'ignore' }],
    'no-else-return': [1, { 'allowElseIf': false }],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'semi': [2, 'never'],
    'keyword-spacing': ['error', { 'before': true }],
    'max-params': ['error', 3],
    'max-statements': ['off', 10],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-case-declarations': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
