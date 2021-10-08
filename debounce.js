function debounce(func, delay = 200) {
    let timer;
    return function (...args) {
        /* Clear the timer if it is up and running */
        if (timer) {
            clearTimeout(timer);
        }
        /* Run the function callback provided after the required delay */
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const obj = {
    name: "Some Object",
    callback(a, b) {
        console.log(`${this.name} will add ${a} and ${b} and output ${a + b}`);
    }
}

/**
 * Test the debounce utility for global function
 * @type {(function(...[*]=): void)|*}
 */
const dFunction = debounce((a, b) => {
    console.log(`I will add ${a} and ${b} and output ${a + b}`);
});

dFunction(3, 4);    // (1)
dFunction(5, 6);    // (2)
dFunction(7, 8);    // (3)
setTimeout(() => dFunction(1, 2), 200);  // (4)

// (1) & (2) will not run since it would be overridden by (3) and later (4) would run after delay

/**
 * Test the debounce utility for object method
 * @type {(function(...[*]=): void)|*}
 */
const dObjMethod = debounce(obj.callback.bind(obj));

dObjMethod(30, 40);    // (1)
dObjMethod(50, 60);    // (2)
dObjMethod(70, 80);    // (3)
setTimeout(() => dObjMethod(10, 20), 200);  // (4)

// (1) & (2) will not run since it would be overridden by (3) and later (4) would run after delay