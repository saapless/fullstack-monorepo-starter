import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "../../eslint.config.mjs";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "prettier"],
  }),
];

export default eslintConfig;
