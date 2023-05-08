import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

import { create, text } from "ember-cli-page-object";

const page = create({
  text: text(),
});

module("Integration | Component | x-tabs-tab", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    this.api = {
      selectAction: () => {},
    };

    await render(hbs`<XTabsTab @api={{this.api}} />`);

    assert.equal(page.text, "");

    // Template block usage:
    await render(hbs`
      <XTabsTab @api={{this.api}}>
        template block text
      </XTabsTab>
    `);

    assert.equal(page.text, "template block text");
  });
});
