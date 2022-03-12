module.exports = {
  extends: [
    './rules/base',
    './rules/react',
    './rules/react-a11y',
    './rules/import',
  ].map(require.resolve),
  rules: {}
};
