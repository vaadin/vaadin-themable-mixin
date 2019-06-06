import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `vaadin-${prefix}-style-override-first`,
    `${prefix}-style-override`,
    `
      :host {
        display: flex;
      }
    `,
  );
});
