// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:security/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
