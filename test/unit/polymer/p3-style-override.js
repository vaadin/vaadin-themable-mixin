import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ThemableMixin} from '../../../vaadin-themable-mixin.js';

class P3StyleOverride extends ThemableMixin(PolymerElement) {
  static get is() {
    return 'p3-style-override';
  }

  static get template() {
    return html`
      <div part="text" id="text">text</div>
    `;
  }
}

customElements.define(P3StyleOverride.is, P3StyleOverride);
