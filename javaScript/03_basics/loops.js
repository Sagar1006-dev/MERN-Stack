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

const arr1 = [1, 2, 3, 4, 5, 6]

for (const num of arr1) {
    console.log(num * 2);
}

// const greetings  = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }
const greetings = "Hello World!";
for (const greet of greetings) {
    if (greet === ' ') {
        console.log("space");
        break; // Break the loop when encountering a space
    }
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('JP', 'Japan');
map.set('FR', 'France');
map.set('DE', 'Germany');
map.set('IN', 'India');


// console.log(map);

// Accessing values by keys
// console.log(map.get('IN')); // Output: India
// console.log(map.get('US')); // Output: United States
// console.log(map.get('UK')); // Output: United Kingdom
// console.log(map.get('JP')); // Output: Japan
// console.log(map.get('FR')); // Output: France
// console.log(map.get('DE')); // Output: Germany

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObject = {
    game1: "NFS",
    game2: "The Legend of Zelda",
    game3: "Grand Theft Auto",
    game4: "FIFA",
    game5: "Call of Duty",
    game6: "Assassin's Creed",
    game7: "Minecraft",
    game8: "Super Mario",
    game9: "Fortnite",
    game10: "League of Legends"
};
for (const key in myObject) {
    console.log(`${key}  is for ${myObject[key]}`);
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);

// } ====> this is not working 

const languages = {
    js: "JavaScript",
    py: "Python",
    java: "Java",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift",
    go: "Go",
    php: "PHP",
    ts: "TypeScript",
    rust: "Rust"
};

for (const key in languages) {
    console.log(`${key} shortcut is for ${languages[key]}`);
}

const Programming = ["js", "rb", "py", "java", "cpp"]
for (const key in Programming) {
    //   console.log(key);
    console.log(Programming[key]);
}

const codding = ["java", "ruby", "python", "js", "cpp"]
codding.forEach((item) => {
    console.log(item);
})

// function printMe(item) {
//     console.log(item);
// }
// codding.forEach(printMe)

codding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
];

console.log(myCoding);
myCoding.forEach((item) => {
    console.log(item.languageName);
})