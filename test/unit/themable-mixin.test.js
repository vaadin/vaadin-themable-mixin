import {fixture, html} from '@open-wc/testing-helpers';
import './polymer/index.js';
import './modules/index.js';

describe('themable mixin', () => {
  let wrapper, components;

  const getPart = idx => {
    return components[idx].shadowRoot.querySelector('#text');
  };

  describe(`injecting style modules (PolymerElement)`, () => {

    beforeEach(async() => {
      wrapper = await fixture(
        html`
          <div>
            <p3-foo></p3-foo>
            <p3-bar></p3-bar>
            <p3-baz></p3-baz>
            <p3-qux></p3-qux>
            <p3-own-dom-template></p3-own-dom-template>
            <p3-own-get-template></p3-own-get-template>
            <p3-style-override></p3-style-override>
          </div>
        `
      );
      components = Array.from(wrapper.children);
    });

    it('should inject simple module', function() {
      expect(window.getComputedStyle(getPart(0)).color).to.equal('rgb(255, 255, 255)');
    });

    it('should inject multiple style modules', function() {
      expect(window.getComputedStyle(getPart(0)).color).to.equal('rgb(255, 255, 255)');
      expect(window.getComputedStyle(getPart(0)).backgroundColor).to.equal('rgb(255, 0, 0)');
    });

    it('should inject to multiple components', function() {
      expect(window.getComputedStyle(getPart(0)).backgroundColor).to.equal('rgb(255, 0, 0)');
      expect(window.getComputedStyle(getPart(1)).backgroundColor).to.equal('rgb(255, 0, 0)');
    });

    it('should inject to subclassed components', function() {
      expect(window.getComputedStyle(getPart(2)).backgroundColor).to.equal('rgb(255, 0, 0)');
    });

    it('should inject to wildcard styles', function() {
      expect(window.getComputedStyle(getPart(0)).position).to.equal('static');
      expect(window.getComputedStyle(getPart(1)).position).to.equal('relative');
      expect(window.getComputedStyle(getPart(2)).position).to.equal('relative');
    });

    it('should override default value', function() {
      expect(window.getComputedStyle(components[0]).display).to.equal('flex');
    });

    it('should fall back to default styles', function() {
      expect(window.getComputedStyle(getPart(3)).color).to.equal('rgb(255, 0, 0)');
    });

    it('should work with themable parent', function() {
      expect(window.getComputedStyle(getPart(2)).width).to.equal('100px');
    });

    it('should not inherit parent themes to own dom-module template', function() {
      expect(window.getComputedStyle(getPart(4)).backgroundColor).not.to.equal('rgb(255, 0, 0)');
    });

    it('should not inherit parent themes to own static get template', function() {
      expect(window.getComputedStyle(getPart(5)).backgroundColor).not.to.equal('rgb(255, 0, 0)');
    });

    it('should override vaadin module styles', function() {
      expect(window.getComputedStyle(getPart(6)).color).to.equal('rgb(0, 0, 0)');
    });

    it('lumo should override vaadin module styles', function() {
      expect(window.getComputedStyle(getPart(6)).display).to.equal('inline');
    });

    it('material should override vaadin module styles', function() {
      expect(window.getComputedStyle(getPart(6)).opacity).to.equal('0.5');
    });

    it('should override lumo module styles', function() {
      expect(window.getComputedStyle(getPart(6)).color).to.equal('rgb(0, 0, 0)');
    });

    it('should override material module styles', function() {
      expect(window.getComputedStyle(getPart(6)).color).to.equal('rgb(0, 0, 0)');
    });

    it('should respect vaadin style module order', function() {
      expect(window.getComputedStyle(components[6]).display).to.equal('block');
    });

    it('should respect custom style module order', function() {
      expect(window.getComputedStyle(components[6]).position).to.equal('relative');
    });
  });
});
