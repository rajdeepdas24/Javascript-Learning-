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
