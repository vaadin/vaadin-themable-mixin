import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `lumo-${prefix}-style-override`,
    `${prefix}-style-override`,
    `
      [part="text"] {
        color: rgb(255, 0, 0);
        display: inline;
      }
    `,
  );
});
