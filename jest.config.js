const config = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
        jsxFactory: 'React.createElement',
      },
    },
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'redux-persist/es/storage': '<rootDir>/node_modules/redux-persist/lib/storage',
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],


  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',


  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e/'],
};


module.exports = config
