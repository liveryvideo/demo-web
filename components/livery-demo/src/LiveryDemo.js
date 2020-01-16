import { LitElement, html, css } from 'lit-element';

export class LiveryDemo extends LitElement {
  static get properties() {
    return {
      foo: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.foo = 'Foo';
  }

  render() {
    return html`
      ${this.foo}
    `;
  }
}
