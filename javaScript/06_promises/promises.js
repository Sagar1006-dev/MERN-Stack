// fetch("https://something.com"),then().catch().finally()

const promiseOne = new Promise((resolve, reject) => {
    //Do an async task 
    // DB calls crypypgraphy, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000)

})
promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise 2 consumed");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@gmail.com" })

    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);

})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Saga", password: "123" })
        } else {
            reject("ERROR:Something went wrong")
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("the promise is eiter resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "JAVASCRIPT", password: "123" })
        } else {
            reject("ERROR: js went wrong")
        }
    }, 1000)
})
const consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
consumePromiseFive()

const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve("DO some coding")
        } else {
            reject("or die")
        }
    }, 1000)
})

const newOne = async () => {
    try {
        const response = await promiseSix
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
newOne()

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.ypicode.com/users")
        const data = await response.json()
    } catch (error) {
        console.log("E", error);
    }
}

getAllUsers()


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         return data; // Return the parsed JSON data
//     } catch (error) {
//         console.error("Error:", error);
//         throw error; // Rethrow the error for further handling if necessary
//     }
// }

// getAllUsers()
//     .then(users => {
//         console.log("Users:", users); // Do something with the list of users
//     })
//     .catch(error => {
//         console.error("Error fetching users:", error);
//     });

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()

    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);

    })