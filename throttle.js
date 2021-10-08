function throttle(func, threshold = 1000) {
    let isBusy = false;
    let savedArgs;
    let savedCtx;
    return function wrapper(...args) {
        /* If the call was received within the prescribed threshold, save the args to run it once threshold interval is crossed */
        if (isBusy) {
            savedArgs = args;
            savedCtx = this;
        /* If the call was received once threshold interval was crossed, execute it */
        } else {
            isBusy = true;
            func.apply(this, args);
            setTimeout(() => {
                isBusy = false;
                if (savedArgs) {
                    /* Run the closure function again to run the last call received in the interval */
                    wrapper.apply(savedCtx, savedArgs);
                    savedCtx = savedArgs = null;
                }
            }, threshold);
        }
    }
}

const throttledFunction = throttle((a, b) => {
    console.log(`I will add ${a} and ${b} and output ${a + b}`);
});

throttledFunction(13, 11);
throttledFunction(54, 14);
throttledFunction(65, 98);
setTimeout(() => throttledFunction(19, 53), 2000);
setTimeout(() => throttledFunction(18, 52), 2500);
