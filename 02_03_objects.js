// declaring 
// singleton

// object literal
const user = {
    Name : "Rajdeep",
    "Full Name" : "Rajdeep Das", //space in between the object key
    age : 22,
    Location : "Silchar",
    Email : "rajdeepdas2431@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Wednesday"]
}

// accessing an object

console.log(user.Name);
// alternate way
console.log(user["Name"]);

console.log(user["Full Name"]);  //you must use bracket notation:
// console.log(user.Full Name);  //not dot operator


user.Email = "freeze@youtube.com" // values can be overwritten

// Object.freeze(user)  //using this, we can no more change the values of an object

user.Email = "dgfdddchvdfgdfcdgh" // Let's try to change the value of the email and check

console.log(user.Email); // freeze@youtube.com (it doesn't work)

user.greeting = function(){
    console.log("Hello, Good morning"); 
}
user.greeting2 = function(){
    console.log(`Hello, Good morning, ${this.Name}`); 
}

console.log(user.greeting); //[Function (anonymous)], function is returned but not the value of it
console.log(user.greeting()); //Hello, Good morning
console.log(user.greeting2()); //Hello, Good morning, Rajdeep



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// # 📘 JavaScript Objects Notes (Part 1)

// ```javascript
// ======================================================
// 📘 JavaScript Objects
// ======================================================

// An Object stores data as
// key-value pairs.

// Objects are one of the most
// important data structures in JavaScript.


// ======================================================
// Creating an Object
// ======================================================

// Object Literal

const user = {

    Name: "Rajdeep",

    "Full Name": "Rajdeep Das",

    age: 22,

    Location: "Silchar",

    Email: "rajdeepdas2431@gmail.com",

    isLoggedIn: false,

    lastLoggedIn: [
        "Monday",
        "Wednesday"
    ]
};




// ======================================================
// Accessing Object Properties
// ======================================================

// 1. Dot Notation

console.log(user.Name);

// Output:
// Rajdeep




// 2. Bracket Notation

console.log(user["Name"]);

// Output:
// Rajdeep




// ======================================================
// Properties Having Spaces
// ======================================================

// If a property name contains
// spaces or special characters,
// dot notation CANNOT be used.

console.log(user["Full Name"]);

// Output:
// Rajdeep Das


// Wrong

// console.log(user.Full Name);

// ❌ Syntax Error


// Always use bracket notation
// for keys containing spaces.




// ======================================================
// Updating Object Values
// ======================================================

user.Email = "freeze@youtube.com";

console.log(user.Email);

// Output:
// freeze@youtube.com




// ======================================================
// Object.freeze()
// ======================================================

// Prevents modifications to an object.
//
// After freezing:
//
// ✔ Cannot change values
// ✔ Cannot add new properties
// ✔ Cannot delete properties

Object.freeze(user);


// Try changing the email

user.Email = "new@gmail.com";

console.log(user.Email);

// Output:
//
// freeze@youtube.com

// Value does NOT change.


// Try adding a new property

user.Country = "India";

console.log(user.Country);

// Output:
//
// undefined




// ======================================================
// Adding Methods
// ======================================================

// Objects can also store functions.
//
// Functions inside objects are called METHODS.

user.greeting = function () {

    console.log("Hello, Good Morning");

};




// ======================================================
// Calling a Method
// ======================================================

user.greeting();

// Output:
//
// Hello, Good Morning




// ======================================================
// What happens if we don't call it?
// ======================================================

console.log(user.greeting);

// Output:
//
// [Function (anonymous)]

// Because only the function
// is returned.
//
// It is NOT executed.




// ======================================================
// this Keyword
// ======================================================

// "this" refers to
// the current object.

user.greeting2 = function () {

    console.log(
        `Hello, Good Morning, ${this.Name}`
    );

};

user.greeting2();

// Output:
//
// Hello, Good Morning, Rajdeep




// ======================================================
// Why use "this"?
// ======================================================

// Instead of writing

console.log(user.Name);

// We write

this.Name;

// So that the method always
// refers to the current object.
//
// This makes the code reusable.




// ======================================================
// Summary
// ======================================================

/*

Object Literal

{}



Access Property

obj.key

obj["key"]



Update Property

obj.key = value



Freeze Object

Object.freeze(obj)



Add Method

obj.method = function(){}



Call Method

obj.method()



this

Refers to the current object

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

// Difference between
// Dot Notation and Bracket Notation?

// Dot

user.Name;


// Bracket

user["Name"];




// Q2.

// When should we use
// Bracket Notation?

// When property names contain

// ✔ Spaces

// ✔ Special Characters

// ✔ Variables




// Q3.

// What does Object.freeze() do?

// Prevents

// ✔ Modification

// ✔ Addition

// ✔ Deletion




// Q4.

// What is a Method?

// A function stored inside
// an object.




// Q5.

// What does "this" refer to?

// The current object.




// ======================================================
// Easy Trick
// ======================================================

// Data

user.Name



// Function

user.greeting()



// Dot Notation

obj.key



// Bracket Notation

obj["key"]



// Freeze Object

// Object.freeze(obj)
// ```
