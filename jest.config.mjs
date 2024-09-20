/** @type {import('jest').Config} **/
const config = {
  verbose: true,
  preset: "ts-jest",
  projects: ["<rootDir>/apis/*", "<rootDir>/apps/*", "<rootDir>/packages/*"],
  testMatch: ["<rootDir>/**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  testTimeout: 10000,
};

export default config;
