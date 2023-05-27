import { arabicToRoman } from '../numeralConverter';
describe('arabicToRoman', () => {
    it.each([
        [2,'II'],
        [17, 'XVII'],
        [23, 'XXIII'],
        [564, 'DLXIV'],
        [2023, 'MMXXIII'],
        [0, 'Number Must Be Greater than 0'],
        [-50, 'Number Must Be Greater than 0'],
        [9999, 'MMMMMMMMMCMXCIX']
    ])('Given a request providing the number %s, I should get back %s', (number,expected) => {
        const result = arabicToRoman(number);
    
        expect(result).toBe(expected);
    });
  });
