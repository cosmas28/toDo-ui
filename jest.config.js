module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'jest.tsconfig.json',
      babelConfig: true,
    },
  },
  collectCoverageFrom: [
    '**/*.tsx',
    '**/*.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/.history/**',
    '!**/pages/_app.tsx',
    '!**/stores/index.ts',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js', '.next', '.history'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['html', 'json', 'lcov', 'text'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};
