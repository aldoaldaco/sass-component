import { html, LitElement } from 'lit-element';
import style from './sass-component-styles.js';

class SassComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
      <div class="system">
        <div class="sun"></div>
        <div class="ear-path"></div>
        <div class="ear"><div class="lune"></div></div>
        <div class="mar-path"></div>
        <div class="mar">
          <div class="pho"></div>
          <div class="dem"></div>
        </div>
      </div>
      `;
    }
}

window.customElements.define("sass-component", SassComponent);
