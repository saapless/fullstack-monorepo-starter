import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('@jest/types')} **/

const config = {
  rootDir: "./",
  verbose: true,
  testMatch: ["<rootDir>/__tests__/?(*.)+(spec|test).ts?(x)"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
