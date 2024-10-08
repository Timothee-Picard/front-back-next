/**
 * @type {import('jest').Config}
 */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],

  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: true,
    }],
  },

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },

  // Active la collecte de couverture
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
};

module.exports = config;
