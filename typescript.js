module.exports = {
  extends: [
    './rules/base',
    './rules/react',
    './rules/react-a11y',
    './rules/import',
    './rules/typescript',
  ].map(require.resolve),
  rules: {}
};
