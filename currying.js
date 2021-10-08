/**
 * Currying :: sum(1)(2)(3)()
 * @param a
 * @returns {(function(*=): (*))|*}
 */
function sum(a) {
    return function (b) {
        if (!b) return a;
        else return sum(a + b);
    }
}

console.log("sum(1)(2)(3)() :: ", sum(1)(2)(3)());

/**
 * Currying: Generic curry wrapper
 * @param func
 * @returns {(function(...[*]=): (*))|*}
 */
function curry(func) {
    return function curried(...args) {
        /* If the arguments passed are exact as compared with the function's parameters count, then execute the function */
        if (args.length >= func.length) {
            return func.apply(this, args);
        /* If the arguments passed are less than the function's parameters count,
           then return a closure function with passing all the arguments to the curried wrapper function */
        } else {
            return function (...rArgs) {
                return curried.apply(this, [...args, ...rArgs]);
            }
        }
    }
}

function multiplyNArgs(...args) {
    const operands = Array.from(args);
    return operands.reduce((acc, item) => item * acc, 1);
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log("curriedMultiply(2)(6)(3) :: ", curriedMultiply(2)(6)(3));