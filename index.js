// console.log("hello world")
// function transformToObjects(numberArray) {
//     // Use the map method to transform each number into an object
//     const objects = numberArray.map(function (number) {
//         // Return an object with the 'val' key and the number as its value
//         return { val: number };
//     });

//     // Return the array of objects
//     return objects;
// }

// // Example usage:
// const inputArray = [1, 2, 3];
// const transformArray = transformToObjects(inputArray);

// console.log(transformArray); // Output: [{val: 1}, {val: 2}, {val: 3}]

// const { name: username, age } = {
//     name: "sagar",
//     age: 32
// }
// console.log(username);
// console.log(age);

// Destructuring in Function Parameter Lists
// The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

// For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

// Here's an example:

// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }
// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

// function storeOrder({id, currency}) { // destructuring
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }
// The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

// Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

// It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

// The function would still be called like this:

// storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!

// function handleTimeOut() {
//     console.log("Timed out!");
// }

// const handleTimeOut2 = () => {
//     console.log("Timed out... again!");
// }

// setTimeout(handleTimeOut, 2000)
// setTimeout(handleTimeOut2, 3000)
// setTimeout(() => {
//     console.log("More timing out....");
// }, 4000)

// function greeter(greetfn) {
//     greetfn()
// }
// greeter(() => console.log("HI"))

let a;
a = 10;
console.log(a);
b = 11;
var b;
console.log(b);
c = 12;
let c;
console.log(c);
let d;
console.log(d);
 d = 13;