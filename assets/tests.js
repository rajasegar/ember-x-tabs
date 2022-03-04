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
  (0, _qunit.module)('Integration | Component | x-tabs-pane-data', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
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
                  id: "Ab6PDXhG",
                  block: "{\"symbols\":[],\"statements\":[[1,[23,\"x-tabs-pane-data\"],false]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(page.text, ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-pane-data}}
                        template block text
                      {{/x-tabs-pane-data}}
                    
                */
                {
                  id: "dX65+YCE",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-pane-data\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(page.text, 'template block text');

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
  (0, _qunit.module)('Integration | Component | x-tabs-pane', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
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
                  id: "xkB78nWW",
                  block: "{\"symbols\":[],\"statements\":[[1,[23,\"x-tabs-pane\"],false]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(page.text, ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-pane}}
                        template block text
                      {{/x-tabs-pane}}
                    
                */
                {
                  id: "QR7RIoOz",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-pane\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(page.text, 'template block text');

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
  (0, _qunit.module)('Integration | Component | x-tabs-panes', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
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
                  id: "hFoxSz4r",
                  block: "{\"symbols\":[],\"statements\":[[1,[23,\"x-tabs-panes\"],false]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(page.text, ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-panes}}
                        template block text
                      {{/x-tabs-panes}}
                    
                */
                {
                  id: "QbEH2T+I",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-panes\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(page.text, 'template block text');

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
  (0, _qunit.module)('Integration | Component | x-tabs-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('api', {
                  selectAction: function selectAction() {}
                });
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{x-tabs-tab api=api}}
                */
                {
                  id: "M3rOptXK",
                  block: "{\"symbols\":[],\"statements\":[[1,[29,\"x-tabs-tab\",null,[[\"api\"],[[25,[\"api\"]]]]],false]],\"hasEval\":false}",
                  meta: {}
                }));

              case 3:
                assert.equal(page.text, ''); // Template block usage:

                _context.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-tab api=api}}
                        template block text
                      {{/x-tabs-tab}}
                    
                */
                {
                  id: "uxjL98ts",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-tab\",null,[[\"api\"],[[25,[\"api\"]]]],{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 6:
                assert.equal(page.text, 'template block text');

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
  (0, _qunit.module)('Integration | Component | x-tabs-tabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
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
                  id: "20fltTyZ",
                  block: "{\"symbols\":[],\"statements\":[[1,[23,\"x-tabs-tabs\"],false]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(page.text, ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      {{#x-tabs-tabs}}
                        template block text
                      {{/x-tabs-tabs}}
                    
                */
                {
                  id: "+LsvGRvr",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-tabs-tabs\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(page.text, 'template block text');

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
    tabs: (0, _emberCliPageObject.collection)('nav > ul > li', {
      text: (0, _emberCliPageObject.text)('a > span'),
      isCurrentTab: (0, _emberCliPageObject.hasClass)("tab-current", "")
    }),
    content: (0, _emberCliPageObject.collection)('.content-wrap > section', {
      isCurrentContent: (0, _emberCliPageObject.hasClass)("content-current")
    }),
    navCount: (0, _emberCliPageObject.count)("nav")
  });
  (0, _qunit.module)('Integration | Component | x-tabs', function (hooks) {
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
                id: "SdxK6aTE",
                block: "{\"symbols\":[\"xt\",\"panes\",\"tabs\"],\"statements\":[[0,\"\\n\"],[4,\"x-tabs\",null,[[\"tab-style\"],[[25,[\"tabStyle\"]]]],{\"statements\":[[0,\"    \\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"tabs\"]],\"expected `xt.tabs` to be a contextual component but found a string. Did you mean `(component xt.tabs)`? (L5:C9) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? (L6:C11) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"          \"],[7,\"i\"],[11,\"class\",\"icon icon-home\"],[9],[10],[0,\"\\n          \"],[7,\"span\"],[9],[0,\"Home\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? (L10:C11) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"          \"],[7,\"i\"],[11,\"class\",\"icon icon-box\"],[9],[10],[0,\"\\n          \"],[7,\"span\"],[9],[0,\"Archive\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"    \\n\"],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,1,[\"panes\"]],\"expected `xt.panes` to be a contextual component but found a string. Did you mean `(component xt.panes)`? (L17:C9) \"],null]],null,{\"statements\":[[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? (L18:C11) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"          \"],[7,\"h1\"],[9],[0,\"Home\"],[10],[0,\"\\n          \"],[7,\"p\"],[9],[0,\"This is home content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[29,\"-assert-implicit-component-helper-argument\",[[24,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? (L22:C11) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"          \"],[7,\"h1\"],[9],[0,\"Archive\"],[10],[0,\"\\n          \"],[7,\"p\"],[9],[0,\"This is archive content\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"      \"],[7,\"div\"],[11,\"id\",\"activeName\"],[9],[1,[24,1,[\"activeName\"]],false],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"switch\"],[12,\"onclick\",[29,\"action\",[[24,0,[]],[24,1,[\"api\",\"selectAction\"]],\"archive\"],null]],[9],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
                meta: {}
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    function assertActiveTab(assert, tabIndex) {
      assert.ok(page.tabs.objectAt(tabIndex).isCurrentTab, 'tab is active');
      assert.ok(page.content.objectAt(tabIndex).isCurrentContent, 'tab pane is active');
    }

    function assertInActiveTab(assert, tabIndex) {
      assert.notOk(page.tabs.objectAt(tabIndex).isCurrentTab, 'tab is inactive');
      assert.notOk(page.content.objectAt(tabIndex).isCurrentContent, 'tab pane is inactive');
    }

    (0, _qunit.test)('it generates tab navigation', function (assert) {
      assert.equal(page.navCount, 1, 'has tabs navigation');
      assert.equal(page.tabs.length, 2, 'has tabs navigation items');
      assert.equal(page.tabs.objectAt(homeTab).text, 'Home', 'navigation item shows pane title');
      assert.equal(page.tabs.objectAt(archiveTab).text, 'Archive', 'navigation item shows pane title');
    });
    (0, _qunit.test)('first tab is active by default', function (assert) {
      assertActiveTab(assert, homeTab);
      assertInActiveTab(assert, archiveTab);
    });
    (0, _qunit.test)('Selecting a tab displays correct pane', /*#__PURE__*/function () {
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

  (0, _qunit.module)('helper:eq', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{eq inputValue '1234'}}
                */
                {
                  id: "hDOnYlb2",
                  block: "{\"symbols\":[],\"statements\":[[1,[29,\"eq\",[[25,[\"inputValue\"]],\"1234\"],null],false]],\"hasEval\":false}",
                  meta: {}
                }));

              case 3:
                assert.dom('*').hasText('true');

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
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/tab-example.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tab-example.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/custom-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/custom-class.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/xtabs-example.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/xtabs-example.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/tab-example.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/tab-example.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/custom-class.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/custom-class.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-tabs-pane-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-tabs-pane-data-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-tabs-pane-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-tabs-pane-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-tabs-panes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-tabs-panes-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-tabs-tab-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-tabs-tab-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-tabs-tabs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-tabs-tabs-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-tabs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-tabs-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/eq-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/eq-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/mixins/component-child-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/component-child-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/mixins/component-parent-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/component-parent-test.js should pass ESLint\n\n');
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
  Object.defineProperty(_exports, "fillable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "selectable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "focusable", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.focusable;
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
  Object.defineProperty(_exports, "buildSelector", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(_exports, "findElementWithAssert", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(_exports, "findElement", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(_exports, "getContext", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(_exports, "fullScope", {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fullScope;
    }
  });
  _exports.default = void 0;
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
define("dummy/tests/unit/mixins/component-child-test", ["ember-x-tabs/mixins/component-child", "qunit"], function (_componentChild, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Mixin | component child', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      var ComponentChildObject = Ember.Object.extend(_componentChild.default);
      var subject = ComponentChildObject.create();
      assert.ok(subject);
    });
  });
});
define("dummy/tests/unit/mixins/component-parent-test", ["ember-x-tabs/mixins/component-parent", "qunit"], function (_componentParent, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Mixin | component parent', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      var ComponentParentObject = Ember.Object.extend(_componentParent.default);
      var subject = ComponentParentObject.create();
      assert.ok(subject);
    });
  });
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
