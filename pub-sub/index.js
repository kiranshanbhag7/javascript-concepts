const { subscribe, publish } = require("./pub-sub");

const clickRef1 = subscribe("click", data => {
    console.log("Got click event for data :: ", data);
});

const clickRef2 = subscribe("click", data => {
    console.log("Got another click event for data :: ", data);
});

const clickRef3 = subscribe("click", data => {
    console.log("This event won't be noticed");
});

clickRef3.unsubscribe();

const hoverRef = subscribe("hover", data => {
    console.log("Got hover event for data :: ", data);
});


/**
 * Let's publish the events to verify the subscription
 */

/* Simulate the click event */
publish("click", "Div was clicked");

/* Simulate the hover event */
publish("hover", "Div was hovered");