/*eslint-env commonjs */
module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            esmodules: true,
          },
          modules: isTest ? 'auto' : false,
        },
      ],
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: ['@vanilla-extract/babel-plugin'],
  };
};
