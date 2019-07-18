/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../sass-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<sass-component></sass-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
