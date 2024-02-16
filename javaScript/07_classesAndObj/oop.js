const user = {
    username: "Saga",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user detail from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${ths.username}`);
    }

    return this
}

const userOne = new User("sagar", 12, true)
const userTwo = new User("Moon", 13, false)
console.log(userOne.constructor);
// console.log(userTwo);

// new ====>
// steps 
// 1 -> Empty object create hota hai 
// 2 -> constructor function call hota hai new keyword ke karan 
// 3 -> this keyword inject hota hai 
// 4 -> 

// Define a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Create an instance of Car
var myCar = new Car('Toyota', 'Camry');

// Check if myCar is an instance of Car
console.log(myCar instanceof Car); // Output: true

// Check if myCar is an instance of Object
console.log(myCar instanceof Object); // Output: true (since all objects inherit from Object)

// Check if myCar is an instance of Date (which it isn't)
console.log(myCar instanceof Date); // Output: false
