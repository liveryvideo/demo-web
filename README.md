# Livery Demo

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)
[![CircleCI](https://circleci.com/gh/exmg/livery-demo.svg?style=svg)](https://circleci.com/gh/exmg/livery-demo)

Demo use of Ex Machina Group Livery Web SDK ([@exmg/livery](https://www.npmjs.com/package/@exmg/livery)).

## Scripts

- `watch` compiles TypeScript and outputs JavaScript to `build` directory, updating on file changes
- `start` runs app for development, reloading on file changes
- `start:build` runs app from `dist` directory, generated by `build`
- `build` cleans and then builds app completely and outputs it to `dist` directory
- `clean` removes `build` and `dist` directories
- `test` runs tests using Karma
- `lint` lints code using eslint and Prettier
- `format` formats code using eslint and Prettier

There also some more specialized scripts like `lint:eslint` and `test:watch`.
Please see `package.json` for a complete list.
