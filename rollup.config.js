import { createSpaConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
import cpy from 'rollup-plugin-cpy';

const config = createSpaConfig({
  // This was resulting in issues when loading /assets/interactive.html with it returning index.html instead
  // injectServiceWorker: true,
});

export default merge(config, {
  input: './index.html',
  plugins: [
    cpy({
      files: ['assets/**/*'],
      dest: 'dist',
      options: { parents: true },
    }),
  ],
});
