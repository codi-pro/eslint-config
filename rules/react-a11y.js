module.exports = {
  plugins: ["jsx-a11y"],

  rules: {
    "jsx-a11y/accessible-emoji": "off",
    "jsx-a11y/alt-text": [
      "error",
      {
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    "jsx-a11y/anchor-has-content": ["error", { components: [] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/autocomplete-valid": [
      "off",
      {
        inputComponents: [],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        labelAttributes: ["label"],
        controlComponents: [],
        ignoreElements: [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video",
        ],
        ignoreRoles: [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid",
        ],
        depth: 5,
      },
    ],
    "jsx-a11y/heading-has-content": ["error", { components: [""] }],
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
  },
};
