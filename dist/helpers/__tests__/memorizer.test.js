"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memorizer_1 = require("../memorizer");
describe('memorizedFunc', () => {
    it('should cache and return memorized values', () => {
        const originalFunction = jest.fn((x, y) => x + y);
        const memoizedFunction = (0, memorizer_1.memorize)(originalFunction);
        const result1 = memoizedFunction(2, 3);
        const result2 = memoizedFunction(2, 3);
        const result3 = memoizedFunction(2, 3);
        expect(originalFunction).toHaveBeenCalledTimes(1);
        expect(result1).toBe(result2);
        expect(result2).toBe(result3);
    });
    it('should calculate and cache different values for different arguments', () => {
        const originalFunction = jest.fn((x, y) => x + y);
        const memorizedFunction = (0, memorizer_1.memorize)(originalFunction);
        const result1 = memorizedFunction(2, 3);
        const result2 = memorizedFunction(4, 5);
        expect(originalFunction).toHaveBeenCalledTimes(2);
        expect(result1).toBe(5);
        expect(result2).toBe(9);
    });
});
