'use strict';

define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/integration/components/x-tabs-pane-data-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliPageObject) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var page = (0, _emberCliPageObject.create)({
    text: (0, _emberCliPageObject.text)()
  });
  (0, _qunit.module)("Integration | Component | x-tabs-pane-data", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{x-tabs-pane-data}}
                */
                {
                  "id": "fxphGVyc",
                  "block": "{\"symbols\":[],\"statements\":[[1,[22,\"x-tabs-pane-data\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:
                assert.equal(page.text, "", "non-block form"); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-pane-data}}
                        template block text
                      {{/x-tabs-pane-data}}
                    
                */
                {
                  "id": "dX65+YCE",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-pane-data\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                assert.equal(page.text, "template block text", "Block form");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/x-tabs-pane-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliPageObject) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var page = (0, _emberCliPageObject.create)({
    text: (0, _emberCliPageObject.text)()
  });
  (0, _qunit.module)("Integration | Component | x-tabs-pane", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{x-tabs-pane}}
                */
                {
                  "id": "gXmk6IZ4",
                  "block": "{\"symbols\":[],\"statements\":[[1,[22,\"x-tabs-pane\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:
                assert.equal(page.text, ""); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-pane}}
                        template block text
                      {{/x-tabs-pane}}
                    
                */
                {
                  "id": "QR7RIoOz",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-pane\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                assert.equal(page.text, "template block text");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/x-tabs-panes-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliPageObject) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var page = (0, _emberCliPageObject.create)({
    text: (0, _emberCliPageObject.text)()
  });
  (0, _qunit.module)("Integration | Component | x-tabs-panes", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{x-tabs-panes}}
                */
                {
                  "id": "/NnC9l0M",
                  "block": "{\"symbols\":[],\"statements\":[[1,[22,\"x-tabs-panes\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:
                assert.equal(page.text, ""); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-panes}}
                        template block text
                      {{/x-tabs-panes}}
                    
                */
                {
                  "id": "QbEH2T+I",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-panes\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                assert.equal(page.text, "template block text");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/x-tabs-tab-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliPageObject) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var page = (0, _emberCliPageObject.create)({
    text: (0, _emberCliPageObject.text)()
  });
  (0, _qunit.module)("Integration | Component | x-tabs-tab", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set("api", {
                  selectAction: function selectAction() {}
                });
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{x-tabs-tab api=this.api}}
                */
                {
                  "id": "8DmhMbg3",
                  "block": "{\"symbols\":[],\"statements\":[[1,[28,\"x-tabs-tab\",null,[[\"api\"],[[23,0,[\"api\"]]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:
                assert.equal(page.text, ""); // Template block usage:

                _context.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-tab api=this.api}}
                        template block text
                      {{/x-tabs-tab}}
                    
                */
                {
                  "id": "Zn2lF7tM",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-tab\",null,[[\"api\"],[[23,0,[\"api\"]]]],{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:
                assert.equal(page.text, "template block text");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/x-tabs-tabs-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliPageObject) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var page = (0, _emberCliPageObject.create)({
    text: (0, _emberCliPageObject.text)()
  });
  (0, _qunit.module)("Integration | Component | x-tabs-tabs", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{x-tabs-tabs}}
                */
                {
                  "id": "zM00ESyg",
                  "block": "{\"symbols\":[],\"statements\":[[1,[22,\"x-tabs-tabs\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:
                assert.equal(page.text, ""); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-tabs}}
                        template block text
                      {{/x-tabs-tabs}}
                    
                */
                {
                  "id": "+LsvGRvr",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-tabs\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                assert.equal(page.text, "template block text");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/x-tabs-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliPageObject) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var page = (0, _emberCliPageObject.create)({
    text: (0, _emberCliPageObject.text)(),
    switchClick: (0, _emberCliPageObject.clickable)("#switch"),
    sectionCount: (0, _emberCliPageObject.count)("section"),
    tabs: (0, _emberCliPageObject.collection)("nav > ul > li", {
      text: (0, _emberCliPageObject.text)("a > span"),
      isCurrentTab: (0, _emberCliPageObject.hasClass)("tab-current", "")
    }),
    content: (0, _emberCliPageObject.collection)(".content-wrap > section", {
      isCurrentContent: (0, _emberCliPageObject.hasClass)("content-current")
    }),
    navCount: (0, _emberCliPageObject.count)("nav")
  });
  (0, _qunit.module)("Integration | Component | x-tabs", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var homeTab = 0,
        archiveTab = 1;
    hooks.beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _testHelpers.render)(Ember.HTMLBars.template(
              /*
                
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
                
              */
              {
                "id": "ny3kMKDH",
                "block": "{\"symbols\":[\"xt\",\"panes\",\"tabs\"],\"statements\":[[0,\"\\n\"],[4,\"x-tabs\",null,[[\"tab-style\"],[[24,[\"tabStyle\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"tabs\"]],\"expected `xt.tabs` to be a contextual component but found a string. Did you mean `(component xt.tabs)`? (L5:C9) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? (L6:C11) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"          \"],[7,\"i\",true],[10,\"class\",\"icon icon-home\"],[8],[9],[0,\"\\n          \"],[7,\"span\",true],[8],[0,\"Home\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? (L10:C11) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"          \"],[7,\"i\",true],[10,\"class\",\"icon icon-box\"],[8],[9],[0,\"\\n          \"],[7,\"span\",true],[8],[0,\"Archive\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"panes\"]],\"expected `xt.panes` to be a contextual component but found a string. Did you mean `(component xt.panes)`? (L17:C9) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? (L18:C11) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"          \"],[7,\"h1\",true],[8],[0,\"Home\"],[9],[0,\"\\n          \"],[7,\"p\",true],[8],[0,\"This is home content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? (L22:C11) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"          \"],[7,\"h1\",true],[8],[0,\"Archive\"],[9],[0,\"\\n          \"],[7,\"p\",true],[8],[0,\"This is archive content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"      \"],[7,\"div\",true],[10,\"id\",\"activeName\"],[8],[1,[23,1,[\"activeName\"]],false],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"id\",\"switch\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],[23,1,[\"api\",\"selectAction\"]],\"archive\"],null]],[8],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
                "meta": {}
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    function assertActiveTab(assert, tabIndex) {
      assert.ok(page.tabs.objectAt(tabIndex).isCurrentTab, "tab is active");
      assert.ok(page.content.objectAt(tabIndex).isCurrentContent, "tab pane is active");
    }

    function assertInActiveTab(assert, tabIndex) {
      assert.notOk(page.tabs.objectAt(tabIndex).isCurrentTab, "tab is inactive");
      assert.notOk(page.content.objectAt(tabIndex).isCurrentContent, "tab pane is inactive");
    }

    (0, _qunit.test)("it generates tab navigation", function (assert) {
      assert.equal(page.navCount, 1, "has tabs navigation");
      assert.equal(page.tabs.length, 2, "has tabs navigation items");
      assert.equal(page.tabs.objectAt(homeTab).text, "Home", "navigation item shows pane title");
      assert.equal(page.tabs.objectAt(archiveTab).text, "Archive", "navigation item shows pane title");
    });
    (0, _qunit.test)("first tab is active by default", function (assert) {
      assertActiveTab(assert, homeTab);
      assertInActiveTab(assert, archiveTab);
    });
    (0, _qunit.test)("Selecting a tab displays correct pane", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return page.switchClick();

              case 2:
                assertInActiveTab(assert, homeTab);
                assertActiveTab(assert, archiveTab);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/helpers/eq-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)("helper:eq", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set("inputValue", "1234");
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{eq inputValue '1234'}}
                */
                {
                  "id": "YauBDZLf",
                  "block": "{\"symbols\":[],\"statements\":[[1,[28,\"eq\",[[24,[\"inputValue\"]],\"1234\"],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:
                assert.dom("*").hasText("true");

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/page-object", ["exports", "ember-cli-page-object"], function (_exports, _emberCliPageObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "alias", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.alias;
    }
  });
  Object.defineProperty(_exports, "attribute", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.attribute;
    }
  });
  Object.defineProperty(_exports, "buildSelector", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(_exports, "clickOnText", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.clickOnText;
    }
  });
  Object.defineProperty(_exports, "clickable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.clickable;
    }
  });
  Object.defineProperty(_exports, "collection", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.collection;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.contains;
    }
  });
  Object.defineProperty(_exports, "count", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.count;
    }
  });
  Object.defineProperty(_exports, "create", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.create;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "fillable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "findElement", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(_exports, "findElementWithAssert", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(_exports, "focusable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.focusable;
    }
  });
  Object.defineProperty(_exports, "fullScope", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fullScope;
    }
  });
  Object.defineProperty(_exports, "getContext", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(_exports, "hasClass", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.hasClass;
    }
  });
  Object.defineProperty(_exports, "is", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.is;
    }
  });
  Object.defineProperty(_exports, "isHidden", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.isHidden;
    }
  });
  Object.defineProperty(_exports, "isPresent", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.isPresent;
    }
  });
  Object.defineProperty(_exports, "isVisible", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.isVisible;
    }
  });
  Object.defineProperty(_exports, "notHasClass", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.notHasClass;
    }
  });
  Object.defineProperty(_exports, "property", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.property;
    }
  });
  Object.defineProperty(_exports, "selectable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "text", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.text;
    }
  });
  Object.defineProperty(_exports, "triggerable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.triggerable;
    }
  });
  Object.defineProperty(_exports, "value", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.value;
    }
  });
  Object.defineProperty(_exports, "visitable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.visitable;
    }
  });
  var _default = {
    alias: _emberCliPageObject.alias,
    attribute: _emberCliPageObject.attribute,
    blurrable: _emberCliPageObject.blurrable,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    focusable: _emberCliPageObject.focusable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isPresent: _emberCliPageObject.isPresent,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
  _exports.default = _default;
  (true && !(false) && Ember.deprecate("Importing from \"test-support\" is now deprecated. Please import directly from the \"ember-cli-page-object\" module instead.", false, {
    id: 'ember-cli-page-object.import-from-test-support',
    until: "2.0.0",
    url: "https://gist.github.com/san650/17174e4b7b1fd80b049a47eb456a7cdc#file-import-from-test-support-js"
  }));
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit", "ember-cli-page-object/extend"], function (_app, _environment, _testHelpers, _emberQunit, _extend) {
  "use strict";

  (0, _extend.useNativeEvents)();
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
