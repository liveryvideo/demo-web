const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep
            ? config.grep
            : 'build/components/*/test/**/*.test.js',
          type: 'module',
        },
      ],

      esm: {
        nodeResolve: true,
      },

      // you can overwrite/extend the config further

      // TODO: Write more tests and remove these overrides to return back to requiring 80% coverage
      coverageIstanbulReporter: {
        thresholds: {
          global: {
            statements: 10,
            lines: 10,
            branches: 10,
            functions: 10,
          },
        },
      },
    }),
  );
  return config;
};
