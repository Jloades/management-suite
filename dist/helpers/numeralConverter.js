"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arabicToRoman = void 0;
const arabicToRoman = (num) => {
    const romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    };
    var romanNumeral = ((num <= 0) ? 'Number Must Be Greater than 0' : '');
    for (const key of Object.keys(romanNumerals).map(Number).sort((a, b) => b - a)) {
        while (num >= key) {
            romanNumeral += romanNumerals[key];
            num -= key;
        }
    }
    return romanNumeral;
};
exports.arabicToRoman = arabicToRoman;
