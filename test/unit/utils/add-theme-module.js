import {DomModule} from '@polymer/polymer/lib/elements/dom-module.js';

export const addThemeModule = (id, themeFor, css) => {
  const styleElement = new DomModule();
  styleElement.innerHTML = `<template><style>${css}</style></template>`;
  styleElement.setAttribute('theme-for', themeFor);
  styleElement.register(id);
};
