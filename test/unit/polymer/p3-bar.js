import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ThemableMixin} from '../../../vaadin-themable-mixin.js';

class P3Bar extends ThemableMixin(PolymerElement) {
  static get is() {
    return 'p3-bar';
  }

  static get template() {
    return html`
      <div part="text" id="text">text</div>
    `;
  }
}

customElements.define(P3Bar.is, P3Bar);

export {P3Bar};
