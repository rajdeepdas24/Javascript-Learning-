const user = {
    username : " Rajdeep",
    price : "99",

    welcomemsg : function (){
        console.log(`${this.username}, Welcome to our website`);
        // console.log(this); //gives the values of the context{}
    }
}

// user.welcomemsg()
// user.username = "Ram"
// user.welcomemsg()

// console.log(this); //refers to a empty object
// in browser, we see a window object


function chai(){
    let username = "Ray"
    console.log(this);
}
// chai()

// this don't work in functions, only works in objects



// Arrow function++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\


// basic syntax of arrow function () => {}
// // which can be stored in a variable


const addtwo = (num1, num2) => {
    return num1 + num2 
}
// console.log(addtwo(3,5));

// or

const subtwo = (num1, num2) => {
    console.log(num1 - num2 );
}
// subtwo(8,4) 

// or (Implicit statement)

// const multwo = (num1, num2) => {
//     return num1 * num2 
// }

// can remove parenthesis for implicit statements

// const multwo = (num1, num2) => num1 * num2

//  (or)

const multwo = (num1, num2) => ( num1 * num2 ) //this is used when we are not using return keyword
// this technique is very helpful in react

// console.log(multwo(3,5));

// "for returning an object using arrow function"

const ArrowObj = () => ({
    username : "Rajdeep",
    email : "google@gmail.com",
    address : "Haldwani"
})
console.log(ArrowObj()) //{ username: 'Rajdeep', email: 'google@gmail.com', address: 'Haldwani' }
console.log(ArrowObj().username) //Rajdeep
console.log(ArrowObj().email) //google@gmail.com
console.log(ArrowObj().address) //Haldwani


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// ======================================================
// 📘 JavaScript "this" & Arrow Functions
// ======================================================


// ======================================================
// this Keyword
// ======================================================

// "this" refers to the current object (current context).

// ✔ Inside an Object
// this -> Current Object

// ✔ Global Scope
// Node.js  -> {}
// Browser  -> Window Object

// ✔ Inside a Normal Function
// this does NOT refer to local variables.
// It refers to the global object
// (or undefined in strict mode).




// ======================================================
// Arrow Functions
// ======================================================

// Arrow Function Syntax

// () => {}


// Types of Arrow Functions

// 1. Explicit Return
//
// Uses return keyword.


// 2. Implicit Return
//
// No return keyword required.
//
// Used when there is only
// one expression.


// 3. Returning an Object
//
// Wrap object inside ().
//
// () => ({ key: value })




// ======================================================
// Arrow Function & this
// ======================================================

// Arrow functions DO NOT have
// their own "this".
//
// They inherit "this"
// from their surrounding scope.
//
// This is why arrow functions
// are commonly used in React.




// ======================================================
// Summary
// ======================================================

/*

this

✔ Current Object

✔ Node.js -> {}

✔ Browser -> Window

✔ Regular Function
   -> Global Object / undefined

-----------------------------

Arrow Function

() => {}

-----------------------------

Explicit Return

Uses return keyword

-----------------------------

Implicit Return

No return keyword

-----------------------------

Returning Object

() => ({ })

-----------------------------

Arrow Function

Does NOT have its own "this"

Uses parent's "this"

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.
// What does "this" refer to?

// Current object (current context).



// Q2.
// What does console.log(this)
// print?

// Node.js  -> {}
// Browser  -> Window Object



// Q3.
// Does "this" work inside
// normal functions?

// Yes,
// but it refers to the global object
// (or undefined in strict mode),
// NOT local variables.



// Q4.
// What is an Arrow Function?

// A shorter syntax
// for writing functions.



// Q5.
// Difference between
// Explicit Return
// and
// Implicit Return?

// Explicit
// -> Uses return

// Implicit
// -> No return keyword



// Q6.
// How do you return an object
// from an arrow function?

// () => ({ key: value })



// Q7.
// Does an Arrow Function
// have its own "this"?

// No

// It inherits "this"
// from its surrounding scope.



// Q8.
// Why are Arrow Functions
// used in React?

// Because they inherit
// the parent's "this".



// ======================================================
// Easy Trick
// ======================================================

// Object
// this -> Current Object

// Function
// this -> Global Object

// Arrow Function
// this -> Parent's Object