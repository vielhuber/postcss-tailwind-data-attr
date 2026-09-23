import loguxConfig from '@logux/eslint-config'
import jest from 'eslint-plugin-jest'

export default [
  ...loguxConfig,
  {
    files: ['*.js'],
    languageOptions: { sourceType: 'commonjs' }
  },
  {
    ...jest.configs['flat/recommended'],
    files: ['*.test.js']
  }
]
