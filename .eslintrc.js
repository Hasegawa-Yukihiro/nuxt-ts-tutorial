module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    eqeqeq: 'error',
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
