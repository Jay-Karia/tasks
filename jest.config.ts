import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "/node_modules/(?!next-auth).+\\.js$"
  ]

}

export default createJestConfig(config)