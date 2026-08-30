import assert from 'node:assert/strict';
import test from 'node:test';

test('скомпилированный API экспортирует пустой список маршрутов seed-песочницы', async () => {
  const { routes } = await import('../dist/src/server/api.js');
  assert.deepEqual(routes, []);
});
