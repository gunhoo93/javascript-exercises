function Wheel(size, begin = 0) {
    return {
        spinFrom(from, n) {
            if (from < begin || from > begin + size) {
                throw Error(`Cycle should start between ${begin} and ${begin + size}`);
            }
            const cycles = size + 1;
            const offset = (cycles + n) % cycles; // Enables reverse spin when n < 0
            return (from + offset - begin) % cycles + begin;
        }
    };
}

const caesar = function (str, n) {
    const isUpper = ch => ch === ch.toUpperCase();
    const notLetter = (ch) => /[^a-zA-Z]/.test(ch);
    const codeFor = (ch) => ch.charCodeAt();

    const encode = n => ch => {
        if (notLetter(ch)) {
            return ch;
        }
        const wheel = Wheel(
            size = 25, // number of alphabets
            baseValue = isUpper(ch) ? codeFor('A') : codeFor('a'));

        return String.fromCharCode(wheel.spinFrom(codeFor(ch), n));
    };

    return Array.from(str).map(encode(n)).join('');
};

// Do not edit below this line
module.exports = caesar;
