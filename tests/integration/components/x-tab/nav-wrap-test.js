import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x tab/nav wrap', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });


      let tab = {
          activeId: '1',
          selectAction: () => {}
      };
      this.set('tab', tab);

    await render(hbs`{{x-tab/nav-wrap tab=tab}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#x-tab/nav-wrap tab=tab}}
        template block text
      {{/x-tab/nav-wrap}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
