import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render } from '@ember/test-helpers';

import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x tab/pane', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{x-tab/pane}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#x-tab/pane}}
        template block text
      {{/x-tab/pane}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
