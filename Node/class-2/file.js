import fs from "fs"

fs.readFile("./one.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
})
const file = { username: "sagar" };
export { file };


// try {
//     const result = fs.readFileSync('./one.txt', 'utf-8');
//     console.log(result);
// } catch (err) {
//     console.log("Error", err);
// }

// const file = { username:"sagar"};
// export { file };
