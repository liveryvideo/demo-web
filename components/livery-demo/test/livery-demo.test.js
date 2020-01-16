import { html, fixture, expect } from '@open-wc/testing';

import '../livery-demo.js';

describe('LiveryDemo', () => {
  it('matches the snapshot', async () => {
    const el = await fixture(html`
      <livery-demo></livery-demo>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <livery-demo></livery-demo>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
