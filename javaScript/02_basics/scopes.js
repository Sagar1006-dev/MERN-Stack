
// var c = 400
let a = 400
if (true) {
    let a = 100
    const b = 200
    //  var c = 300
    console.log("INNER", a);

}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "saga"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    // two()
}
// one()

if (true) {
    const username = "moon"
    if (username === "moon") {
        const website = ' youtube'
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
// =========================== interesting ====================

console.log(addOne(5));
function addOne(num) {
    return num + 1
}

const addtwo = function (num) {
    return num + 2
}
addtwo(5)

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John

let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    console.log(message);
}

console.log(userName); // John before the function call

showMessage();

console.log(userName)


function showMessage(text) {
    // ...
  
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
  
    console.log(text);
  }
  
  showMessage(); // empty message

  function showCount(count) {
    // if count is undefined or null, show "unknown"
    console.log(count ?? "unknown");
  }
  
  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown

//   function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     console.log( 'Access granted' );
//   } else {
//     console.log( 'Access denied' );
//   }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// rl.question('How old are you? ', function (age) {
//   if (checkAge(age)) {
//     console.log('Access granted');
//   } else {
//     console.log('Access denied');
//   }

//   rl.close();
// });

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
  );

  let age = prompt("What is your age?", 18);

