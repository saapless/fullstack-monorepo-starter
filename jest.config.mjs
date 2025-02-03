/** @type {import('jest').Config} **/

const config = {
  verbose: true,
  testTimeout: 10000,
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "node",
  projects: ["<rootDir>/packages/*", "<rootDir>/apps/*", "<rootDir>/apis/*"],
  collectCoverageFrom: [
    "<rootDir>/apis/**/src/**",
    "<rootDir>/apps/**/src/**",
    "<rootDir>/packages/**/src/**",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/__tests__/", "/.next/"],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
