import EmberObject from '@ember/object';
import ComponentChildMixin from 'ember-x-tabs/mixins/component-child';
import { module, test } from 'qunit';

module('Unit | Mixin | component child', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let ComponentChildObject = EmberObject.extend(ComponentChildMixin);
    let subject = ComponentChildObject.create();
    assert.ok(subject);
  });
});