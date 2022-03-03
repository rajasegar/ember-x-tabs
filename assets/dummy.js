'use strict';



;define("dummy/app", ["exports", "dummy/resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("dummy/components/tab-example", ["exports", "dummy/templates/components/tab-example"], function (_exports, _tabExample) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _tabExample.default
  });

  _exports.default = _default;
});
;define("dummy/components/x-tab", ["exports", "ember-x-tabs/components/x-tab"], function (_exports, _xTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTab.default;
    }
  });
});
;define("dummy/components/x-tab/nav-item", ["exports", "ember-x-tabs/components/x-tab/nav-item"], function (_exports, _navItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _navItem.default;
    }
  });
});
;define("dummy/components/x-tab/nav-wrap", ["exports", "ember-x-tabs/components/x-tab/nav-wrap"], function (_exports, _navWrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _navWrap.default;
    }
  });
});
;define("dummy/components/x-tab/navigation", ["exports", "ember-x-tabs/components/x-tab/navigation"], function (_exports, _navigation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _navigation.default;
    }
  });
});
;define("dummy/components/x-tab/pane", ["exports", "ember-x-tabs/components/x-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pane.default;
    }
  });
});
;define("dummy/components/x-tabs-pane-data", ["exports", "ember-x-tabs/components/x-tabs-pane-data"], function (_exports, _xTabsPaneData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTabsPaneData.default;
    }
  });
});
;define("dummy/components/x-tabs-pane", ["exports", "ember-x-tabs/components/x-tabs-pane"], function (_exports, _xTabsPane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTabsPane.default;
    }
  });
});
;define("dummy/components/x-tabs-panes", ["exports", "ember-x-tabs/components/x-tabs-panes"], function (_exports, _xTabsPanes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTabsPanes.default;
    }
  });
});
;define("dummy/components/x-tabs-tab", ["exports", "ember-x-tabs/components/x-tabs-tab"], function (_exports, _xTabsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTabsTab.default;
    }
  });
});
;define("dummy/components/x-tabs-tabs", ["exports", "ember-x-tabs/components/x-tabs-tabs"], function (_exports, _xTabsTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTabsTabs.default;
    }
  });
});
;define("dummy/components/x-tabs", ["exports", "ember-x-tabs/components/x-tabs"], function (_exports, _xTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xTabs.default;
    }
  });
});
;define("dummy/ember-x-tabs/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/x-tab.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tab.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tab/nav-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tab/nav-item.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tab/nav-wrap.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tab/nav-wrap.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tab/navigation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tab/navigation.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tab/pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tab/pane.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tabs-pane-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tabs-pane-data.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tabs-pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tabs-pane.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tabs-panes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tabs-panes.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tabs-tab.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tabs-tab.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tabs-tabs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tabs-tabs.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/x-tabs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/x-tabs.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/eq.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/component-child.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/component-child.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/component-parent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/component-parent.js should pass ESLint\n\n');
  });
});
;define("dummy/ember-x-tabs/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/components/x-tab.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tab.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tab/nav-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tab/nav-item.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tab/nav-wrap.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tab/nav-wrap.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tab/navigation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tab/navigation.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tab/pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tab/pane.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tabs-pane-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tabs-pane-data.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tabs-pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tabs-pane.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tabs-panes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tabs-panes.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tabs-tab.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tabs-tab.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tabs-tabs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tabs-tabs.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/x-tabs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/x-tabs.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/eq.js should pass ESLint\n\n');
  });
});
;define("dummy/ember-x-tabs/tests/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('addon/templates/components/x-tab.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tab.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tab/nav-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tab/nav-item.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tab/nav-wrap.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tab/nav-wrap.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tab/navigation.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tab/navigation.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tab/pane.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tab/pane.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tabs-pane-data.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tabs-pane-data.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tabs-pane.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tabs-pane.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tabs-panes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tabs-panes.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tabs-tab.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tabs-tab.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tabs-tabs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tabs-tabs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/x-tabs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/x-tabs.hbs should pass TemplateLint.\n\n');
  });
});
;define("dummy/helpers/eq", ["exports", "ember-x-tabs/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function get() {
      return _eq.eq;
    }
  });
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("dummy/router", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('custom-class');
    this.route('xtabs-example');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("dummy/routes/custom-class", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/routes/xtabs-example", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "E+5QmQQs",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"codrops-top clearfix\"],[9],[0,\"\\n    \"],[7,\"a\"],[11,\"class\",\"codrops-icon codrops-icon-prev\"],[11,\"href\",\"http://github.com/rajasegar/ember-x-tabs/\"],[9],[7,\"span\"],[9],[0,\"Github\"],[10],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"right\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"class\",\"codrops-icon codrops-icon-drop\"],[11,\"href\",\"http://tympanus.net/codrops/?p=19559\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Back to the Codrops Article\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"header\"],[11,\"class\",\"codrops-header\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"ember-x-tabs \"],[7,\"span\"],[9],[0,\"A small collection of styles for tabs\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"support\"],[9],[0,\"\\n      Your browser does not support \"],[7,\"strong\"],[9],[0,\"flexbox\"],[10],[0,\"! \"],[7,\"br\"],[9],[10],[0,\"\\n      Please view this demo with a \"],[7,\"strong\"],[9],[0,\"modern browser\"],[10],[0,\".\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/components/tab-example", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "myflAZ+N",
    "block": "{\"symbols\":[\"xt\",\"panes\",\"tabs\"],\"statements\":[[4,\"x-tabs\",null,[[\"tab-style\"],[[25,[\"tabStyle\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"tabs\"]],\"expected `xt.tabs` to be a contextual component but found a string. Did you mean `(component xt.tabs)`? ('dummy/templates/components/tab-example.hbs' @ L4:C5) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/components/tab-example.hbs' @ L5:C7) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"icon icon-home\"],[9],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Home\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/components/tab-example.hbs' @ L9:C7) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"icon icon-box\"],[9],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Archive\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/components/tab-example.hbs' @ L13:C7) \"],null]],[[\"name\"],[\"analytics\"]],{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"icon icon-display\"],[9],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Analytics\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/components/tab-example.hbs' @ L17:C7) \"],null]],[[\"name\"],[\"settings\"]],{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"icon icon-tools\"],[9],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Settings\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/components/tab-example.hbs' @ L21:C7) \"],null]],[[\"name\"],[\"upload\"]],{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"icon icon-upload\"],[9],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Upload\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"panes\"]],\"expected `xt.panes` to be a contextual component but found a string. Did you mean `(component xt.panes)`? ('dummy/templates/components/tab-example.hbs' @ L28:C5) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/components/tab-example.hbs' @ L29:C7) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"Home\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"This is home content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/components/tab-example.hbs' @ L33:C7) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"Archive\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"This is archive content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/components/tab-example.hbs' @ L37:C7) \"],null]],[[\"name\"],[\"analytics\"]],{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"Analytics\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"This is analytics content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/components/tab-example.hbs' @ L41:C7) \"],null]],[[\"name\"],[\"settings\"]],{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"Settings\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"This is settings content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/components/tab-example.hbs' @ L45:C7) \"],null]],[[\"name\"],[\"upload\"]],{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"Upload\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"This is upload content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/tab-example.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/custom-class", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nC8rsgAr",
    "block": "{\"symbols\":[\"tab\"],\"statements\":[[7,\"h1\"],[9],[0,\" Custom Class\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"x-tab\",null,[[\"customClass\"],[\"myTabClass\"]],{\"statements\":[[0,\"\\n\"],[4,\"x-tab/navigation\",null,null,{\"statements\":[[4,\"x-tab/nav-wrap\",null,[[\"paneId\",\"tab\"],[\"home\",[24,1,[]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-home\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Home\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"x-tab/nav-wrap\",null,[[\"paneId\",\"tab\"],[\"archive\",[24,1,[]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-box\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Archive\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"x-tab/nav-wrap\",null,[[\"paneId\",\"tab\"],[\"analytics\",[24,1,[]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-display\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Analytics\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"x-tab/nav-wrap\",null,[[\"paneId\",\"tab\"],[\"settings\",[24,1,[]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-tools\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Settings\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"x-tab/nav-wrap\",null,[[\"paneId\",\"tab\"],[\"upload\",[24,1,[]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-upload\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Upload\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"    \"],[7,\"div\"],[11,\"class\",\"content-wrap\"],[9],[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"pane\"]],\"expected `tab.pane` to be a contextual component but found a string. Did you mean `(component tab.pane)`? ('dummy/templates/custom-class.hbs' @ L32:C9) \"],null]],[[\"elementId\"],[\"home\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Home\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is home content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"pane\"]],\"expected `tab.pane` to be a contextual component but found a string. Did you mean `(component tab.pane)`? ('dummy/templates/custom-class.hbs' @ L37:C9) \"],null]],[[\"elementId\"],[\"archive\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Archive\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is archive content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"pane\"]],\"expected `tab.pane` to be a contextual component but found a string. Did you mean `(component tab.pane)`? ('dummy/templates/custom-class.hbs' @ L41:C9) \"],null]],[[\"elementId\"],[\"analytics\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Analytics\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is analytics content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"pane\"]],\"expected `tab.pane` to be a contextual component but found a string. Did you mean `(component tab.pane)`? ('dummy/templates/custom-class.hbs' @ L45:C9) \"],null]],[[\"elementId\"],[\"settings\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Settings\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is settings content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"pane\"]],\"expected `tab.pane` to be a contextual component but found a string. Did you mean `(component tab.pane)`? ('dummy/templates/custom-class.hbs' @ L49:C9) \"],null]],[[\"elementId\"],[\"upload\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Upload\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is upload content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/custom-class.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/bTB74HC",
    "block": "{\"symbols\":[\"xt\",\"panes\",\"tabs\",\"xt\",\"pane\",\"tabs\"],\"statements\":[[1,[23,\"outlet\"],false],[0,\"\\n\"],[7,\"svg\"],[11,\"class\",\"hidden\"],[9],[0,\"\\n  \"],[7,\"defs\"],[9],[0,\"\\n    \"],[7,\"path\"],[11,\"id\",\"tabshape\"],[11,\"d\",\"M80,60C34,53.5,64.417,0,0,0v60H80z\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"X-Tab as a Page Control\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"x-tabs\",null,[[\"activeName\",\"tab-style\"],[\"archive\",\"tabs-style-topline\"]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,4,[\"tabs\"]],\"expected `xt.tabs` to be a contextual component but found a string. Did you mean `(component xt.tabs)`? ('dummy/templates/index.hbs' @ L12:C7) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,6,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L13:C9) \"],null]],[[\"name\",\"data\"],[\"home\",[29,\"hash\",null,[[\"name\"],[\"Home data\"]]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-home\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Home\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,6,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L17:C9) \"],null]],[[\"name\",\"data\"],[\"archive\",[29,\"hash\",null,[[\"name\"],[\"Archive Data\"]]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-box\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Archive\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,6,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L21:C9) \"],null]],[[\"name\",\"data\"],[\"analytics\",[29,\"hash\",null,[[\"name\"],[\"Analytics Data\"]]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-display\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Analytics\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,6,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L25:C9) \"],null]],[[\"name\",\"data\"],[\"settings\",[29,\"hash\",null,[[\"name\"],[\"Settings Data\"]]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-tools\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Settings\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,6,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L29:C9) \"],null]],[[\"name\",\"data\"],[\"upload\",[29,\"hash\",null,[[\"name\"],[\"Upload Data\"]]]]],{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-upload\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Upload\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,4,[\"dataPane\"]],\"expected `xt.dataPane` to be a contextual component but found a string. Did you mean `(component xt.dataPane)`? ('dummy/templates/index.hbs' @ L36:C7) \"],null]],null,{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"Page Control\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Data: \"],[1,[24,5,[\"data\",\"name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[4]},null],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\" 1. Bar - Default style\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-bar\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h1\"],[9],[0,\"2. Iconbox\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-iconbox\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"3. Underline\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-underline\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"4. Linetriangle\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-linetriangle\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"5. Topline\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-topline\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"6. Iconfall\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-iconfall\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"7. Linemove\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-linemove\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"8. Line\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-line\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"9. Circle\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-circle\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h1\"],[9],[0,\"10. Shape\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"x-tabs\",null,[[\"tab-style\"],[\"tabs-style-shape\"]],{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"tabs\"]],\"expected `xt.tabs` to be a contextual component but found a string. Did you mean `(component xt.tabs)`? ('dummy/templates/index.hbs' @ L106:C7) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L107:C9) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Home\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L113:C9) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Archive\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L122:C9) \"],null]],[[\"name\"],[\"analytics\"]],{\"statements\":[[0,\"        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Analytics\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L131:C9) \"],null]],[[\"name\"],[\"settings\"]],{\"statements\":[[0,\"        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Settings\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/templates/index.hbs' @ L140:C9) \"],null]],[[\"name\"],[\"upload\"]],{\"statements\":[[0,\"        \"],[7,\"svg\"],[11,\"viewBox\",\"0 0 80 60\"],[11,\"preserveAspectRatio\",\"none\"],[9],[0,\"\\n          \"],[7,\"use\"],[11,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"Upload\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"panes\"]],\"expected `xt.panes` to be a contextual component but found a string. Did you mean `(component xt.panes)`? ('dummy/templates/index.hbs' @ L149:C7) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/index.hbs' @ L150:C9) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Home\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is home content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/index.hbs' @ L154:C9) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Archive\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is archive content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/index.hbs' @ L158:C9) \"],null]],[[\"name\"],[\"analytics\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Analytics\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is analytics content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/index.hbs' @ L162:C9) \"],null]],[[\"name\"],[\"settings\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Settings\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is settings content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/templates/index.hbs' @ L166:C9) \"],null]],[[\"name\"],[\"upload\"]],{\"statements\":[[0,\"        \"],[7,\"h1\"],[9],[0,\"Upload\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"This is upload content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\\n\"],[7,\"h1\"],[9],[0,\"11. Linebox\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-linebox\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h1\"],[9],[0,\"12. Flip\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-flip\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h1\"],[9],[0,\"13. Circlefill\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-circlefill\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"14. Tzoid\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-tzoid\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"15. Fillup\"],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[29,\"tab-example\",null,[[\"tabStyle\"],[\"tabs-style-fillup\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
