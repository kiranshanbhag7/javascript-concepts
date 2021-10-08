const obj = {
    name: "Ola",
    place: "Bengaluru",
    value: 2,
    someObj: {
        name: "Ag",
        place: "Mumbai"
    },
    array: [{ a: 10 }, { a: 20 }]
}

function deepCloneObject(object) {
    if (!object) return object;
    const clonedObject = {};
    for (let param in object) {
        const value = object[param];
        if (typeof value !== "object") {
            clonedObject[param] = value;
        } else if (Array.isArray(value)) {
            clonedObject[param] = Array.from(value);
        } else {
            clonedObject[param] = deepCloneObject(value);
        }
    }
    return clonedObject;
}

const clonedObject = deepCloneObject(obj);
console.log(clonedObject);
console.log(obj.array[0] === clonedObject.array[0]);