module.exports = {
  root: true,

  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-unsafe-assignment": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  }
}
