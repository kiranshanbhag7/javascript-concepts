function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = args.join(",");
        console.log("Parameters received :: ", key);
        if (cache[key]) {
            console.log("Result found in the cache");
            return cache[key];
        }
        console.log("Cache miss :: Calculating result and inserting in cache");
        cache[key] = func.apply(this, args);
        return cache[key];
    }
}

function multiply(a, b) {
    return a * b;
}

function addition(a, b) {
    return a + b;
}

/* Memoization of multiply function */
const memoizedMultiply = memoize(multiply);

/* Memoization of addition function */
const memoizedAddition = memoize(addition);

memoizedMultiply(2, 5);    // Cache miss
memoizedMultiply(2, 5);    // Cache hit

memoizedAddition(20, 50);    // Cache miss
memoizedAddition(30, 60);    // Cache miss
memoizedAddition(20, 50);    // Cache hit