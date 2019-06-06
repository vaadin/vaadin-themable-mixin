import {P3Bar} from './p3-bar.js';

class P3Baz extends P3Bar {
  static get is() {
    return 'p3-baz';
  }
}

customElements.define(P3Baz.is, P3Baz);
