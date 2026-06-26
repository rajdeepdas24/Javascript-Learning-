const marvelHeros = ["spiderman", "IronMan", "Hulk", "Thor"]
const dcHeros = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// const heros = marvelHeros.concat(dcHeros)

// console.log(heros); 

const newHeros =  [...marvelHeros, ...dcHeros] //alternate method to add or combine two arrays
// console.log(newHeros);


const anotherArr = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

const realArr = anotherArr.flat(Infinity)
console.log(realArr);

console.log(Array.isArray("Rajdeep")) //checks if this is an array
console.log(Array.from("Rajdeep")) //converts the string into array
console.log(Array.from({Name : "Rajdeep", age : 22})); //interesting

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// # 📘 JavaScript Arrays (Part 2)

```javascript
// ======================================================
// 📘 JavaScript Arrays (Part 2)
// ======================================================


// ======================================================
// Combining Arrays
// ======================================================

const marvelHeros = [
    "Spiderman",
    "IronMan",
    "Hulk",
    "Thor"
];

const dcHeros = [
    "SuperMan",
    "Flash",
    "BatMan"
];




// ======================================================
// push()
// ======================================================

// push() adds an element at the END.
//
// If we push one array into another,
// the entire array becomes a single element.

marvelHeros.push(dcHeros);

console.log(marvelHeros);

// Output:
//
// [
//   "Spiderman",
//   "IronMan",
//   "Hulk",
//   "Thor",
//   ["SuperMan","Flash","BatMan"]
// ]

// Notice:
//
// dcHeros becomes ONE element,
// not individual elements.


// Reset arrays before next examples.





// ======================================================
// concat()
// ======================================================

// concat() combines two arrays.
//
// Returns a NEW array.
//
// Original arrays remain unchanged.

const heroes = marvelHeros.concat(dcHeros);

console.log(heroes);

// Output:
//
// [
// "Spiderman",
// "IronMan",
// "Hulk",
// "Thor",
// "SuperMan",
// "Flash",
// "BatMan"
// ]




// ======================================================
// Spread Operator (...)
// ======================================================

// Modern way to combine arrays.
//
// Recommended over concat().

const newHeros = [
    ...marvelHeros,
    ...dcHeros
];

console.log(newHeros);

// Output:
//
// [
// "Spiderman",
// "IronMan",
// "Hulk",
// "Thor",
// "SuperMan",
// "Flash",
// "BatMan"
// ]




// ======================================================
// flat()
// ======================================================

// Removes nested arrays.
//
// Returns a new flattened array.

const anotherArr = [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [6, 7, [4, 5]]
];

const realArr = anotherArr.flat(Infinity);

console.log(realArr);

// Output:
//
// [1,2,3,4,5,6,7,6,7,4,5]


// Infinity means:
//
// Flatten all nested levels.


// Example

console.log([1,[2,[3]]].flat(1));

// Output:
//
// [1,2,[3]]

console.log([1,[2,[3]]].flat(2));

// Output:
//
// [1,2,3]




// ======================================================
// Array.isArray()
// ======================================================

// Checks whether a value
// is an array.

console.log(Array.isArray("Rajdeep"));

// Output:
// false

console.log(Array.isArray([1,2,3]));

// Output:
// true




// ======================================================
// Array.from()
// ======================================================

// Converts iterable values
// into arrays.

console.log(Array.from("Rajdeep"));

// Output:
//
// ['R','a','j','d','e','e','p']


// Array.from() can convert:
//
// Strings
// NodeLists
// Sets
// Maps
// etc.




// ======================================================
// Interesting Example
// ======================================================

console.log(
    Array.from({
        name: "Rajdeep",
        age: 22
    })
);

// Output:
//
// []


// Why?

// Plain objects are NOT iterable.
//
// JavaScript doesn't know whether
// to convert:
//
// Keys?
//
// Values?
//
// Both?

// Therefore it returns an empty array.


// Correct way:

const obj = {
    name: "Rajdeep",
    age: 22
};

console.log(Object.keys(obj));

// Output:
//
// ["name","age"]

console.log(Object.values(obj));

// Output:
//
// ["Rajdeep",22]

console.log(Object.entries(obj));

// Output:
//
// [
//   ["name","Rajdeep"],
//   ["age",22]
// ]




// ======================================================
// Array.of()
// ======================================================

// Creates an array from
// given values.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(
    Array.of(score1, score2, score3)
);

// Output:
//
// [100,200,300]




// ======================================================
// Summary
// ======================================================

/*

push()

Adds element at END

(Entire array becomes one element)



concat()

Combines arrays

Returns NEW array



Spread (...)

Modern way to combine arrays



flat()

Removes nested arrays



Array.isArray()

Checks if value is an array



Array.from()

Converts iterable into array



Array.of()

Creates array from values

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

// Difference between
// push() and concat()?

// push()
// Adds one array as a single element.

// concat()
// Combines both arrays.


// Q2.

// Difference between
// concat() and spread?

// Both combine arrays.
//
// Spread (...) is the
// modern and preferred approach.


// Q3.

// What does flat(Infinity) do?

// Removes all nested arrays.


// Q4.

// Array.isArray("Rajdeep")

// false


// Q5.

// Array.from("Rajdeep")

// ['R','a','j','d','e','e','p']


// Q6.

// Array.from({name:"Rajdeep"})

// []

// Because plain objects
// are not iterable.


// Q7.

// Array.of(1,2,3)

// [1,2,3]
```
