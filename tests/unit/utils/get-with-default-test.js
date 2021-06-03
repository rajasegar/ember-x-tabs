import { getWithDefault } from 'ember-x-tabs/utils/get-with-default';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Utils | get with default', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    const person = { 'name': 'my_name' }
    this.person = person;
  })

  test('return value if key is present', function(assert) {
    assert.equal(getWithDefault(this.person, 'name', 'first_name'), 'my_name');
  });

  test('return default value if key is not present', function(assert) {
    delete this.person.name;
    assert.equal(getWithDefault(this.person, 'name', 'first_name'), 'first_name');
  });
});
