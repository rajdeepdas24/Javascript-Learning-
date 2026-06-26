"use strict"; //Treat all JS codes as newer version

// alert(3+3) we are using nodejs, not browser

let name = "Rajdeep" 
let age = 20
let isLoggedIn = false

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object 

console.log(typeof undefined); //undefined
console.log(typeof null); //object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// # 📘 JavaScript Data Types & "use strict" Notes

```javascript
// =======================================
// 📘 JavaScript Basics
// =======================================


// =======================================
// "use strict"
// =======================================

// "use strict" tells JavaScript to run in
// Strict Mode.
//
// Strict Mode helps us write cleaner and
// safer code by preventing common mistakes.

"use strict";


// Example:

// x = 10;   ❌ Error in Strict Mode

// Without Strict Mode,
// JavaScript automatically creates x as
// a global variable.


// =======================================
// Browser vs Node.js
// =======================================

// alert() works only inside browsers.

// alert(3 + 3); ❌ Error in Node.js

// In Node.js we use:

console.log(3 + 3);

// Output:
// 6




// =======================================
// Variables
// =======================================

let name = "Rajdeep";
let age = 20;
let isLoggedIn = false;




// =======================================
// Primitive Data Types
// =======================================

// JavaScript has 7 Primitive Data Types.


// ---------------------------------------
// 1. Number
// ---------------------------------------

// Used for integers and decimal numbers.

let score = 100;
let price = 99.99;

console.log(typeof score);

// Output:
// number


// Safe Integer Range

// -(2^53 - 1)
// to
// (2^53 - 1)


// ---------------------------------------
// 2. BigInt
// ---------------------------------------

// Used for very large integers.

let bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber);

// Output:
// bigint




// ---------------------------------------
// 3. String
// ---------------------------------------

// Used for text.

let username = "Rajdeep";

console.log(typeof username);

// Output:
// string




// ---------------------------------------
// 4. Boolean
// ---------------------------------------

// Represents true or false.

let isLoggedIn = false;

console.log(typeof isLoggedIn);

// Output:
// boolean




// ---------------------------------------
// 5. Null
// ---------------------------------------

// null means "empty value".

let temperature = null;

console.log(temperature);

// Output:
// null


// Interview Question

console.log(typeof null);

// Output:
// object


// Why object?
//
// This is a historical bug in JavaScript.
// It has existed since the beginning and
// remains for compatibility.




// ---------------------------------------
// 6. Undefined
// ---------------------------------------

// Variable declared but no value assigned.

let userEmail;

console.log(userEmail);

// Output:
// undefined


console.log(typeof undefined);

// Output:
// undefined




// ---------------------------------------
// 7. Symbol
// ---------------------------------------

// Used to create unique values.

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// Output:
// false

// Even though both symbols have the same
// description, every Symbol is unique.




// =======================================
// Non-Primitive Data Types
// =======================================

// Non-Primitive types are:
//
// 1. Object
// 2. Array
// 3. Function


// Object

let student = {
    name: "Rajdeep",
    age: 20
};


// Array

let heroes = [
    "Shaktiman",
    "Krrish",
    "Kick"
];


// Function

function greet() {
    console.log("Hello");
}




// =======================================
// typeof Operator
// =======================================

// typeof tells us the data type
// of a variable.

console.log(typeof 100);

// number

console.log(typeof "Rajdeep");

// string

console.log(typeof true);

// boolean

console.log(typeof undefined);

// undefined

console.log(typeof null);

// object (Interview Question)

console.log(typeof 123n);

// bigint

console.log(typeof Symbol());

// symbol

console.log(typeof {});

// object

console.log(typeof []);

// object

console.log(typeof function () {});

// function




// =======================================
// Summary Table
// =======================================

/*

Primitive Data Types
--------------------

Number
BigInt
String
Boolean
Undefined
Null
Symbol


Reference (Non-Primitive)
-------------------------

Object
Array
Function

*/




// =======================================
// Interview Questions
// =======================================

// Q1. How many primitive data types are
// there in JavaScript?
//
// Answer:
// 7
//
// Number
// BigInt
// String
// Boolean
// Undefined
// Null
// Symbol



// Q2. typeof null ?

// Output:
// object

// Reason:
// Historical bug in JavaScript.



// Q3. typeof undefined ?

// Output:
// undefined



// Q4. typeof [] ?

// Output:
// object



// Q5. typeof function(){} ?

// Output:
// function



// Q6. Difference between null and undefined?

// null
// ------
// Empty value assigned intentionally.
//
// Example:

let x = null;


// undefined
// ---------
// Variable declared but value not assigned.

let y;


// =======================================
// Easy Trick to Remember
// =======================================

// Primitive = Copy by Value
//
// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt


// Non-Primitive = Copy by Reference
//
// Object
// Array
// Function
```
