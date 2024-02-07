// singleton
Object.create

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "sagar",
    age: 20,
    "full name": "sagar muneshwar",
    [mySym]: "mykey1",
    location: "nagpur",
    email: "sagar@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]); // This should output 'string' because you are accessing the value associated with the Symbol.
console.log(typeof mySym); // This should output 'symbol' because you are checking the type of the Symbol variable itself.
console.log(typeof mySym === 'symbol');

jsUser.email = "sagar@chatgpt.com"
console.log(jsUser.email);
// Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Js User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingTwo());

// ====================================================
// const tinderUser  = new Object()  //Singleton Object
const tinderUser = {}   // non-singleton Object


tinderUser.id = "123abcs"
tinderUser.name = "Saga"
tinderUser.isLogedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        username: {
            userFullnam: {
                firstname: "Sagar",
                lastname: "Muneshwar"
            }
        }
    }
}

// console.log(regularUser.fullName.username.firstname);


const obj1 = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" };
const obj2 = { 4: "D", 5: "E", 6: "F", 7: "G", 8: "H" };
const obj3 = { 7: "G", 8: "H", 9: "I", 10: "J", 11: "K" };
const obj4 = { 13: "M", 14: "N", 15: "O", 16: "P", 17: "Q" };
const obj5 = { 19: "S", 20: "T", 21: "U", 22: "V", 23: "W" };

// const object = {obj1, obj2}
const object1 = Object.assign({}, obj1, obj2)
console.log(object1);

const myobj = { ...obj1, ...obj2, ...obj3, ...obj4, ...obj5 }
console.log(myobj);

const users = [
    {
        id: 1,
        email: "user@user.com"
    },
    {
        id: 2,
        email: "user@user.com"
    },
    {
        id: 3,
        email: "user@user.com"
    },
    {
        id: 4,
        email: "user@user.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogedIn"));

//========================================================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sagar"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(compay = "sagar")

// {
//     "name": "sagar",
//     "coursename": "js in hindi",
//     "price": "free"

// }


let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    // console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log(user[key]); // John, 30, true
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}


let user1 = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user1) {
    clone[key] = user1[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  console.log( user1.name ); // still John in the original object

  function makeUser() {
    return {
      name: "moon",
      ref() {
        return this;
      }
    };
  }
  
  let userr = makeUser();
  
  console.log( userr.ref().name ); // John