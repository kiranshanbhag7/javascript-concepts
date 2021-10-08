const subscribers = {};

module.exports = {
    subscribe(event, subscriber) {
        if (!subscribers[event]) {
            subscribers[event] = [];
        }
        subscribers[event].push(subscriber);
        console.log("Subscriber registered successfully for event :: ", event);
        return {
            unsubscribe() {
                const index = subscribers[event].findIndex(sub => subscriber === sub);
                if (index !== -1) {
                    subscribers[event].splice(index, 1);
                    console.log("Unsubscribed subscriber successfully for event :: ", event);
                }
            }
        };
    },
    publish(event, data) {
        for (let i = 0; i < subscribers[event].length; i++) {
            subscribers[event][i](data);
        }
    }
}