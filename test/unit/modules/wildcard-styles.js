import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `${prefix}-wildcard-styles`,
    `${prefix}-*a*`,
    `
      [part="text"] {
        position: relative;
      }
    `,
  );
});
