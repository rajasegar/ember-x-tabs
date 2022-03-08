import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

import {
  create,
  text,
  clickable,
  count,
  collection,
  hasClass,
} from "ember-cli-page-object";

const page = create({
  text: text(),
  switchClick: clickable("#switch"),
  sectionCount: count("section"),
  tabs: collection("nav > ul > li", {
    text: text("a > span"),
    isCurrentTab: hasClass("tab-current", ""),
  }),
  content: collection(".content-wrap > section", {
    isCurrentContent: hasClass("content-current"),
  }),

  navCount: count("nav"),
});

module("Integration | Component | x-tabs", function (hooks) {
  setupRenderingTest(hooks);

  const homeTab = 0,
    archiveTab = 1;

  hooks.beforeEach(async function () {
    await render(hbs`
    {{#x-tabs tab-style=tabStyle as | xt | }}

    {{!-- tab content --}}
      {{#xt.tabs as | tabs |}}
        {{#tabs.tab name="home"}}
          <i class="icon icon-home"></i>
          <span>Home</span>
        {{/tabs.tab}}
        {{#tabs.tab name="archive"}}
          <i class="icon icon-box"></i>
          <span>Archive</span>
        {{/tabs.tab}}
      {{/xt.tabs}}

      {{!-- tab content --}}
      {{#xt.panes as | panes |}}
        {{#panes.pane name="home"}}
          <h1>Home</h1>
          <p>This is home content</p>
        {{/panes.pane}}
        {{#panes.pane name="archive"}}
          <h1>Archive</h1>
          <p>This is archive content</p>
        {{/panes.pane}}
      {{/xt.panes}}
      <div id="activeName">{{xt.activeName}}</div>
      <div id="switch" onclick={{action xt.api.selectAction "archive"}}></div>
    {{/x-tabs}}
  `);
  });

  function assertActiveTab(assert, tabIndex) {
    assert.ok(page.tabs.objectAt(tabIndex).isCurrentTab, "tab is active");
    assert.ok(
      page.content.objectAt(tabIndex).isCurrentContent,
      "tab pane is active"
    );
  }

  function assertInActiveTab(assert, tabIndex) {
    assert.notOk(page.tabs.objectAt(tabIndex).isCurrentTab, "tab is inactive");
    assert.notOk(
      page.content.objectAt(tabIndex).isCurrentContent,
      "tab pane is inactive"
    );
  }

  test("it generates tab navigation", function (assert) {
    assert.equal(page.navCount, 1, "has tabs navigation");
    assert.equal(page.tabs.length, 2, "has tabs navigation items");
    assert.equal(
      page.tabs.objectAt(homeTab).text,
      "Home",
      "navigation item shows pane title"
    );
    assert.equal(
      page.tabs.objectAt(archiveTab).text,
      "Archive",
      "navigation item shows pane title"
    );
  });

  test("first tab is active by default", function (assert) {
    assertActiveTab(assert, homeTab);
    assertInActiveTab(assert, archiveTab);
  });

  test("Selecting a tab displays correct pane", async function (assert) {
    await page.switchClick();

    assertInActiveTab(assert, homeTab);
    assertActiveTab(assert, archiveTab);
  });
});
