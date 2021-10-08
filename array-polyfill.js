
/* Polyfill for forEach function */
if (!Array.prototype.customForEach) {
    Array.prototype.customForEach = function (func) {
        for (let i = 0; i < this.length; i++) {
            func(this[i], i, this);
        }
    }
}

/* Polyfill for map function */
if (!Array.prototype.customMap) {
    Array.prototype.customMap = function (func) {
        const mappedArray = [];
        for (let i = 0; i < this.length; i++) {
            mappedArray.push(func(this[i], i, this));
        }
        return mappedArray;
    }
}

/* Polyfill for filter function */
if (!Array.prototype.customFilter) {
    Array.prototype.customFilter = function (func) {
        const filteredArray = [];
        for (let i = 0; i < this.length; i++) {
            if (func(this[i], i, this)) {
                filteredArray.push(this[i]);
            }
        }
        return filteredArray;
    }
}

/* Polyfill for reduce function */
if (!Array.prototype.customReduce) {
    Array.prototype.customReduce = function (func, initialValue) {
        let accValue = initialValue || 0;
        for (let i = 0; i < this.length; i++) {
            accValue = func(accValue, this[i], i, this);
        }
        return accValue;
    }
}

const array = [10, 20, 30, 40, 50];

/* Custom forEach */
array.customForEach((item, index, host) => console.log("Item ::", item, index, host));

/* Custom map */
console.log(array.customMap(item => item * 10));

/* Custom filter */
console.log(array.customFilter(item => item === 40));

/* Custom reduce */
console.log(array.customReduce((acc, item) => item + acc));
