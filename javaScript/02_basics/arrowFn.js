const user = {
    username: "sagar",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}
// user.welcomeMessage()
// user.username = "saga"
// user.welcomeMessage()
console.log(this);

// function chai() {
//     let username = "moon"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "moon"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "MooN"
    console.log(this);
}
// chai()

// explicit return
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// implicit return 
const addtwo = (num1, num2) => ({ username: "sagar" })

console.log(addtwo(3, 6));

const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
myArray.forEach((element) => {
    console.log(element * element)
});

(function chai() {
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB CONNECTED-2 `)
})();
((name) => {
    console.log(`DB CONNECTED-3 with ${name}`)
})("sagar")