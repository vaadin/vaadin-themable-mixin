import {DomModule} from '@polymer/polymer/lib/elements/dom-module.js';
import {P3Foo} from './p3-foo.js';

const domModule = document.createElement('dom-module');
domModule.innerHTML = `
  <template>
    <div part="text" id="text">text</div>
  </template>
`;
document.body.appendChild(domModule);
domModule.id = 'p3-own-dom-template';

domModule.register();

class P3OwnDomTemplate extends P3Foo {
  static get is() {
    return domModule.id;
  }

  static get template() {
    return DomModule.import(this.is, 'template');
  }
}

customElements.define(P3OwnDomTemplate.is, P3OwnDomTemplate);

