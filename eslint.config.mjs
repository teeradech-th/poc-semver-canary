import globals from "globals";
import js from "@eslint/js";
import json from "@eslint/json";
import path from "path"
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc"
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default defineConfig([
  ...compat.config({
    extends: ['prettier']
  }),
  ...compat.plugins("prettier"),
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  tseslint.configs.recommended,
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
]);
