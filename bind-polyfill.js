function printName(city, state) {
    console.log(`I am ${this.firstName} ${this.lastName} from ${city}, ${state}`);
}

const user = {
    firstName: "Kiran",
    lastName: "Shanbhag",
}

if (!Function.prototype.customBind) {
    Function.prototype.customBind = function (...args1) {
        const _this = this;
        return function (...args2) {
            _this.call(...args1, ...args2);
        }
    }
}

const printNameBind = printName.bind(user);
printNameBind("Bengaluru", "Karnataka");

const printNameCustomBind = printName.customBind(user, "Shimoga");
printNameCustomBind("Karnataka");