// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
// chai()

// can be written as in the form of IIFE

(function chai(){ //this is a named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is must to end the function call

// IIFE syntax : (function definition)(function call)
// where first parenthesis is function definition
// and the next one is used to call it..

// IIFE can be written for ARROW FUNCTION as well

( () => { //This is an unnamed IIFE
    console.log(`DB CONNNECTED TWICE`);
})();

// To pass some parameters and arguments

( (name) => {
    console.log(`DB CONNNECTED with ${name} device`);
})("Rajdeep");




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



IIFE (Immediately Invoked Function Expression)

A function that executes immediately after it is defined.

Syntax

(function(){})();


Why do we use IIFE?

1. Execute code immediately.
2. Avoid Global Scope Pollution.
3. Create a Private Scope.
4. Used for one-time initialization.


Types of IIFE

1. Named IIFE
Function has a name.

2. Anonymous IIFE
Function has no name.

3. Arrow Function IIFE
Uses arrow function syntax.


Passing Arguments

IIFE can accept parameters
just like a normal function.


Semicolon (;)

Always end an IIFE with a semicolon (;).
It prevents errors when writing
multiple IIFEs one after another.


Summary


IIFE

✔ Runs immediately

✔ Creates private scope

✔ Avoids global scope pollution

✔ Can be Named

✔ Can be Anonymous

✔ Can be an Arrow Function
Can accept parameters

 Ends with ;




 Interview Questions

Q1. What is IIFE?

A function that executes immediately
after it is defined.


Q2. Why do we use IIFE?

✔ Immediate execution
✔ Avoid global scope pollution
✔ Create private scope
✔ One-time initialization


Q3. What is the syntax of an IIFE?

(function(){})();


Q4. Can Arrow Functions be used as IIFE?

Yes.


Q5. Can we pass arguments to an IIFE?

Yes.


Q6. Why is a semicolon (;) used after an IIFE?

To terminate the statement and
avoid parsing errors when another
IIFE follows.


Easy Trick

Normal Function
Define ➜ Call Later

 IIFE
 Define + Execute Immediately 

*/