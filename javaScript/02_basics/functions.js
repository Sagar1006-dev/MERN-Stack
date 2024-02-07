// functions in javaScript

function sayMyname() {
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}
// sayMyname()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return (num1 + num2)

}
const result1 = addTwoNumbers(1, 3)
console.log(`Result is  ${result1}`);

// Function Declaration:

function greet(name) {
    console.log("Hello, " + name + "!");
}

// Example usage:
greet("John")

// Arrow Function:

const add = (a, b) => a + b;

// Example usage:
const result = add(5, 3);
console.log(result); // Output: 8

// Anonymous Function:
const square = function (num) {
    return num * num;
};

// Example usage:
const squaredValue = square(4);
console.log(squaredValue); // Output: 16

// Callback Function:
function calculate(operation, a, b, callback) {
    const result = operation(a, b);
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}
// Example usage:
calculate((x, y) => x * y, 3, 4, displayResult);

// Recursive Function:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
const factResult = factorial(5);
console.log(factResult); // Output: 120

// Higher-Order Function:

function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

// Example usage:
const double = multiplyBy(2);
console.log(double(7)); // Output: 14

// IIFE (Immediately Invoked Function Expression):

(function () {
    console.log("This is an IIFE!");
})();

// Generator Function:

function* generateNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// Example usage:
const numberGenerator = generateNumbers();
console.log(numberGenerator.next().value); // Output: 0
console.log(numberGenerator.next().value); // Output: 1



function loginUserMessage(username = "saga") {
    if (!username) {
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("SAGAR"));
console.log(loginUserMessage("Moon"));

// =======================================
function calculateCartPrice(val1, val2, ...num1) {
    return num1

}
console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "Sagar",
    price: 199
}
function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "saga",
    price: 399
})

const user2 = {
    username: "sagar",
    email: "sagar@gmail.com",
    password: "123abc"
}
function myUser2(newObj) {
    console.log(`username is ${newObj.username} and email is ${newObj.email} and password is ${newObj.password}`)
}
myUser2(user2)

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondvalue(getArray) {
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 300, 500, 600]));

// =======================================================
// Immediately Invoked Function Expressions (IIFE)

(function chai(prams) {
    console.log("DB Connected");
})();  //named IIFE

// (function defination)(function exicution)

( (name) =>{
    console.log(`DB Connected2 ${name}`);
})("Saga")  //unNamed IIFE

