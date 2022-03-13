module.exports = {
  plugins: ["react", "react-hooks"],

  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },

  rules: {
    "jsx-quotes": [2, "prefer-double"],
    "react/forbid-prop-types": [2, { forbid: ["any", "array", "object"] }],
    "react/no-access-state-in-setstate": 2,
    "react/no-children-prop": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-typos": 2,
    "react/no-string-refs": 2,
    "react/no-will-update-set-state": 2,
    "react/prop-types": [2, {}],
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [
      2,
      {
        order: [
          "static-methods",
          "lifecycle",
          "everything-else",
          "/^render.+$/",
          "render",
        ],
      },
    ],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-props-no-spreading": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-bind": [2, { ignoreRefs: true }],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": "error",
  },
};
