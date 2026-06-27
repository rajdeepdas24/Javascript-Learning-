
// { This is a scope } 

// Let's take an example using if condition


if (true) {
    let a = 10 // a is defined inside the if condition, we cannot print the value of a outside the scope
    const b = 20 // same as for the b 
    var c = 30 // but var allows us to use it outside the scope, so we should not use var
}

// console.log(a);
// console.log(b);
// console.log(c);

// everything written inside the if condition is called block scope
// and outside it is called global scope


// if we take a variable with different value, a outside the scope and try to print it.
// then, the value of a is printed which is outside the scope

let a = 126;
// console.log("Block scope variable value :", a); //126 

// this shows that if we redeclare same variable outside the scope, then the scope variable is independent of it..

// if we try to print variable a inside the scope then the scope variable value will be printed

if (true) {
    let a = 4927;
    // console.log("Global scope variable value :", a);
}

// and same for for-loop as well, if we declare a value inside the loop it doesn't affect the global scope
array  = [1,2,3,45,67,8]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(`Element at ${index} : ${element}`)
}

// console.log(index); //index is not defined outside the block


// Nested scope

function one (){
    const username = "Rajdeep"

    function two(){
        const age = 12
        console.log(username);
        // inside function can access the outer function
    }
    // console.log(age); //this says age is undefined
    // outer function cannot access the inner function
    two()
}
// one()

// its like an parent and child 
// where child can ask for an icecream from its parent (can access parent elements)
// but parent can't ask for an icecream from its child (Cannot access child elements)
 


// and the same is also for if else


if (true) {
    const username = "Rajdeep"
    if (username === "Rajdeep") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // website is not defined
}

// console.log(username); //username is not defined as its out of the scope


// Interesting +++++++++++++++++++++++

// There are 2 ways to declare a function (Basic)

// console.log(addone(5)) //can access function before / after in this type of initialization

function addone(value){
    return value + 1
}   

console.log(addone(5)) //can access function before / after in this type of initialization


// addtwo(2) //Cannot access 'addtwo' before in this type of initialization

const addtwo = function (value){
    return value + 2
}
addtwo(2) 

//In this every time , we need to access the function after initialization because we are using a variable in which function is defined.
// and we know to access a variable, we need to declare it first






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// ======================================================
// 📘 JavaScript Scope & Hoisting
// ======================================================


// ======================================================
// Scope
// ======================================================

// Scope determines where a variable
// can be accessed in a program.

// Types of Scope:
//
// 1. Global Scope
// 2. Block Scope




// ======================================================
// Block Scope
// ======================================================

// Variables declared inside {}
// are called Block Scoped.

//
// let   -> Block Scoped
// const -> Block Scoped
// var   -> Function Scoped

// Therefore,
// avoid using var because it
// can be accessed outside the block.




// ======================================================
// Global Scope
// ======================================================

// Variables declared outside
// any block are called
// Global Scope variables.

// Global variables can be
// accessed anywhere in the program,
// unless another variable with
// the same name exists inside a block.




// ======================================================
// Variable Shadowing
// ======================================================

// A variable declared inside
// a block with the same name
// as a global variable
// does NOT affect the global variable.

// The inner variable
// "shadows" the outer variable.

// Once execution leaves the block,
// the global variable is used again.




// ======================================================
// Scope inside Loops
// ======================================================

// Variables declared using
// let or const inside loops
// exist only inside the loop.

// They cannot be accessed
// outside the loop.




// ======================================================
// Nested Scope
// ======================================================

// A function inside another function
// is called a Nested Function.

// Inner Function
// ✔ Can access variables
// from the Outer Function.

// Outer Function
// ✘ Cannot access variables
// from the Inner Function.

// JavaScript follows
// Lexical Scoping.




// ======================================================
// Lexical Scope
// ======================================================

// Lexical Scope means
// an inner scope inherits
// variables from its outer scope.

// Think of it like:

// Parent
//   ↓
// Child

// Child can access
// Parent's variables.

// Parent cannot access
// Child's variables.




// ======================================================
// Nested if-else
// ======================================================

// Nested if blocks follow
// the same scope rules.

// Inner block
// ✔ Can access outer variables.

// Outer block
// ✘ Cannot access inner variables.




// ======================================================
// Function Hoisting
// ======================================================

// Hoisting is JavaScript's behavior
// of moving declarations to the top
// before code execution.

// Function Declarations
// are completely hoisted.

// Function Expressions
// are NOT completely hoisted
// because they are stored
// inside variables.




// ======================================================
// Function Declaration
// ======================================================

// ✔ Can be called before declaration.

// Example:
//
// greet();
//
// function greet(){}




// ======================================================
// Function Expression
// ======================================================

// ✘ Cannot be called
// before declaration.

// Example:
//
// const greet = function(){}




// ======================================================
// Why?
// ======================================================

// Function Declarations
// are hoisted with
// their complete definition.

// Function Expressions
// are assigned to variables.
//
// Variables declared with
// let and const remain in the
// Temporal Dead Zone (TDZ)
// until initialization.
//
// Therefore,
// they cannot be accessed
// before declaration.




// ======================================================
// Summary
// ======================================================

/*

Scope

Global Scope
Block Scope

-----------------------

let

✔ Block Scoped

-----------------------

const

✔ Block Scoped

-----------------------

var

✔ Function Scoped

(Not Recommended)

-----------------------

Nested Scope

Child → Parent ✔

Parent → Child ✘

-----------------------

Lexical Scope

Inner scope can access
Outer scope.

-----------------------

Hoisting

Moves declarations
before execution.

-----------------------

Function Declaration

✔ Can call before declaration.

-----------------------

Function Expression

✘ Cannot call before declaration.

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.
// What is Scope?

// Scope defines where a variable
// can be accessed.


// Q2.
// Difference between
// Global Scope and Block Scope?

// Global Scope
// Accessible everywhere.

// Block Scope
// Accessible only inside {}.


// Q3.
// Difference between
// let, const and var?

// let
// Block Scoped

// const
// Block Scoped
// Cannot be reassigned

// var
// Function Scoped
// Avoid using it.


// Q4.
// What is Variable Shadowing?

// Declaring a variable
// with the same name
// inside a different scope.


// Q5.
// What is Lexical Scope?

// Inner scope can access
// variables of the outer scope.


// Q6.
// Can the outer function
// access inner function variables?

// No.


// Q7.
// Can the inner function
// access outer function variables?

// Yes.


// Q8.
// What is Hoisting?

// JavaScript moves declarations
// before execution.


// Q9.
// Difference between
// Function Declaration
// and Function Expression?

// Function Declaration
// ✔ Can be called before declaration.

// Function Expression
// ✘ Cannot be called before declaration.


// Q10.
// Why can't Function Expressions
// be called before declaration?

// Because they are stored
// in variables, and variables
// declared with let/const stay in the
// Temporal Dead Zone (TDZ)
// until initialization.


// ======================================================
// Easy Trick
// ======================================================

// Global Scope
//
// 🌍 Accessible Everywhere

// Block Scope
//
// 📦 Accessible Only Inside {}

// Nested Scope
//
// 👨 Parent → 👦 Child ✔
//
// 👦 Child → 👨 Parent ✘

// Hoisting
//
// Function Declaration ✔
//
// Function Expression ✘