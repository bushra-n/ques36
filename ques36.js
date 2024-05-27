"use strict";
// Task 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
// should be printed on the shirt. The function should print a sentence summarizing the size of the 
// shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`You order a ${size} shirt that says ${text} `);
}
make_shirt('Medium', '"I love typescript"');
make_shirt('large', '"Fear does not stop death,it stops life"');
