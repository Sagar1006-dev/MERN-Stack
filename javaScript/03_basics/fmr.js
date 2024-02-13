const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item
})
// console.log(values);

//Filter

const myNums = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10]

// const newNums = myNums.filter((item) => (item > 5))
// console.log(newNums);

const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        publishYear: 2011,
        editionYear: 2018
    },
    {
        title: "A Short History of Nearly Everything",
        genre: "Science",
        publishYear: 2003,
        editionYear: 2017
    },
    {
        title: "The Communist Manifesto",
        genre: "Politics",
        publishYear: 1848,
        editionYear: 2016
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishYear: 1937,
        editionYear: 2014
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        publishYear: 1965,
        editionYear: 2019
    },
    {
        title: "Guns, Germs, and Steel: The Fates of Human Societies",
        genre: "History",
        publishYear: 1997,
        editionYear: 2018
    },
    {
        title: "Foundation",
        genre: "Science Fiction",
        publishYear: 1951,
        editionYear: 2010
    },
    {
        title: "The Prince",
        genre: "Politics",
        publishYear: 1532,
        editionYear: 2014
    },
    {
        title: "A Game of Thrones",
        genre: "Fantasy",
        publishYear: 1996,
        editionYear: 2011
    },
    {
        title: "The Rise and Fall of the Third Reich",
        genre: "History",
        publishYear: 1960,
        editionYear: 2011
    },
    {
        title: "The Odyssey",
        genre: "History",
        publishYear: 1935,
        editionYear: 2016
    },
    {
        title: "The War of the Worlds",
        genre: "Science Fiction",
        publishYear: 1898,
        editionYear: 2015
    },
    {
        title: "The Wealth of Nations",
        genre: "Politics",
        publishYear: 1776,
        editionYear: 2013
    },
    {
        title: "Brave New World",
        genre: "Science Fiction",
        publishYear: 1932,
        editionYear: 2015
    },
    {
        title: "Lord of the Flies",
        genre: "Literature",
        publishYear: 1954,
        editionYear: 2019
    },
    {
        title: "Animal Farm",
        genre: "Politics",
        publishYear: 1945,
        editionYear: 2017
    },
    {
        title: "The Art of War",
        genre: "Politics",
        publishYear: 1920,
        editionYear: 2012
    },
    {
        title: "Jurassic Park",
        genre: "Science Fiction",
        publishYear: 1990,
        editionYear: 2018
    },
    {
        title: "The Shining",
        genre: "Horror",
        publishYear: 1977,
        editionYear: 2013
    },
    {
        title: "The Chronicles of Narnia",
        genre: "Fantasy",
        publishYear: 1950,
        editionYear: 2014
    },
    {
        title: "The God Delusion",
        genre: "Science",
        publishYear: 2006,
        editionYear: 2016
    },
    {
        title: "The Art of Happiness",
        genre: "Psychology",
        publishYear: 1998,
        editionYear: 2017
    },
    {
        title: "Fahrenheit 451",
        genre: "Science Fiction",
        publishYear: 1953,
        editionYear: 2016
    },
    {
        title: "The Iliad",
        genre: "Poetry",
        publishYear: 1950,
        editionYear: 2015
    },
    {
        title: "The Martian",
        genre: "Science Fiction",
        publishYear: 2011,
        editionYear: 2015
    },
    {
        title: "The Outsiders",
        genre: "Young Adult",
        publishYear: 1967,
        editionYear: 2018
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery",
        publishYear: 2003,
        editionYear: 2014
    },
    {
        title: "The Catcher in the Rye",
        genre: "Literature",
        publishYear: 1951,
        editionYear: 2016
    },
    {
        title: "The Stand",
        genre: "Horror",
        publishYear: 1978,
        editionYear: 2011
    },
    {
        title: "The Girl with the Dragon Tattoo",
        genre: "Thriller",
        publishYear: 2005,
        editionYear: 2015
    }
];

// const myBooks = books.filter((item) => (item.publishYear > 1920))
// console.log(myBooks);
// const myBooks = books.filter((item) => (item.genre = "History" && item.publishYear >=1937))
// console.log(myBooks);
const myBooks = books.filter((item) => (item.editionYear >= 2000 && item.publishYear >= 1937))
// console.log(myBooks);

//Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbs = myNumbers.map((num) => (num * 10))
console.log(newNumbs);

const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 10)
console.log(newNumbers);

// Reduce 

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

const myN = [1, 2, 3, 4]
const myT = myN.reduce(function (acc, curr) {
    console.log(`acc: ${acc} and currVa: ${curr}`);
    return acc + curr
}, 0)
console.log(myT);

const total = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const Rtotal = total.reduce((acc, cur) => {
    console.log(`acc: ${acc} and curVal: ${cur}`);
    return acc + cur
}, 0)
console.log(Rtotal);

const shoppingCart = [
    { name: "T-shirt", price: 150 },
    { name: "Jeans", price: 290 },
    { name: "Socks", price: 50 },
    { name: "Hat", price: 120 },
    { name: "Gloves", price: 90 },
    { name: "Scarf", price: 140 },
    { name: "Sunglasses", price: 190 },
    { name: "Belt", price: 170 },
    { name: "Watch", price: 490 },
    { name: "Backpack", price: 390 }
];

const totalRupees = shoppingCart.reduce((acc, cur) => {
    console.log(`acc: ${acc} and curVal: ${cur.price}`);
    return acc + cur.price;
}, 0);

console.log(totalRupees);


