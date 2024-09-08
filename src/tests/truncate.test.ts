const { truncate } = require("../lib/truncate.ts");

describe("Truncate", () => {
  it("can truncate extra words", () => {
    expect(truncate("1234567890123", 10)).toBe("1234567890...");
  });

  it("can avoid small words", () => {
    expect(truncate("1234567890", 20)).toBe("1234567890");
  });

  it("can avoid trailing whitespaces", () => {
    expect(truncate("123456789              ", 15)).toBe("123456789");
  });
});
