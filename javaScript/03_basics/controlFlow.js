// If Statement

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("true");
}
// <, >, <=, >=, ==,!=, ===, !==

if (2 == "2") {
    console.log("executed");
}

const temperature = 41
if (temperature < 50) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000

if (balance > 500) console.log("test");
console.log("text2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}

// switch caase


// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}

const months = "may"

switch (months) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    default:
        break;
}

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values ===>
//     false, 0,-0, BigInt 0n, "", null, undefined, NaN

// if (0) {
//     console.log("This won't be printed because 0 is falsy.");
// }

// if ('hello') {
//     console.log("This will be printed because 'hello' is truthy.");
// }

// truthy values =====>
//     "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15
val1 = null ?? undefined ?? 15
console.log(val1);

// Simulating user preference selection (null or undefined for this example)
let userPreferredLanguage = null;

// Using the nullish coalescing operator to set a default language
let selectedLanguage = userPreferredLanguage ?? "English";

// Displaying the selected language
console.log("Selected language: " + selectedLanguage);

// Function to display user interface based on selected language
function displayUserInterface(language) {
    if (language === "English") {
        console.log("Welcome to our application!");
        console.log("You are now viewing the application in English.");
        // Additional English interface elements and functionalities
    } else if (language === "Spanish") {
        console.log("¡Bienvenido a nuestra aplicación!");
        console.log("Ahora estás viendo la aplicación en español.");
        // Additional Spanish interface elements and functionalities
    }
    // Add more conditions for other languages as needed
}

// Call the function to display the user interface with the selected language
displayUserInterface(selectedLanguage);


// Simulating user preference selection (null or undefined for this example)
let userPreferredTheme = null;

// Using the nullish coalescing operator to set a default theme
let selectedTheme = userPreferredTheme ?? "light";

// Function to apply selected theme to the user interface
function applyTheme(theme) {
    if (theme === "light") {
        console.log("Applying light theme...");
        // Apply light theme styles
    } else if (theme === "dark") {
        console.log("Applying dark theme...");
        // Apply dark theme styles
    }
    // Add more conditions for other themes as needed
}

// Call the function to apply the selected theme
applyTheme(selectedTheme);

// ==========================================================

// Terniary Operator

// constion ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")

// Suppose we have a variable representing a user's age
const userAge = 25;

// We want to determine if the user is eligible for a certain discount based on their age
// Let's say the discount is available for users aged 18 or younger
const discountAvailable = userAge <= 18 ? "Discount available!" : "No discount available.";

// Print the result
console.log(discountAvailable);


// Suppose we have a variable representing a user's age
const userAgeIs = 25;

// We define the original price of an item
const originalPrice = 100;

// We want to determine if the user is eligible for a certain discount based on their age
// Let's say the discount is available for users aged 18 or younger
const discountAvailableIs = userAgeIs <= 18 ? "Discount available!" : "No discount available.";

// Print the result
console.log(discountAvailableIs);

// Now let's apply the discount if it's available
const finalPrice = userAgeIs <= 18 ? 0.8 * originalPrice : originalPrice;

// Print the final price with or without discount
console.log("Final price: $" + finalPrice);


// Simulating weather conditions (true for raining, false for not raining)
const isRaining = Math.random() < 0.5; // Randomly generate true or false

// Ternary operator to determine the message based on weather conditions
const weatherMessage = isRaining ? "Bring an umbrella!" : "Enjoy the sunshine!";

// Display the weather message
console.log(weatherMessage);


// Simulating user input (true for correct credentials, false for incorrect credentials)
const isCorrectCredentials = Math.random() < 0.5; // Randomly generate true or false

// Ternary operator to determine the message based on user credentials
const loginMessage = isCorrectCredentials ? "Login successful! Welcome back!" : "Incorrect username or password. Please try again.";

// Display the login message
console.log(loginMessage);