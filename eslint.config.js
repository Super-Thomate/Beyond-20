// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        // Globals injectées par le core FoundryVTT
        game: "readonly",
        CONFIG: "readonly",
        Hooks: "readonly",
        ui: "readonly",
        canvas: "readonly",
        foundry: "readonly",
        Actor: "readonly",
        Item: "readonly",
        ChatMessage: "readonly",
        Dialog: "readonly",
        Application: "readonly",
        FormApplication: "readonly",
        DialogV2: "readonly",
        renderTemplate: "readonly",
        loadTemplates: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
