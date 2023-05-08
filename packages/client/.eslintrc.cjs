module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@antfu/eslint-config-react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "no-tabs": "off",
    'no-mixed-spaces-and-tabs': 'off',
    "object-curly-newline": ["error", {
      "ImportDeclaration": {
        "multiline": true,
        "minProperties": 2
      },
      "ObjectExpression": {
        "multiline": true,
        "minProperties": 4
      },
      "ObjectPattern": {
        "multiline": true,
        "minProperties": 4
      }
    }]
  },
}
