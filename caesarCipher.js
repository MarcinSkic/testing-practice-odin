export default function ceaserCipher(string = "", shift) {
    return [...string].reduce((acc, el) => {
        let resultCode = charCode;
        let charCode = el.charCodeAt(0);
        if (charCode >= 97) {
            resultCode = ((charCode + shift - 97) % 26) + 97;
        } else if (charCode >= 65) {
            resultCode = ((charCode + shift - 65) % 26) + 65;
        }
        return (acc += String.fromCharCode(resultCode));
    }, "");
}
