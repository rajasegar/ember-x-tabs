import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x tab', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await render(hbs`
    {{#x-tab as |tab| }}
      {{!-- tab navigation --}}
      {{#x-tab/navigation}}
        {{#x-tab/nav-wrap paneId="home" tab=tab}}
          <i class="icon icon-home"></i>
          <span>Home</span>
        {{/x-tab/nav-wrap}}
        {{#x-tab/nav-wrap paneId="archive" tab=tab}}
          <i class="icon icon-box"></i>
          <span>Archive</span>
        {{/x-tab/nav-wrap}}
      {{/x-tab/navigation}}

      {{!-- tab content --}}
      <div class="content-wrap">
        {{#tab.pane elementId="home"}}
          <h1>Home</h1>
          <p>This is home content</p>
        {{/tab.pane}}

        {{#tab.pane elementId="archive"}}
          <h1>Archive</h1>
          <p>This is archive content</p>
        {{/tab.pane}}
      </div>
      <div id="activeId">{{tab.activeId}}</div>
      <div id="switch" onclick={{action tab.selectAction "archive"}}></div>
    {{/x-tab}}
  `);
  });

  function assertActiveTab(assert, tabIndex, active = true) {
    if (findAll('nav > ul >  li').length > 0) {
      assert.equal(this.element.querySelector(`nav > ul >  li:nth-child(${tabIndex + 1})`).classList.contains('tab-current'), active, active ? 'tab is active' : 'tab is inactive');
    }
    assert.equal(this.element.querySelector(`.content-wrap section:nth-child(${tabIndex + 1})`).classList.contains('content-current'), active, active ? 'tab pane is active' : 'tab pane is inactive');
  }


  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    assert.dom('section').exists({ count: 2 }, 'yields tab pane component');

    await click('#switch');

    assertActiveTab.call(this, assert, 0, false);
    assertActiveTab.call(this, assert, 1, true);
    assert.dom('#activeId').hasText('archive', 'yields activeId');

  });

  test('it generates tab navigation', function(assert) {
    assert.dom('nav').exists({ count: 1 }, 'has tabs navigation');
    assert.dom('nav > ul >  li').exists({ count: 2 }, 'has tabs navigation items');
    assert.dom('nav > ul >  li:nth-child(1) > a > span').hasText('Home', 'navigation item shows pane title');
    assert.dom('nav > ul >  li:nth-child(2) > a > span').hasText('Archive', 'navigation item shows pane title');
  });

  test('first tab is active by default', function(assert) {
    assertActiveTab.call(this, assert, 0, true);
    assertActiveTab.call(this, assert, 1, false);
  });
});
