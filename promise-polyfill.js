class CustomPromise {
    constructor(executor) {
        this.STATE = {
            PENDING: "pending",
            RESOLVED: "resolved",
            REJECTED: "rejected"
        }
        this.state = this.STATE.PENDING;
        this.value = null;

        const resolve = value => {
            this.state = this.STATE.RESOLVED;
            this.value = value;
            this.thenCB && this.thenCB(this.value);
        }
        const reject = error => {
            this.state = this.STATE.REJECTED;
            this.value = error;
            this.catchCB && this.catchCB(this.value);
        }
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
        return this;
    }

    then(callback) {
        this.thenCB = callback;
        return this;
    }

    catch(callback) {
        this.catchCB = callback;
        return this;
    }
}

const promise = new CustomPromise((resolve, reject) => {
    const isSuccess = true;
    setTimeout(() => {
        if (isSuccess) resolve("SUCCESS");
        else reject("FAILURE");
    }, 800);
});
promise
    .then(data => console.log("then callback :: ", data))
    .catch(e => console.log("catch callback :: ", e));
