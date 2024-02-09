// for loop

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }

}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

// Array of temperature readings for the past week
const temperatures = [22, 25, 24, 26, 23, 27, 26];

// Variable to store the sum of temperatures
let sum = 0;

// Loop through each temperature reading in the array
for (let i = 0; i < temperatures.length; i++) {
    // Add the current temperature to the sum
    sum += temperatures[i];
}

// Calculate the average temperature
const averageTemperature = sum / temperatures.length;

console.log(`Average temperature for the week: ${averageTemperature}°C`);

// Function to generate a multiplication table for a given number
function generateMultiplicationTable(number) {
    // Iterate from 1 to 10 using a for loop
    for (let i = 1; i <= 10; i++) {
        // Multiply the current number by the iteration index to get the result
        const result = number * i;
        // Print the multiplication expression and result
        console.log(`${number} * ${i} = ${result}`);
    }
}

// Generate a multiplication table for the number 7
generateMultiplicationTable(7);

//break and continue 

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);

}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);

}

// ===============================================================

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray1 = ['Flash', 'batman', 'superman']

let arr = 0
while (arr < myArray1.length) {
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

// do while

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);