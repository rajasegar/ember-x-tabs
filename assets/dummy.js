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
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberComponentManager.default;
    }
  });
});
;define("dummy/components/tab-example", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#x-tabs tab-style=@tabStyle as | xt | }}
  
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
      {{#tabs.tab name="analytics"}}
        <i class="icon icon-display"></i>
        <span>Analytics</span>
      {{/tabs.tab}}
      {{#tabs.tab name="settings"}}
        <i class="icon icon-tools"></i>
        <span>Settings</span>
      {{/tabs.tab}}
      {{#tabs.tab name="upload"}}
        <i class="icon icon-upload"></i>
        <span>Upload</span>
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
      {{#panes.pane name="analytics"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/panes.pane}}
      {{#panes.pane name="settings"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/panes.pane}}
      {{#panes.pane name="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/panes.pane}}
    {{/xt.panes}}
  
  {{/x-tabs}}
  
  */
  {
    "id": "H3bDayUV",
    "block": "{\"symbols\":[\"xt\",\"panes\",\"tabs\",\"@tabStyle\"],\"statements\":[[4,\"x-tabs\",null,[[\"tab-style\"],[[23,4,[]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"tabs\"]],\"expected `xt.tabs` to be a contextual component but found a string. Did you mean `(component xt.tabs)`? ('dummy/components/tab-example.hbs' @ L4:C5) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/components/tab-example.hbs' @ L5:C7) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"      \"],[7,\"i\",true],[10,\"class\",\"icon icon-home\"],[8],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Home\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/components/tab-example.hbs' @ L9:C7) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"      \"],[7,\"i\",true],[10,\"class\",\"icon icon-box\"],[8],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Archive\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/components/tab-example.hbs' @ L13:C7) \"],null]],[[\"name\"],[\"analytics\"]],{\"statements\":[[0,\"      \"],[7,\"i\",true],[10,\"class\",\"icon icon-display\"],[8],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Analytics\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/components/tab-example.hbs' @ L17:C7) \"],null]],[[\"name\"],[\"settings\"]],{\"statements\":[[0,\"      \"],[7,\"i\",true],[10,\"class\",\"icon icon-tools\"],[8],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Settings\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('dummy/components/tab-example.hbs' @ L21:C7) \"],null]],[[\"name\"],[\"upload\"]],{\"statements\":[[0,\"      \"],[7,\"i\",true],[10,\"class\",\"icon icon-upload\"],[8],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Upload\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"panes\"]],\"expected `xt.panes` to be a contextual component but found a string. Did you mean `(component xt.panes)`? ('dummy/components/tab-example.hbs' @ L28:C5) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/components/tab-example.hbs' @ L29:C7) \"],null]],[[\"name\"],[\"home\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"Home\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"This is home content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/components/tab-example.hbs' @ L33:C7) \"],null]],[[\"name\"],[\"archive\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"Archive\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"This is archive content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/components/tab-example.hbs' @ L37:C7) \"],null]],[[\"name\"],[\"analytics\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"Analytics\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"This is analytics content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/components/tab-example.hbs' @ L41:C7) \"],null]],[[\"name\"],[\"settings\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"Settings\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"This is settings content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pane\"]],\"expected `panes.pane` to be a contextual component but found a string. Did you mean `(component panes.pane)`? ('dummy/components/tab-example.hbs' @ L45:C7) \"],null]],[[\"name\"],[\"upload\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"Upload\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"This is upload content\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/components/tab-example.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
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
;define("dummy/ember-x-tabs/tests/templates.template.lint-test", [], function () {
  "use strict";
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
  _exports.default = void 0;
  _exports.initialize = initialize;

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
  Router.map(function () {});
  var _default = Router;
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
;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "de5ubv49",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"codrops-top clearfix\"],[8],[0,\"\\n    \"],[7,\"a\",true],[10,\"class\",\"codrops-icon codrops-icon-prev\"],[10,\"href\",\"http://github.com/rajasegar/ember-x-tabs/\"],[8],[7,\"span\",true],[8],[0,\"Github\"],[9],[9],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"right\"],[8],[0,\"\\n      \"],[7,\"a\",true],[10,\"class\",\"codrops-icon codrops-icon-drop\"],[10,\"href\",\"http://tympanus.net/codrops/?p=19559\"],[8],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Back to the Codrops Article\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"header\",true],[10,\"class\",\"codrops-header\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"ember-x-tabs \"],[7,\"span\",true],[8],[0,\"A small collection of styles for tabs\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"support\"],[8],[0,\"\\n      Your browser does not support \"],[7,\"strong\",true],[8],[0,\"flexbox\"],[9],[0,\"! \"],[7,\"br\",true],[8],[9],[0,\"\\n      Please view this demo with a \"],[7,\"strong\",true],[8],[0,\"modern browser\"],[9],[0,\".\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
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
    "id": "JyRLAxuV",
    "block": "{\"symbols\":[\"xt\",\"panes\",\"tabs\",\"xt\",\"pane\",\"tabs\"],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"],[7,\"svg\",true],[10,\"class\",\"hidden\"],[8],[0,\"\\n  \"],[7,\"defs\",true],[8],[0,\"\\n    \"],[7,\"path\",true],[10,\"id\",\"tabshape\"],[10,\"d\",\"M80,60C34,53.5,64.417,0,0,0v60H80z\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"X-Tab as a Page Control\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"x-tabs\",[],[[\"@activeName\",\"@tab-style\"],[\"archive\",\"tabs-style-topline\"]],{\"statements\":[[0,\"\\n\\n    \"],[6,[23,4,[\"tabs\"]],[],[[],[]],{\"statements\":[[0,\"\\n      \"],[6,[23,6,[\"tab\"]],[[12,\"name\",\"Home data\"],[12,\")\",\"\"]],[[\"@name\",\"@data\"],[\"home\",\"(hash\"]],{\"statements\":[[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-home\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Home\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,6,[\"tab\"]],[[12,\"name\",\"Archive Data\"],[12,\")\",\"\"]],[[\"@name\",\"@data\"],[\"archive\",\"(hash\"]],{\"statements\":[[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-box\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Archive\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,6,[\"tab\"]],[[12,\"name\",\"Analytics Data\"],[12,\")\",\"\"]],[[\"@name\",\"@data\"],[\"analytics\",\"(hash\"]],{\"statements\":[[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-display\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Analytics\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,6,[\"tab\"]],[[12,\"name\",\"Settings Data\"],[12,\")\",\"\"]],[[\"@name\",\"@data\"],[\"settings\",\"(hash\"]],{\"statements\":[[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-tools\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Settings\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,6,[\"tab\"]],[[12,\"name\",\"Upload Data\"],[12,\")\",\"\"]],[[\"@name\",\"@data\"],[\"upload\",\"(hash\"]],{\"statements\":[[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-upload\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Upload\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n\\n    \"]],\"parameters\":[6]}],[0,\"\\n\\n    \"],[6,[23,4,[\"dataPane\"]],[],[[],[]],{\"statements\":[[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"Page Control\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"Data: \"],[1,[23,5,[\"data\",\"name\"]],false],[9],[0,\"\\n    \"]],\"parameters\":[5]}],[0,\"\\n  \"]],\"parameters\":[4]}],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\" 1. Bar - Default style\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-bar\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[7,\"h1\",true],[8],[0,\"2. Iconbox\"],[9],[0,\"\\n\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-iconbox\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"3. Underline\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-underline\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"4. Linetriangle\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-linetriangle\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"5. Topline\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-topline\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"6. Iconfall\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-iconfall\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"7. Linemove\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-linemove\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"8. Line\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-line\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"9. Circle\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-circle\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[7,\"h1\",true],[8],[0,\"10. Shape\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"x-tabs\",[],[[\"@tab-style\"],[\"tabs-style-shape\"]],{\"statements\":[[0,\"\\n\"],[0,\"    \"],[6,[23,1,[\"tabs\"]],[],[[],[]],{\"statements\":[[0,\"\\n      \"],[6,[23,3,[\"tab\"]],[],[[\"@name\"],[\"home\"]],{\"statements\":[[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Home\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,3,[\"tab\"]],[],[[\"@name\"],[\"archive\"]],{\"statements\":[[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Archive\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,3,[\"tab\"]],[],[[\"@name\"],[\"analytics\"]],{\"statements\":[[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Analytics\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,3,[\"tab\"]],[],[[\"@name\"],[\"settings\"]],{\"statements\":[[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Settings\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,3,[\"tab\"]],[],[[\"@name\"],[\"upload\"]],{\"statements\":[[0,\"\\n        \"],[7,\"svg\",true],[10,\"viewBox\",\"0 0 80 60\"],[10,\"preserveAspectRatio\",\"none\"],[8],[0,\"\\n          \"],[7,\"use\",true],[10,\"xlink:href\",\"#tabshape\",\"http://www.w3.org/1999/xlink\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Upload\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[3]}],[0,\"\\n\\n\"],[0,\"    \"],[6,[23,1,[\"panes\"]],[],[[],[]],{\"statements\":[[0,\"\\n      \"],[6,[23,2,[\"pane\"]],[],[[\"@name\"],[\"home\"]],{\"statements\":[[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"Home\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"This is home content\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,2,[\"pane\"]],[],[[\"@name\"],[\"archive\"]],{\"statements\":[[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"Archive\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"This is archive content\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,2,[\"pane\"]],[],[[\"@name\"],[\"analytics\"]],{\"statements\":[[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"Analytics\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"This is analytics content\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,2,[\"pane\"]],[],[[\"@name\"],[\"settings\"]],{\"statements\":[[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"Settings\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"This is settings content\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n      \"],[6,[23,2,[\"pane\"]],[],[[\"@name\"],[\"upload\"]],{\"statements\":[[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"Upload\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"This is upload content\"],[9],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[2]}],[0,\"\\n\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[7,\"h1\",true],[8],[0,\"11. Linebox\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-linebox\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[7,\"h1\",true],[8],[0,\"12. Flip\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-flip\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[7,\"h1\",true],[8],[0,\"13. Circlefill\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-circlefill\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"14. Tzoid\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-tzoid\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"15. Fillup\"],[9],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[5,\"tab-example\",[],[[\"@tabStyle\"],[\"tabs-style-fillup\"]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
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
