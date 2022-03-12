module.exports = {
  plugins: ["import"],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"],
      },
      "import/extensions": [".js", ".mjs", ".jsx"],
      "import/ignore": [
        "node_modules",
        "\\.(coffee|scss|css|less|hbs|svg|json)$",
      ],
    },
  },

  rules: {
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    'import/named': 'error',
    "import/default": "off",
    "import/export": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-extraneous-dependencies": 2,
    "import/first": 2,
    "import/no-duplicates": 2,
    "import/no-namespace": 2,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
      },
    ],
    "import/newline-after-import": 2,
    "import/no-named-default": 2,
    "import/order": [2, { "newlines-between": "always" }],
  },
};
