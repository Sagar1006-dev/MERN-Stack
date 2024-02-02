let score = 33
console.log(typeof score);

// DataTypes 
// primitive 
// String
// Number,
// Boolean,
// BigInt
// null
// undefined
// Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof id);
console.log(typeof anotherId);

const bigNumber = 32324242424n
console.log(typeof bigNumber);

// javaScript =>JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you don't have to explicitly declare the type of a variable when you declare it. The type of a variable can change during the execution of the program.
// const score1= 100

// non-primitive -> Reference
// Array
// Object
// Function
const heros = ["Shaktiman", "Nagraj", "Dogra"];

let myObj = {
    name: "Sagar",
    age: 22,
    isActive: true

}
const myfun = function () {
    console.log("Hello World!");
}
myfun()

// ===========================================================

// Stack , Heap  Memory 

// Stack used in Primitive Type =>  it gives Copy of variable 
// Heap used in Nn-Primitive Type => it gives Reference of original value that means jo bhi change karenge o original value me change hoga 

// Stack aur Heap Memory:

// Stack: Ye woh jagah hai jahan primitive types ka data store hota hai. Jab hum kisi primitive type ki value declare karte hain, to stack me ek copy ban jati hai. Jaise hi aap koi variable create karte hain, ek small space stack me allocate hota hai aur usme value store ho jati hai. Stack ka use mainly function calls aur local variables ke liye hota hai.

// Example:

// javascript
// Copy code
// let num1 = 5;  // num1 ki value 5 stack me store hogi
// Heap: Ye jagah non-primitive types (objects, arrays, functions) ke liye hoti hai. Jab hum kisi non-primitive type ka variable create karte hain, to stack me uske liye ek reference (address) create hota hai, lekin actual data heap me store hota hai. Agar aap kisi non-primitive type ki value change karte hain, to wo change original value me reflect hota hai, kyunki aap stack me sirf reference store kar rahe hain, data heap me pada hua hai.

// Example:

// javascript
// Copy code
// let arr1 = [1, 2, 3];  // arr1 stack me reference store karegi, lekin actual array data heap me hoga

// let arr2 = arr1;  // arr2 ko bhi arr1 ka reference mila, dono stack me same address ko point karte hain

// arr2.push(4);  // jab arr2 me change hota hai, to actual array data heap me change hota hai

// console.log(arr1);  // Output: [1, 2, 3, 4], kyunki arr1 bhi arr2 ki tarah hi reference share kar rahi hai
// Stack ka use jyadatar fast access ke liye hota hai, jabki heap dynamic data storage ke liye use hota hai, jisse aap easily data ko manage aur modify kar sakte hain.

