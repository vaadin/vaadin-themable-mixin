import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `material-${prefix}-style-override`,
    `${prefix}-style-override`,
    `
      [part="text"] {
        color: rgb(0, 255, 0);
        opacity: 0.5;
      }
    `,
  );
});
