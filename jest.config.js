const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './'
})

const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^@components/(.*)$': '<rootDir>/src/components/$1',
  '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
  '^@consts/(.*)$': '<rootDir>/src/consts/$1',
  '^@icons/(.*)$': '<rootDir>/src/icons/$1',
  '^@styles/(.*)$': '<rootDir>/src/styles/$1',
  '^@api/(.*)$': '<rootDir>/src/api/$1',
  '^@assets/(.*)$': '<rootDir>/public/$1'
}

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper,
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}

module.exports = createJestConfig(config)
