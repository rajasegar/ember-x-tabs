import Ember from 'ember';
import ComponentChildMixin from 'ember-x-tabs/mixins/component-child';
import { module, test } from 'qunit';

module('Unit | Mixin | component child');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentChildObject = Ember.Object.extend(ComponentChildMixin);
  let subject = ComponentChildObject.create();
  assert.ok(subject);
});
