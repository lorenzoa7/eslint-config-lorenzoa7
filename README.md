# Lorenzoa7 ESLint Config

## What is included in this package?

- Standard config
- React plugin
- React Hooks plugin
- Prettier for ESLint

## Setup

Install dependencies:
```
npm i -D eslint @lorenzoa7/eslint-config
```
Inside `.eslintrc.json`:
```
{
  "extends": [
    "@lorenzoa7/eslint-config", 
    "next/core-web-vitals"
  ]
}
```