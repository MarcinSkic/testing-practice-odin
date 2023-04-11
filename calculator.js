const calculator = (function () {
    function add(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return NaN;
        return a + b;
    }

    function subtract(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return NaN;
        return a - b;
    }

    function multiply(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return NaN;
        return a * b;
    }

    function divide(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return NaN;
        return a / b;
    }

    return {
        add,
        subtract,
        multiply,
        divide,
    };
})();

export default calculator;
