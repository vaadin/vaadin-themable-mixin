import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  addThemeModule(
    `vaadin-${prefix}-style-override-second`,
    `${prefix}-style-override`,
    `
      :host {
        display: block;
      }

      [part="text"] {
        color: rgb(255, 255, 255);
        opacity: 1;
        display: block;
      }
    `,
  );
});
