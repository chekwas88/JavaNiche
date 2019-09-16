module.exports = {
  preset: 'jest-expo',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-)?react-native||react-navigation)',
    '<rootDir>/assets/img'
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg)$': '<rootDir>/mocks/fileMock.js'
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!App.js',
    '!jest.config.js',
    '!**/babel.config.js',
    '!**/coverage/**',
    '!**/_tests_/**'
  ]
};
