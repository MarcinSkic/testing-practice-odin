import { describe, jest, it, expect } from "@jest/globals";
import capitalize from "../capitalize";

describe("capitalize", () => {
    it("works on all lowercase strings", () => {
        expect(capitalize("cake")).toBe("Cake");
    });

    it("works on all uppercase strings", () => {
        expect(capitalize("CAKE")).toBe("CAKE");
    });

    it("works on one character", () => {
        expect(capitalize("d")).toBe("D");
    });

    it("works on unusual characters", () => {
        expect(capitalize(" d")).toBe(" d");
    });
});
