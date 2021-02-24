export {ThemePropertyMixin};

declare function ThemePropertyMixin<T extends new (...args: any[]) => {}>(base: T): T & ThemePropertyMixinConstructor;

interface ThemePropertyMixinConstructor {
  new(...args: any[]): ThemePropertyMixin;
}

export {ThemePropertyMixinConstructor};

interface ThemePropertyMixin {

  /**
   * Helper property with theme attribute value facilitating propagation
   * in shadow DOM.
   *
   * Enables the component implementation to propagate the `theme`
   * attribute value to the subcomponents in Shadow DOM by binding
   * the subcomponent’s "theme" attribute to the `theme` property of
   * the host.
   *
   * **NOTE:** Extending the mixin only provides the property for binding,
   * and does not make the propagation alone.
   *
   * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
   * page for more information.
   */
  readonly theme: string|null|undefined;
  attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
}
