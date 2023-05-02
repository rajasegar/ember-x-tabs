import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, settled } from "@ember/test-helpers";
import { set } from "@ember/object";
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

  hooks.beforeEach(async function () {
    this.homeTab = 0;
    this.homeName = "home";
    this.archiveTab = 1;
    this.archiveName = 'archive';
  });

  async function renderTabs() {
    await render(hbs`
    <XTabs @activeName={{this.activeTabName}} @tab-style={{tabStyle}} as | xt | >

    {{!-- tab content --}}
      <xt.tabs as | tabs |>
        <tabs.tab @name={{this.homeName}}>
          <i class="icon icon-home"></i>
          <span>Home</span>
        </tabs.tab>
        <tabs.tab @name={{this.archiveName}}>
          <i class="icon icon-box"></i>
          <span>Archive</span>
        </tabs.tab>
      </xt.tabs>

      {{!-- tab content --}}
      <xt.panes as | panes |>
        <panes.pane @name={{this.homeName}}>
          <h1>Home</h1>
          <p>This is home content</p>
        </panes.pane>
        <panes.pane @name={{this.archiveName}}>
          <h1>Archive</h1>
          <p>This is archive content</p>
        </panes.pane>
      </xt.panes>
      <div id="activeName">{{xt.activeName}}</div>
      <div id="switch" {{on "click" (fn xt.api.selectAction this.archiveName)}}></div>
    </XTabs>
  `);
  }

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

  test("it generates tab navigation", async function (assert) {
    await renderTabs();

    assert.equal(page.navCount, 1, "has tabs navigation");
    assert.equal(page.tabs.length, 2, "has tabs navigation items");
    assert.equal(
      page.tabs.objectAt(this.homeTab).text,
      "Home",
      "navigation item shows pane title"
    );
    assert.equal(
      page.tabs.objectAt(this.archiveTab).text,
      "Archive",
      "navigation item shows pane title"
    );
  });

  test("first tab is active by default", async function (assert) {
    await renderTabs();

    assertActiveTab(assert, this.homeTab);
    assertInActiveTab(assert, this.archiveTab);
  });

  test("Selecting a tab displays correct pane", async function (assert) {
    await renderTabs();
    await page.switchClick();

    assertInActiveTab(assert, this.homeTab);
    assertActiveTab(assert, this.archiveTab);
  });

  test("Can set tab via activeName", async function (assert) {
    this.activeTabName = this.archiveName;

    await renderTabs();

    await settled();

    assertInActiveTab(assert, this.homeTab);
    assertActiveTab(assert, this.archiveTab);
  });

});
