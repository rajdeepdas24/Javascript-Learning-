// Strings in Javascript

// A string in JavaScript is a sequence of characters used to represent text.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// You can create strings using single quotes (' '), double quotes (" "), or backticks (` `)

const name = "Rajdeep"
const repoCount = 50


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//String Concatenation using +
console.log(name + " " +repoCount + " Value") 
// but this way is very outdated and can't be used.

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); //Use backticks (`) with ${}
// Template literals are cleaner than using +, improves readability.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myName = "Rajdeep"; //typeof
console.log(typeof name); //String



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// string length
console.log(myName.length); //gives the length of the string starting from 1



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// accessing a string
console.log(myName[0]); // R
console.log(myName[1]); // a
console.log(myName[2]); // j

// Index:   0 1 2 3 4 5 6
// String:  R a j d e e p 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Common String Methods


// 1. toUpperCase()
// Converts all letters to uppercase.
let anotherName = "Rajdeep";
console.log(anotherName.toUpperCase());  //RAJDEEP



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 2. toLowerCase()
// Converts all letters to lowercase
console.log(anotherName.toLowerCase());  //rajdeep



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 3. charAt()
// Returns the character at a given index.
console.log(anotherName.charAt(2));  //j



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 4. indexOf()
// Returns the index of the first occurrence
console.log(anotherName.indexOf("d"));  //3
// Returns -1 if the character is not found.



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 5. includes()
// Checks whether the string contains another string.
console.log(anotherName.includes("deep")); //true



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 6. slice()
// Extracts part of a string. doesn't include the last position 
console.log(anotherName.slice(0, 3)); //Raj (gives only till 2nd index)
console.log(anotherName.slice(-7, 3)); //Raj (Can give negative values as well)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 7. substring()
// Similar to slice(), but negative indexes are treated as 0.
console.log(anotherName.substring(3, 7));  //deep




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 8. replace()
// Replaces part of a string.
let text = "Hello Rajdeep";
console.log(text.replace("Rajdeep", "Freeze")); //Hello Freeze



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 9. trim()
// Removes spaces from the beginning and end.

let textOne = "   Hello   ";
console.log(textOne.trim());  //Hello




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 10. split()
// Converts a string into an array.

let textTwo = "HTML,CSS,JavaScript";

console.log(textTwo.split(","));  //["HTML", "CSS", "JavaScript"]

