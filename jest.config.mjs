/** @type {import('jest').Config} **/
const config = {
  verbose: true,
  preset: "ts-jest",
  testMatch: ["<rootDir>/**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  testTimeout: 10000,
  modulePathIgnorePatterns: ["/.serverless/", "/.turbo/", "/.husky/", "/.next/"],
  projects: [
    {
      displayName: "apps",
      testMatch: ["<rootDir>/apps/**/?(*.)+(spec|test).ts?(x)"],
      testEnvironment: "jsdom",
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
    {
      displayName: "apis",
      testMatch: ["<rootDir>/apis/**/?(*.)+(spec|test).ts?(x)"],
      testEnvironment: "node",
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
    {
      displayName: "packages",
      testMatch: ["<rootDir>/packages/**/?(*.)+(spec|test).ts?(x)"],
      testEnvironment: "node",
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
  ],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/apis/**", "<rootDir>/apps/**", "<rootDir>/packages/**"],
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/__tests__/",
    "jest.config.mjs",
    "next-env.d.ts",
    "next.config.mjs",
    "postcss.config.mjs",
    "serverless.ts",
    "tailwind.config.ts",
  ],
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
