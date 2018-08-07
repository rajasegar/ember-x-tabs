import EmberObject from '@ember/object';
import ComponentParentMixin from 'ember-x-tabs/mixins/component-parent';
import { module, test } from 'qunit';

module('Unit | Mixin | component parent', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let ComponentParentObject = EmberObject.extend(ComponentParentMixin);
    let subject = ComponentParentObject.create();
    assert.ok(subject);
  });
});