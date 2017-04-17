"use strict";



define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('dummy/components/x-tab', ['exports', 'ember-x-tabs/components/x-tab'], function (exports, _xTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTab.default;
    }
  });
});
define('dummy/components/x-tab/pane', ['exports', 'ember-x-tabs/components/x-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('dummy/ember-x-tabs/tests/ember-x-tabs/components/x-tab.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - ember-x-tabs/components/x-tab.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-tabs/components/x-tab.js should pass ESLint.\n');
  });
});
define('dummy/ember-x-tabs/tests/ember-x-tabs/components/x-tab/pane.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - ember-x-tabs/components/x-tab/pane.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-tabs/components/x-tab/pane.js should pass ESLint.\n');
  });
});
define('dummy/ember-x-tabs/tests/ember-x-tabs/helpers/eq.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - ember-x-tabs/helpers/eq.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-tabs/helpers/eq.js should pass ESLint.\n');
  });
});
define('dummy/ember-x-tabs/tests/ember-x-tabs/mixins/component-child.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - ember-x-tabs/mixins/component-child.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-tabs/mixins/component-child.js should pass ESLint.\n');
  });
});
define('dummy/ember-x-tabs/tests/ember-x-tabs/mixins/component-parent.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - ember-x-tabs/mixins/component-parent.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-tabs/mixins/component-parent.js should pass ESLint.\n');
  });
});
define('dummy/helpers/eq', ['exports', 'ember-x-tabs/helpers/eq'], function (exports, _eq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _eq.eq;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
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
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
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

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "opgMSlva", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-bar\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-iconbox\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-underline\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-linetriangle\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Archive\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Analytics\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Settings\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-topline\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-iconfall\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-linemove\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-line\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-circle\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-shape\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Archive\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Analytics\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Settings\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-linebox\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-flip\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\"],[\"Upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-circlefill\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-tzoid\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[13],[0,\"\\n\"],[6,[\"x-tab\"],null,[[\"tab-style\"],[\"tabs-style-fillup\"]],{\"statements\":[[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Home\",\"home\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Home\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is home content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Archive\",\"box\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Archive\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is archive content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Analytics\",\"display\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Analytics\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is analytics content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Settings\",\"tools\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Settings\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is settings content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"tab\",\"pane\"]]],[[\"title\",\"icon\"],[\"Upload\",\"upload\"]],{\"statements\":[[0,\"        \"],[11,\"h1\",[]],[13],[0,\"Upload\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This is upload content\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"tab\"]},null],[0,\"  \"],[14],[0,\"\\n\\n\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
