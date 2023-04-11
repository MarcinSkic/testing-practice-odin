export default function analyzeArray(array = []) {
    return {
        average: array.reduce((acc, el) => (acc += el), 0) / array.length,
        length: array.length,
        min: Math.min(...array),
        max: Math.max(...array),
    };
}
