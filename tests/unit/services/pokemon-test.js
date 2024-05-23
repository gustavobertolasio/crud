import { module, test } from 'qunit';
import { setupTest } from 'crud/tests/helpers';

module('Unit | Service | pokemon', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:pokemon');
    assert.ok(service);
  });
});
