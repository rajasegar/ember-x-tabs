import { moduleForComponent, test } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tab/pane', 'Integration | Component | x tab/pane', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-tab/pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-tab/pane}}
      template block text
    {{/x-tab/pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
