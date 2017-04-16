import Ember from 'ember';
import ComponentParentMixin from 'ember-x-tabs/mixins/component-parent';
import { module, test } from 'qunit';

module('Unit | Mixin | component parent');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentParentObject = Ember.Object.extend(ComponentParentMixin);
  let subject = ComponentParentObject.create();
  assert.ok(subject);
});
