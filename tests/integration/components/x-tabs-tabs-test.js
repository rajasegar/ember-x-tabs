import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tabs-tabs', 'Integration | Component | x-tabs-tabs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-tabs-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-tabs-tabs}}
      template block text
    {{/x-tabs-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
