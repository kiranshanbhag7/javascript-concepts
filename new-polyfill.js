function customNew(func, ...args) {
    const newObject = {};
    if (func.prototype !== null) {
        newObject.__proto__ = func.prototype;
    }
    const returnValue = func.apply(newObject, args);
    if (returnValue !== null && (typeof returnValue === "function" || typeof returnValue === "object")) {
        return returnValue;
    }
    return newObject;
}

function Person(name) {
    this.name = name;
}

const john = new Person("John");
const doe = customNew(Person, "Doe");

console.log(john instanceof Person);
console.log(doe instanceof Person);

