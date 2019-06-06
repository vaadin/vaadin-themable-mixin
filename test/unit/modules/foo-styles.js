import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `${prefix}-foo-styles`,
    `${prefix}-foo`,
    `
      :host {
        display: flex;
      }

      [part="text"] {
        color: rgb(255, 255, 255);
      }
    `,
  );
});
