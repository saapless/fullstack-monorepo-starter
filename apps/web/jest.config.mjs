import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} **/

const config = createJestConfig({
  rootDir: "./",
  testMatch: ["<rootDir>/__tests__/?(*.)+(spec|test).ts?(x)"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
});

export default config;
