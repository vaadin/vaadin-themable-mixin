import {addThemeModule} from '../utils/add-theme-module.js';

['p3'].forEach(prefix => {
  /* This default style module should get overridden by test-foo styles. Removing this module
  doesn't make any difference to the test outcome but it's here to make a point. */
  addThemeModule(
    `${prefix}-qux-default-theme`,
    `${prefix}-qux`,
    `
      [part="text"] {
        color: rgb(255, 0, 0);
      }
    `,
  );
});
