import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";

import { render } from "@ember/test-helpers";

import hbs from "htmlbars-inline-precompile";

import { create, text } from "ember-cli-page-object";

const page = create({
  text: text(),
});

module("Integration | Component | x-tabs-pane", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`<XTabsPane />`);

    assert.equal(page.text, "");

    // Template block usage:
    await render(hbs`
      <XTabsPane>
        template block text
      </XTabsPane>
    `);

    assert.equal(page.text, "template block text");
  });
});
