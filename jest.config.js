module.exports = {
  globals: {
    __TS_CONFIG__: {
      target: 'es6',
      module: 'commonjs',
      moduleResolution: 'node'
    },
    'ts-jest': {
      tsConfigFile: 'src/tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',
  transform: {
    '^.+\\.(ts|html)$':
      '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  collectCoverageFrom: [
    'src/app/module/**/*.{ts}',
    '!src/app/*.{ts}',
    '!src/app/**/*.{js}',
    '!src/app/environment/*.{ts}',
    '!src/app/language/*.{ts}',
    '!src/app/**/*.module.{ts}',
    '!src/app/**/*.interface.{ts}',
    '!src/app/**/*.state.{ts}',
    '!src/app/**/*.entity.{ts}'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
    'environments/(.*)': '<rootDir>/src/environments/$1',
    '@auth/(.*)': '<rootDir>/src/app/auth/$1',
    '@admin/(.*)': '<rootDir>/src/app/admin/$1',
    '@services/(.*)': '<rootDir>/src/app/services/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@testing/(.*)': '<rootDir>/src/app/testing/$1',
    '@common/(.*)': '<rootDir>/src/app/common/$1'
  }
};
