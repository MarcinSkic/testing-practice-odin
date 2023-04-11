export default function reverseString(string = "") {
    const length = string.length;
    const chars = [...string];
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.pop();
    }

    return result;
}
