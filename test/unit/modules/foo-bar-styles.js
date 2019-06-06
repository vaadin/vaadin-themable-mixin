import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `${prefix}-foo-bar-styles`,
    `${prefix}-foo ${prefix}-bar`,
    `
      [part="text"] {
        background-color: rgb(255, 0, 0);
      }
    `,
  );
});
