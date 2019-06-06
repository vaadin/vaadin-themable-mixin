import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ThemePropertyMixin} from '../../../vaadin-theme-property-mixin.js';

class P3ThemeHost extends ThemePropertyMixin(PolymerElement) {
  static get is() {
    return 'p3-theme-host';
  }

  static get template() {
    return html`
      <theme-target theme$="[[theme]]"></theme-target>
    `;
  }
}

customElements.define(P3ThemeHost.is, P3ThemeHost);
