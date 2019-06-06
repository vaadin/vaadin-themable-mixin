import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `${prefix}-baz-styles`,
    `${prefix}-baz`,
    `
      [part="text"] {
        width: 100px;
      }
    `,
  );
});
