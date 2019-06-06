import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `${prefix}-custom-style-override-second`,
    `${prefix}-style-override`,
    `
      :host {
        position: relative;
      }
    `,
  );
});
