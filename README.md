# codi.pro eslint config

## Install

```
$ npx install-peerdeps --dev @codi.pro/eslint-config
```

## Usage

Create a `.eslintrc.js` file with the following contents:

```js
{
  "extends": "@codi.pro/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

For **typescript** you can use `typescript.js`

```js
{
  "extends": "@codi.pro/eslint-config/typescript",
  "rules": {
    // Additional, per-project rules...
  }
}

```