const name = "sagar"
const repCount = 50

// console.log(name + repCount + " value");
console.log(`Hello my name is ${name.toUpperCase()}  & repo count is ${repCount}`);


const gameName = new String("Moon-Saga")
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.indexOf("n"));
console.log(gameName.charAt(3));

const newString = gameName.substring(0,4)
console.log(newString);

const antherString = gameName.slice(-8,4)
console.log(antherString);

const newStringOne = '     sagar    '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sagar.com/sagar%20moon"
console.log(url.replace('%20', "-"));

console.log(url.includes('moon'));
console.log(url.includes('sagm'));

console.log(gameName.split("-"));