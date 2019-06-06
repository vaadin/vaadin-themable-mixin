import {fixture, html} from '@open-wc/testing-helpers';

import './polymer/p3-theme-host.js';

describe('theme-property mixin', () => {
  let host, target;

  describe('by default', () => {
    beforeEach(async() => {
      host = await fixture(html`<p3-theme-host></p3-theme-host>`);
      target = host.shadowRoot.querySelector('theme-target');
    });

    it('should have undefined theme property on host', () => {
      expect(host.theme).to.be.undefined;
    });

    it('should have null theme attribute on target', () => {
      expect(target.getAttribute('theme')).to.be.null;
    });

    it('should propagate host attribute to target attribute', () => {
      host.setAttribute('theme', 'foo');
      expect(target.getAttribute('theme')).to.equal('foo');
    });

    it('should not propagate host property to target attribute', () => {
      host.theme = 'foo';
      expect(target.getAttribute('theme')).to.be.null;
    });
  });

  describe('with initial value', () => {
    beforeEach(async() => {
      host = await fixture(html`<p3-theme-host theme="initial"></p3-theme-host>`);
      target = host.shadowRoot.querySelector('theme-target');
    });

    it('should have initial theme property on host', () => {
      expect(host.theme).to.equal('initial');
    });

    it('should have null theme attribute on target', () => {
      expect(target.getAttribute('theme')).to.equal('initial');
    });

    it('should propagate host attribute to target attribute', () => {
      host.setAttribute('theme', 'foo');
      expect(target.getAttribute('theme')).to.equal('foo');
    });

    it('should not propagate host property to target attribute', () => {
      host.theme = 'foo';
      expect(target.getAttribute('theme')).to.equal('initial');
    });

    it('should support unsetting target attribute from host', () => {
      host.removeAttribute('theme');
      expect(target.getAttribute('theme')).to.be.null;
    });
  });
});
