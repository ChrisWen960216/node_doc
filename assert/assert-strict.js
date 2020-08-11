const assert = require("assert");

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: "strictEqual",
});

try {
  assert.strictEqual(1, 2);
} catch (e) {
  assert.strictEqual(e instanceof assert.AssertionError);
  assert.strictEqual(e, message, message);
  assert.strictEqual(e.name, "AssertionError [ERR_ASSERTION]");
}
