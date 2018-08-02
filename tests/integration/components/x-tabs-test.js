import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tabs', 'Integration | Component | x-tabs', {
  integration: true,
  beforeEach: function() {
    this.render(hbs`
    {{#x-tabs tab-style=tabStyle as | xt | }}
    
    {{!-- tab content --}}
      {{#xt.tabs as | tabs |}}
        {{#tabs.tab name="home"}}
          <i class="icon icon-home"></i>
          <span>Home</span>
        {{/tabs.tab}}
        {{#tabs.tab name="archive"}}
          <i class="icon icon-box"></i>
          <span>Archive</span>
        {{/tabs.tab}}
      {{/xt.tabs}}
    
      {{!-- tab content --}}
      {{#xt.panes as | panes |}}
        {{#panes.pane name="home"}}
          <h1>Home</h1>
          <p>This is home content</p>
        {{/panes.pane}}
        {{#panes.pane name="archive"}}
          <h1>Archive</h1>
          <p>This is archive content</p>
        {{/panes.pane}}
      {{/xt.panes}}
      <div id="activeName">{{xt.activeName}}</div>
      <div id="switch" onclick={{action xt.api.selectAction "archive"}}></div>
    {{/x-tabs}}
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

