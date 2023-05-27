type MemorizedFunction<T extends (...args: any[]) => any> = T & { cache: Map<string, ReturnType<T>> };

export const memorize = <T extends (...args: any[]) => any>(func: T): MemorizedFunction<T> => {
  const cache: Map<string, ReturnType<T>> = new Map();

  const memorizedFunc = (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  };

  memorizedFunc.cache = cache;
  return memorizedFunc as MemorizedFunction<T>;
};
