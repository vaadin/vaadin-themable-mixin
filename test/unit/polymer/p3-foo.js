import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ThemableMixin} from '../../../vaadin-themable-mixin.js';

class P3Foo extends ThemableMixin(PolymerElement) {
  static get is() {
    return 'p3-foo';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div part="text" id="text">text</div>
    `;
  }
}

customElements.define(P3Foo.is, P3Foo);

export {P3Foo};
