import { module, test } from 'qunit';
import { setupTest } from 'crud/tests/helpers';

module('Unit | Service | character', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:character');
    assert.ok(service);
  });
});
