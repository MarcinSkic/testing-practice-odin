import { describe, jest, it, expect } from "@jest/globals";
import calculator from "../calculator";

describe("calculator", () => {
    describe("add", () => {
        it("works on trivial example", () => {
            expect(calculator.add(2, 2)).toBe(4);
        });

        it("works on bigger numbers", () => {
            expect(calculator.add(1234, 23)).toBe(1257);
        });

        it("with string gives NaN", () => {
            expect(calculator.add("23", "31")).toBeNaN();
        });

        it("works with floats", () => {
            expect(calculator.add(54.334, 21.3)).toBeCloseTo(75.634);
        });
    });

    describe("subtract", () => {
        it("works on trivial example", () => {
            expect(calculator.subtract(2, 2)).toBe(0);
        });

        it("works on bigger numbers", () => {
            expect(calculator.subtract(1234, 23)).toBe(1211);
        });

        it("with string gives NaN", () => {
            expect(calculator.subtract("23", "31")).toBeNaN();
        });

        it("works with floats", () => {
            expect(calculator.subtract(54.334, 21.3)).toBeCloseTo(33.034);
        });
    });

    describe("multiply", () => {
        it("works on trivial example", () => {
            expect(calculator.multiply(2, 2)).toBe(4);
        });

        it("works on bigger numbers", () => {
            expect(calculator.multiply(1234, 23)).toBe(28382);
        });

        it("with string gives NaN", () => {
            expect(calculator.multiply("23", "31")).toBeNaN();
        });

        it("works with floats", () => {
            expect(calculator.multiply(54.334, 21.3)).toBeCloseTo(1157.3142);
        });
    });

    describe("divide", () => {
        it("works on trivial example", () => {
            expect(calculator.divide(2, 2)).toBe(1);
        });

        it("works on bigger numbers", () => {
            expect(calculator.divide(1234, 23)).toBeCloseTo(53.65217391);
        });

        it("with string gives NaN", () => {
            expect(calculator.divide("23", "31")).toBeNaN();
        });

        it("works with floats", () => {
            expect(calculator.divide(54.334, 21.3)).toBeCloseTo(2.550892019);
        });

        it("divides by zero JavaScript style!", () => {
            expect(calculator.divide(54.334, 0)).toBe(Infinity);
        });
    });
});
