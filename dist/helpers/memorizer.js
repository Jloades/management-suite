"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memorize = void 0;
exports.memorize = (func) => {
    const cache = new Map();
    const memorizedFunc = (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
    memorizedFunc.cache = cache;
    return memorizedFunc;
};
