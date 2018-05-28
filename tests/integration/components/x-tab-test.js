import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tab', 'Integration | Component | x tab', {
  integration: true,
  beforeEach: function() {
    this.render(hbs`
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
  }

});

function assertActiveTab(assert, tabIndex, active = true) {
  if (this.$('nav > ul >  li').length > 0) {
    assert.equal(this.$(`nav > ul >  li:nth-child(${tabIndex + 1})`)[0].classList.contains('tab-current'), active, active ? 'tab is active' : 'tab is inactive');
  }
  assert.equal(this.$(`.content-wrap section:nth-child(${tabIndex + 1})`)[0].classList.contains('content-current'), active, active ? 'tab pane is active' : 'tab pane is inactive');
}


test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  assert.equal(this.$('section').length, 2, 'yields tab pane component');

  this.$('#switch').click();

  assertActiveTab.call(this, assert, 0, false);
  assertActiveTab.call(this, assert, 1, true);
  assert.equal(this.$('#activeId').text().trim(), 'archive', 'yields activeId');

});

test('it generates tab navigation', function(assert) {
  assert.equal(this.$('nav').length, 1, 'has tabs navigation');
  assert.equal(this.$('nav > ul >  li').length, 2, 'has tabs navigation items');
  assert.equal(this.$('nav > ul >  li:nth-child(1) > a > span').text().trim(), 'Home', 'navigation item shows pane title');
  assert.equal(this.$('nav > ul >  li:nth-child(2) > a > span').text().trim(), 'Archive', 'navigation item shows pane title');
});

test('first tab is active by default', function(assert) {
  assertActiveTab.call(this, assert, 0, true);
  assertActiveTab.call(this, assert, 1, false);
});

