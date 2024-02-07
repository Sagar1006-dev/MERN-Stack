// array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myHeors = ["saktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2);
console.log(myArr);


myArr.push(11)
myArr.push(12)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(-1)

console.log(myArr);
// myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(12));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log("slice", myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("splice", myn2);
console.log("C ", myArr);

// ================================================================

const marval_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[3][1]);
// const all_heros = marval_heros.concat(dc_heros)
// console.log(all_heros);
const all_heros = [...marval_heros,...dc_heros]
console.log(all_heros);

const another_array = [1,2,3,4,[5,6,7,8],9,[10,11,[12,13]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("SAGAR"));
console.log(Array.from("SAGAR"));
console.log(Array.from({name:"SAGAR"})); // interesting 

let Score1 = 100
let Score2 = 200
let Score3 = 300

console.log(Array.of(Score1,Score2,Score3));

// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[fruits.length-1]);// Plum

let fruits = ["Apple", "Orange", "Plum"];
for (let fruit of fruits) {
    console.log(fruit);
  }

// same as fruits[fruits.length-1]
// console.log( fruits.at(-1) ); // Plum

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i] );
}

let arr1 = ["Apple", "Orange", "Pear"];


for (let key in arr) {
  console.log( arr1[key] ); // Apple, Orange, Pear
}

let arr11 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr11.splice(0, 3, "Let's", "dance");

console.log( arr11 ) // now ["Let's", "dance", "right", "now"]

let arr12 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr12.splice(2, 0, "complex", "language");

console.log( arr12 ) // "I", "study", "complex", "language", "JavaScript"

let arr13 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr13.splice(-1, 0, 3, 4);

console.log( arr13 ) // 1,2,3,4,5