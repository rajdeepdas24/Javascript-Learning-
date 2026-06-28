// Example


function one() {
    console.log("One");
    two();
}

function two() {
    console.log("Two");
    three();
}

function three() {
    console.log("Three");
}

one();


/* 

Call Stack


-> The Call Stack is a data structure that keeps track of function calls during program execution.
-> It follows the LIFO (Last In, First Out) principle, meaning the last function added is the first one to finish and be removed.

_________________________________________________________________________________________________________________________________________


How the Call Stack Works

Initially:

Empty Stack

one() is called:

┌───────┐
│ one() │
└───────┘

Inside one(), two() is called:

┌───────┐
│ two() │
├───────┤
│ one() │
└───────┘

Inside two(), three() is called:

┌─────────┐
│ three() │
├─────────┤
│ two()   │
├─────────┤
│ one()   │
└─────────┘

three() finishes, so it is removed (popped):

┌───────┐
│ two() │
├───────┤
│ one() │
└───────┘

two() finishes:

┌───────┐
│ one() │
└───────┘

one() finishes:
Empty Stack

Output: 

One
Two
Three

*/