import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "!src/components/__tests__/**",
    "!src/**/*.d.ts",
  ],

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
