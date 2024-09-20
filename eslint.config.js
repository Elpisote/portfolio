import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Règles générales ESLint
      "no-console": "warn", // Avertir si `console.log` est utilisé
      "no-unused-vars": "error", // Erreur pour les variables inutilisées
      "react/no-unescaped-entities": 0,
      // Règles React spécifiques
      "react/jsx-uses-react": "off", // Désactiver car React 17+ n'exige plus l'import de `React`
      "react/react-in-jsx-scope": "off", // Même raison, pas besoin de `React` dans l'espace de portée
    },
  },
  ...tailwind.configs["flat/recommended"],
];
