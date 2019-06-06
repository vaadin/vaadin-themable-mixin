import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `${prefix}-custom-style-override-first`,
    `${prefix}-style-override`,
    `
      :host {
        position: absolute;
      }

      [part="text"] {
        color: rgb(0, 0, 0);
      }
    `,
  );
});
