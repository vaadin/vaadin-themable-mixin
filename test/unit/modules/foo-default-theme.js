import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  /* This default style module should get overridden by foo-styles. Removing this module
  doesn't make any difference to the test outcome but it's here to make a point. */
  addThemeModule(
    `${prefix}-foo-default-theme`,
    `${prefix}-foo`,
    `
      [part="text"] {
        color: rgb(0, 0, 0) !important;
        background-color: rgb(255, 0, 0);
      }
    `,
  );
});
