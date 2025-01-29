// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import configPrettier from "eslint-config-prettier";
import pluginTurbo from "eslint-plugin-turbo";
// @ts-expect-error
import pluginImport from "eslint-plugin-import";

import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config(
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      pluginImport.flatConfigs.typescript,
      pluginImport.flatConfigs.recommended,
    ],
    plugins: {
      turbo: pluginTurbo,
    },
    languageOptions: {
      ecmaVersion: "latest",
      parser: tseslint.parser,
      parserOptions: {
        project: [
          path.join(__dirname, "tsconfig.json"),
          path.join(__dirname, "apps/*/tsconfig.json"),
          path.join(__dirname, "apis/*/tsconfig.json"),
          path.join(__dirname, "packages/*/tsconfig.json"),
        ],
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [
            "./tsconfig.json",
            "./apps/*/tsconfig.json",
            "./apis/*/tsconfig.json",
            "./packages/*/tsconfig.json",
          ],
        },
      },
    },
    rules: {
      "import/order": [
        1,
        {
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
        },
      ],
    },
  },
  configPrettier,
  {
    files: ["**/*.(spec|test).(ts|tsx|js|jsx)$"],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
  }
);
