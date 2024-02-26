function multiplayBy5(num) {
    return num * 5
}
multiplayBy5.power = 2
console.log(multiplayBy5(5));
console.log(multiplayBy5.power);
console.log(multiplayBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()

// let myName = "SAgara    "
// let myChannel = "moon    "
// console.log(myName.truelength);

let myHeros = ["thor", "Spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.sagar = function () {
    console.log(`Sagar is present in all objects`);
}

Array.prototype.heySagar = function () {
    console.log(`Sagar says hello`);
}
// heroPower.sagar()
myHeros.sagar()
myHeros.heySagar()

// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// teacher.__proto__ = User

// mordern syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"Sagar".trueLength()
"iceTea".trueLength()

// this==>current execution context