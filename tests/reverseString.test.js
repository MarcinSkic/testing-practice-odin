import { describe, jest, it, expect } from "@jest/globals";
import reverseString from "../reverseString";

describe("reverseString", () => {
    it("works on even chars amount", () => {
        expect(reverseString("cake")).toBe("ekac");
    });

    it("works on odd chars amount", () => {
        expect(reverseString("pasta")).toBe("atsap");
    });

    it("works on palindromes", () => {
        expect(reverseString("hannah")).toBe("hannah");
    });

    it("works with whitespace", () => {
        expect(reverseString("ann has kitty")).toBe("yttik sah nna");
    });
});
