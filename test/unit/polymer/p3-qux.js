import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ThemableMixin} from '../../../vaadin-themable-mixin.js';

class P3TestQux extends ThemableMixin(PolymerElement) {
  static get is() {
    return 'p3-qux';
  }

  static get template() {
    return html`
      <div part="text" id="text">text</div>
    `;
  }
}

customElements.define(P3TestQux.is, P3TestQux);
