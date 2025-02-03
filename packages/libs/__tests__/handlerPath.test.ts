import { fileURLToPath } from "node:url";
import path from "node:path";
import { handlerPath } from "../src/handlerPath";

describe("the handlerPath utility", () => {
  describe("when given a valid path", () => {
    it("returns the path", () => {
      const result = handlerPath(path.dirname(fileURLToPath(import.meta.url)));
      expect(result).toEqual("__tests__");
    });
  });
});
