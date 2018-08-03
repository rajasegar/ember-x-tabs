import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x tab/nav item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

      this.set('externalAction', () => {
          assert.equal(true, true);
      });

    await render(hbs`{{x-tab/nav-item selectAction=(action externalAction)}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#x-tab/nav-item selectAction=(action externalAction)}}
        template block text
      {{/x-tab/nav-item}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
