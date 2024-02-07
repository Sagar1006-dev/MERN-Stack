// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
console.log(myDate.toJSON());


// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23, 5,3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",
    
})

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)

let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(date);

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
const newDateIs = new Date(2012, 1, 20, 3, 12);
console.log(newDateIs);