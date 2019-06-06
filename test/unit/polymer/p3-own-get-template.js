import {html} from '@polymer/polymer/polymer-element.js';
import {P3Foo} from './p3-foo.js';

class P3OwnGetTemplate extends P3Foo {
  static get is() {
    return 'p3-own-get-template';
  }

  static get template() {
    return html`
      <div part="text" id="text">text</div>
    `;
  }
}

customElements.define(P3OwnGetTemplate.is, P3OwnGetTemplate);

