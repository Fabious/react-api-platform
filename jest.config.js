module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  testRegex: 'test.(js|ts|tsx)$',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  moduleNameMapper: {
    'react-api-platform': '<rootDir>/src/index.ts',
  },

  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}', 'tests/**/*.{js,ts,tsx}'],
  coverageReporters: ['json', 'html', 'text', 'text-summary'],
}
