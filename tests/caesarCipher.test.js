import { describe, jest, it, expect } from "@jest/globals";
import ceaserCipher from "../caesarCipher";

describe("caeserCipher", () => {
    it("easy shift", () => {
        expect(ceaserCipher("abc", 3)).toBe("def");
    });

    it("wraps around", () => {
        expect(ceaserCipher("xampp", 5)).toBe("cfruu");
    });
    it("works on all cases", () => {
        expect(
            ceaserCipher(
                "xamppadasSDSFfasdaAVBgfiewKLSPOasfpQEWMSCbxzhjkaslwpqrjjUEORYkDsanbgfiuSAFDA",
                42
            )
        ).toBe(
            "nqcffqtqiITIVvqitqQLRwvyumABIFEqivfGUMCISrnpxzaqibmfghzzKUEHOaTiqdrwvykIQVTQ"
        );
    });
    it.skip("works on negative", () => {
        expect(ceaserCipher("efghijk", -3)).toBe("bcdefgh");
    });
    it.skip("wraps on negative", () => {
        expect(ceaserCipher("abcd", -3)).toBe("xyza");
    });
    it.skip("works on negative all cases", () => {
        expect(ceaserCipher("EFG", -3)).toBe("BCD");
    });
});
