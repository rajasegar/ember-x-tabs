import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tabs-pane-data', 'Integration | Component | x-tabs-pane-data', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-tabs-pane-data}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-tabs-pane-data}}
      template block text
    {{/x-tabs-pane-data}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
