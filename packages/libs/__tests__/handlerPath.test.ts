import { handlerPath } from "../src/handlerPath";

describe("the handlerPath utility", () => {
  describe("when given a valid path", () => {
    it("returns the path", () => {
      const path = "packages/libs/__tests__";
      const result = handlerPath(__dirname);
      expect(result).toEqual(path);
    });
  });
});
