import { LitElement, html, css, property } from 'lit-element';

export class LiveryDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String })
  foo = 'Foo';

  render() {
    return html`
      ${this.foo}
    `;
  }
}
