module.exports = {
  extends: [
    '@open-wc/eslint-config',
    // Disable formatting rules; leave that to prettier
    'prettier',
  ],
  overrides: [
    // TypeScript
    {
      files: ['**/*.ts'],
      extends: [
        '@open-wc/eslint-config',
        // Fix 'Unable to resolve path to module' (https://github.com/benmosher/eslint-plugin-import#typescript)
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        // Enable TypeScript
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Disable formatting rules; leave that to prettier
        'prettier',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts'],
          },
        },
      },
      rules: {
        // Order members (fields-constructors-methods, static-instance-abstract, public-protected-private)
        // TODO: Sort methods alphabetically: https://github.com/typescript-eslint/typescript-eslint/pull/263
        '@typescript-eslint/member-ordering': 'error',
        // Not worth the repetitive boilerplate IMHO; implicit inferred return types are fine
        '@typescript-eslint/explicit-function-return-type': 'off',
        // @open-wc's JS based rule (always include extensions) conflicts with @typescript-eslint's TS based rule
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
          },
        ],
        // Not sure why this is not handled by @typescript-eslint/recommended already
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // I don't think it's wrong to assign values to properties of parameters
        'no-param-reassign': ['error', { props: false }],
        // This is annoying as LitElement provides desired scope when calling event listeners already
        '@typescript-eslint/unbound-method': 'off',
        // Given element life cycle it is common to work with optional properties which makes use of ! really convenient
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    // TypeScript for Node consumption
    {
      // Node JS build config and test files can use devDependencies
      files: ['*.js', '**/*.test.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
