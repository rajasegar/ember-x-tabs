import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tab/nav-wrap', 'Integration | Component | x tab/nav wrap', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


    let tab = {
        activeId: '1',
        selectAction: () => {}
    };
    this.set('tab', tab);

  this.render(hbs`{{x-tab/nav-wrap tab=tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-tab/nav-wrap tab=tab}}
      template block text
    {{/x-tab/nav-wrap}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
