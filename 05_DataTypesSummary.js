//  Primitive: 7 types

// 1. string
// 2.Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. symbol
// 7. BigInt


// J.S is statically typed or dynamically typed?


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// let userEmail = undefined; //undefined can be written like this too

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId); //values are same but not equal

// console.log(id === anotherId); //false

const bigNumber = 5343643634542967337n



// Reference type (Non primitive)

// 1. Arrays
// 2. Objects
// 3. Functions


const heroes = ["Shaktiman", "Krrish", "Kick"]

let myObj = {
    name : "Rajdeep",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof 10);              // "number"
// console.log(typeof 107334344524n);              // "bigint"
// console.log(typeof "Hello");         // "string"
// console.log(typeof true);            // "boolean"
// console.log(typeof undefined);       // "undefined"
// console.log(typeof null);            // "object" (this is a historical bug in JavaScript)
// console.log(typeof [1, 2, 3]);       // array returns as "object"
// console.log(typeof {name: "Rajdeep"});   // "object"
// console.log(typeof myFunction);      // "function"




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// stack memory (Primitive) (copy)
// heap memory (Non-primitive) (reference or original)



let myYoutubeName = "FreezeGaming" //original 
let anotherName = myYoutubeName //copy is passed
anotherName = "Freezaline" //Changing one variable does not affect the other.

console.log(myYoutubeName);
console.log(anotherName);

// The variable itself stores only a reference (address) to the object in the heap
let userOne = {
    email : "rajdeepdas2431@gmail.com",
    upi : "48434734@ybl"
}

let userTwo = userOne //did not create a new object. It only copied the reference (address)
// Both variables point to the same object.


userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



// Primitive → Stack → Copy by Value
// Non-Primitive → Heap → Copy by Reference

// | Copy by Value                     | Copy by Reference                      |
// | --------------------------------- | -------------------------------------- |
// | Used by **primitive** types       | Used by **objects, arrays, functions** |
// | Copies the actual value           | Copies the memory reference (address)  |
// | Variables are independent         | Variables point to the same data       |
// | Changes don't affect the original | Changes affect both variables          |





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// # 📘 JavaScript Data Types & Memory (Stack vs Heap) Notes

```javascript
// ======================================================
// 📘 JavaScript Data Types
// ======================================================

// JavaScript is a Dynamically Typed Language.
//
// This means we do NOT need to specify the
// data type while declaring a variable.
//
// Example:

let age = 20;          // Number

age = "Twenty";        // Now String

age = true;            // Now Boolean

// JavaScript automatically changes
// the data type at runtime.

// ⭐ Interview Question
//
// Q. Is JavaScript statically typed or dynamically typed?
//
// Answer:
// JavaScript is Dynamically Typed.




// ======================================================
// Primitive Data Types (7 Types)
// ======================================================

// Primitive values are immutable and stored
// in Stack Memory.

// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt



// =======================================
// Number
// =======================================

const score = 100;
const scoreValue = 100.3;


// =======================================
// Boolean
// =======================================

const isLoggedIn = false;


// =======================================
// Null
// =======================================

// null means intentionally empty value.

const outsideTemp = null;


// =======================================
// Undefined
// =======================================

// Variable declared but not assigned.

let userEmail;

// Same as

// let userEmail = undefined;




// =======================================
// Symbol
// =======================================

// Symbol creates unique values.

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// Output:
// false

// Even though both have the same
// description ("123"),
// every Symbol is unique.




// =======================================
// BigInt
// =======================================

// Used for very large integers.

const bigNumber = 5343643634542967337n;




// ======================================================
// Non-Primitive (Reference Types)
// ======================================================

// Reference types are stored in Heap Memory.

// 1. Array
// 2. Object
// 3. Function



// =======================================
// Array
// =======================================

const heroes = [
    "Shaktiman",
    "Krrish",
    "Kick"
];




// =======================================
// Object
// =======================================

let myObj = {
    name: "Rajdeep",
    age: 20
};




// =======================================
// Function
// =======================================

const myFunction = function () {
    console.log("Hello World");
};




// ======================================================
// typeof Operator
// ======================================================

// typeof tells us the data type.

console.log(typeof 10);

// number


console.log(typeof 107334344524n);

// bigint


console.log(typeof "Hello");

// string


console.log(typeof true);

// boolean


console.log(typeof undefined);

// undefined


console.log(typeof null);

// object
// ⭐ Historical Bug


console.log(typeof [1, 2, 3]);

// object
// Arrays are objects in JavaScript.


console.log(typeof { name: "Rajdeep" });

// object


console.log(typeof myFunction);

// function




// ======================================================
// Memory in JavaScript
// ======================================================

// JavaScript uses two types of memory.
//
// 1. Stack Memory
// 2. Heap Memory




// =======================================
// Stack Memory
// =======================================

// Used by Primitive Data Types.
//
// Copy by Value

let myYoutubeName = "FreezeGaming";

let anotherName = myYoutubeName;

// A copy of the value is created.

anotherName = "Freezaline";

console.log(myYoutubeName);

// FreezeGaming


console.log(anotherName);

// Freezaline


// Changing anotherName
// does NOT affect myYoutubeName.




// =======================================
// Heap Memory
// =======================================

// Used by Objects,
// Arrays and Functions.
//
// Copy by Reference

let userOne = {
    email: "rajdeepdas2431@gmail.com",
    upi: "48434734@ybl"
};


// No new object is created.

let userTwo = userOne;


// Both variables point to
// the SAME object.

userTwo.email = "user@gmail.com";

console.log(userOne.email);

// user@gmail.com


console.log(userTwo.email);

// user@gmail.com


// Changing userTwo also changes
// userOne because both variables
// refer to the same object.




// =======================================
// Creating a Real Copy
// =======================================

// Use the spread operator.

let userThree = {
    ...userOne
};

userThree.email = "new@gmail.com";

console.log(userOne.email);

// user@gmail.com


console.log(userThree.email);

// new@gmail.com


// Now both objects are different.




// ======================================================
// Stack vs Heap
// ======================================================

/*

STACK MEMORY

✔ Used by Primitive Types

String
Number
Boolean
Null
Undefined
Symbol
BigInt

✔ Copy by Value

✔ Original value is NOT affected



HEAP MEMORY

✔ Used by Non-Primitive Types

Object
Array
Function

✔ Copy by Reference

✔ Original value changes

*/




// ======================================================
// Easy Trick
// ======================================================

// Primitive
//
// Stack
//
// Copy by Value



// Non-Primitive
//
// Heap
//
// Copy by Reference




// ======================================================
// Interview Questions
// ======================================================

// Q1. Is JavaScript statically typed?

// No

// JavaScript is Dynamically Typed.


// Q2. How many primitive data types?

// 7


// Q3. typeof null ?

// object


// Q4. typeof [] ?

// object


// Q5. typeof function(){}

// function


// Q6. Why are Symbols used?

// To create unique values.


// Q7. Difference between Stack & Heap?

// Stack
// ------
// Copy by Value
// Primitive Types

// Heap
// -----
// Copy by Reference
// Objects, Arrays, Functions
```
