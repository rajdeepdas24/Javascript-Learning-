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














// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++











// # 📘 JavaScript Strings Notes

// ```javascript
// ======================================================
// 📘 JavaScript Strings
// ======================================================

// A String is a sequence of characters
// used to represent text.
//
// Examples:
//
// "Rajdeep"
// 'Hello'
// `JavaScript`


// ======================================================
// Creating Strings
// ======================================================

// Strings can be created using:
//
// 1. Double Quotes ""
// 2. Single Quotes ''
// 3. Backticks ``

// const name = "Rajdeep";
// const repoCount = 50;




// // ======================================================
// // String Concatenation
// // ======================================================

// // Old Way (Not Recommended)

// console.log(name + " " + repoCount + " Value");

// // Output:
// // Rajdeep 50 Value

// // This method works,
// // but becomes difficult to read
// // when many variables are involved.




// // ======================================================
// // Template Literals (Recommended)
// // ======================================================

// // Template literals use backticks (`)
// // and ${} to insert variables.

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// Output:
// Hello, my name is Rajdeep and my repo count is 50

// Advantages:
//
// ✔ Cleaner
// ✔ Easier to read
// ✔ Supports multi-line strings




// ======================================================
// typeof
// ======================================================

let myName = "Rajdeep";

console.log(typeof myName);

// Output:
// string




// ======================================================
// length Property
// ======================================================

// length returns the total number
// of characters in a string.
//
// Note:
// It counts characters,
// not indexes.

console.log(myName.length);

// Output:
// 7




// ======================================================
// Accessing Characters
// ======================================================

// String indexing starts from 0.

console.log(myName[0]);

// R

console.log(myName[1]);

// a

console.log(myName[2]);

// j


// Index:
//
// 0 1 2 3 4 5 6
//
// R a j d e e p




// ======================================================
// Common String Methods
// ======================================================


// =======================================
// 1. toUpperCase()
// =======================================

// Converts all letters into uppercase.

console.log(myName.toUpperCase());

// Output:
// RAJDEEP




// =======================================
// 2. toLowerCase()
// =======================================

// Converts all letters into lowercase.

console.log(myName.toLowerCase());

// Output:
// rajdeep




// =======================================
// 3. charAt()
// =======================================

// Returns the character
// present at a particular index.

console.log(myName.charAt(2));

// Output:
// j




// =======================================
// 4. indexOf()
// =======================================

// Returns the index of
// the first occurrence.

console.log(myName.indexOf("d"));

// Output:
// 3

// If not found,
// returns -1.

console.log(myName.indexOf("z"));

// Output:
// -1




// =======================================
// 5. includes()
// =======================================

// Checks whether the string
// contains another string.

console.log(myName.includes("deep"));

// Output:
// true

console.log(myName.includes("xyz"));

// Output:
// false




// =======================================
// 6. slice()
// =======================================

// Extracts a part of the string.
//
// Last index is NOT included.
//
// Supports negative indexes.

console.log(myName.slice(0, 3));

// Output:
// Raj

console.log(myName.slice(-4));

// Output:
// deep




// =======================================
// 7. substring()
// =======================================

// Similar to slice(),
// but negative values become 0.

console.log(myName.substring(3, 7));

// Output:
// deep

console.log(myName.substring(-2, 3));

// Output:
// Raj




// =======================================
// 8. replace()
// =======================================

// Replaces the first matching text.

let text = "Hello Rajdeep";

console.log(text.replace("Rajdeep", "Freeze"));

// Output:
// Hello Freeze




// =======================================
// 9. trim()
// =======================================

// Removes spaces from
// beginning and end.

let textOne = "   Hello   ";

console.log(textOne.trim());

// Output:
// Hello




// =======================================
// 10. split()
// =======================================

// Converts a string into an array.

let textTwo = "HTML,CSS,JavaScript";

console.log(textTwo.split(","));

// Output:
//
// ["HTML","CSS","JavaScript"]




// =======================================
// 11. startsWith()
// =======================================

// Checks if a string starts
// with specific characters.

console.log(myName.startsWith("Raj"));

// Output:
// true




// =======================================
// 12. endsWith()
// =======================================

// Checks if a string ends
// with specific characters.

console.log(myName.endsWith("deep"));

// Output:
// true




// =======================================
// 13. replaceAll()
// =======================================

// Replaces all matching words.

let sentence = "cat cat cat";

console.log(sentence.replaceAll("cat", "dog"));

// Output:
// dog dog dog




// =======================================
// 14. repeat()
// =======================================

// Repeats a string.

console.log("Hi ".repeat(3));

// Output:
// Hi Hi Hi




// ======================================================
// Important Notes
// ======================================================

// ✔ Strings are Immutable.
//
// This means individual characters
// cannot be changed.

let username = "Rajdeep";

username[0] = "M";

console.log(username);

// Output:
// Rajdeep

// String remains unchanged.




// ======================================================
// Summary
// ======================================================

/*

Property

length


Methods

toUpperCase()

toLowerCase()

charAt()

indexOf()

includes()

slice()

substring()

replace()

replaceAll()

trim()

split()

startsWith()

endsWith()

repeat()

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

console.log(typeof "Hello");

// Output:
// string



// Q2.

console.log("Rajdeep".length);

// Output:
// 7



// Q3.

console.log("Rajdeep".charAt(2));

// Output:
// j



// Q4.

console.log("Rajdeep".indexOf("d"));

// Output:
// 3



// Q5.

console.log("Rajdeep".includes("deep"));

// Output:
// true



// Q6.

// Difference between
// slice() and substring()

// slice()
// ✔ Supports negative indexes

// substring()
// ✘ Negative indexes become 0



// Q7.

// Are Strings mutable?

// No

// Strings are Immutable.
``
