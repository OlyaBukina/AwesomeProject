module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:node/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-inline-styles': 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
  },
};
