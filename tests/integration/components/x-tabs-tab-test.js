import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tabs-tab', 'Integration | Component | x-tabs-tab', {
  integration: true
});

test('it renders', function(assert) {

  this.set('api', {
    selectAction: () => {}
  });

  this.render(hbs`{{x-tabs-tab api=api}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-tabs-tab api=api}}
      template block text
    {{/x-tabs-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
