const accountId  = 144553 //constants
let accountEmail ="rajdeepdas2431@gmail.com"  //Let
var accountPassword = "12345"
accountCity = "Silchar"
let accountState; // value will be undefined

// accountId = 2

accountEmail = "hc@hc@.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
 prefer not to use var cuz of issue in block scope and function scope 
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// # 📘 JavaScript Variables Notes

```javascript
// =======================================
// 📘 JavaScript Variables
// =======================================

// JavaScript provides three ways to declare variables:
//
// 1. const
// 2. let
// 3. var
//
// We can also create a variable without writing
// let, const or var (not recommended).




// =======================================
// const (Constant Variable)
// =======================================

// const is used when the value should never change.

const accountId = 144553;


// Trying to change a const variable gives an error.

// accountId = 2;

// ❌ Error:
// TypeError: Assignment to constant variable.


// =======================================
// let (Recommended)
// =======================================

// let is used when the value can change.

let accountEmail = "rajdeepdas2431@gmail.com";


// Value can be updated later.

accountEmail = "hc@hc@.com";




// =======================================
// var (Old Way)
// =======================================

// var was used before ES6 (2015).
// It allows the value to change.

var accountPassword = "12345";

accountPassword = "2121212121";


// ⚠ Avoid using var in modern JavaScript.
//
// Reason:
// var ignores block scope and can cause bugs.
//
// Prefer using let and const.




// =======================================
// Variable Without Keyword
// =======================================

// JavaScript allows this:

accountCity = "Silchar";


// Value can also be changed.

accountCity = "Bengaluru";


// ⚠ Not Recommended.
//
// Because it creates a global variable
// and may lead to unexpected bugs.


// Always write:

// let accountCity = "Silchar";




// =======================================
// Undefined Variable
// =======================================

// Variable declared but not assigned a value.

let accountState;

console.log(accountState);

// Output:
// undefined


// "undefined" means:
//
// The variable exists,
// but no value has been assigned yet.


// =======================================
// Printing Values
// =======================================

// Print a single value

console.log(accountId);

// Output:
// 144553



// =======================================
// console.table()
// =======================================

// console.table() displays data in table format.

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);


// Output:
//
// ┌─────────┬────────────────────────────┐
// │ (index) │ Values                     │
// ├─────────┼────────────────────────────┤
// │ 0       │ 144553                     │
// │ 1       │ hc@hc@.com                 │
// │ 2       │ 2121212121                 │
// │ 3       │ Bengaluru                  │
// │ 4       │ undefined                  │
// └─────────┴────────────────────────────┘




// =======================================
// Complete Example
// =======================================

const accountId = 144553;

let accountEmail = "rajdeepdas2431@gmail.com";

var accountPassword = "12345";

accountCity = "Silchar";

let accountState;


// Updating values

accountEmail = "hc@hc@.com";

accountPassword = "2121212121";

accountCity = "Bengaluru";


// Display Output

console.log(accountId);

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);




// =======================================
// Difference Between const, let and var
// =======================================

/*

const
------
✔ Cannot be reassigned
✔ Block scoped
✔ Must be initialized
✔ Preferred for fixed values


let
----
✔ Can be reassigned
✔ Block scoped
✔ Preferred for changing values


var
----
✔ Can be reassigned
✘ Function scoped (not block scoped)
✘ Can cause unexpected bugs
✘ Avoid using in modern JavaScript

*/





// =======================================
// Scope Example
// =======================================

{
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); ❌ Error
// console.log(b); ❌ Error
console.log(c); // ✅ 30


// Why?
//
// let and const are block scoped.
// var ignores block scope.





// =======================================
// Interview Questions
// =======================================

// Q1. Difference between let, const and var?
//
// const -> Cannot be reassigned.
// let   -> Can be reassigned.
// var   -> Old way, function scoped.

// Q2. Which keyword should be used most?
//
// Answer:
// const by default.
// Use let only when the value needs to change.

// Q3. What is undefined?
//
// A variable that has been declared
// but not assigned a value.

// Q4. Can we declare a variable without let/const/var?
//
// Yes, but it creates a global variable.
// It is considered bad practice.

// Q5. Why should we avoid var?
//
// Because var is function scoped,
// not block scoped, which can lead to bugs.
```
