import {DomModule} from '@polymer/polymer/lib/elements/dom-module.js';

import {ThemePropertyMixin} from './vaadin-theme-property-mixin.js';

export {ThemableMixin};

declare function ThemableMixin<T extends new (...args: any[]) => {}>(base: T): T & ThemableMixinConstructor & ThemePropertyMixinConstructor;

import {ThemePropertyMixinConstructor} from './vaadin-theme-property-mixin.js';

interface ThemableMixinConstructor {
  new(...args: any[]): ThemableMixin;
  finalize(): void;
}

export {ThemableMixinConstructor};

interface ThemableMixin extends ThemePropertyMixin {
}
