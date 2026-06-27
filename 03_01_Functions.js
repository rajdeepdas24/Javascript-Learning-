// Functions

function saymyName (){  //function definition
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}

saymyName()

// function function_name (parameters)
function addTwoNumbers (number1, number2){
    return number1 + number2
    // after return no more code is executable
}
// when you pass values to a function, values are called arguments
console.log(addTwoNumbers(2,null));
  

function loginUserMsg(username){
    // if (username === undefined){
    if (!username){
        console.log("Please enter a username...");
    }
    else
    console.log (`${username} just logged in..`)
}

// console.log(loginUserMsg("Rajdeep"));
// console.log(loginUserMsg()); //if we don't pass any arguments, then undefined is returned
loginUserMsg()



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// # 📘 JavaScript Functions (Part 1)

// ```javascript
// ======================================================
// 📘 JavaScript Functions
// ======================================================

// A function is a reusable block of code
// that performs a specific task.

// Syntax

// function functionName(parameters) {
//      code
// }


// ======================================================
// Function Declaration
// ======================================================

function sayMyName() {

    console.log("R");
    console.log("A");
    console.log("J");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");

}


// Function Call (Invoke)

sayMyName();


// Output:
//
// R
// A
// J
// D
// E
// E
// P




// ======================================================
// Function with Parameters
// ======================================================

// Parameters are variables
// that receive values.

function addTwoNumbers(number1, number2) {

    return number1 + number2;

}


// Arguments are the actual values
// passed while calling the function.

console.log(addTwoNumbers(10, 20));

// Output:
// 30




// ======================================================
// Parameters vs Arguments
// ======================================================

// Parameters

function add(a, b) {

}


// Arguments

add(5, 10);


/*

Parameters

a
b


Arguments

5
10

*/




// ======================================================
// return Keyword
// ======================================================

// return sends a value back
// to the place where
// the function was called.

function multiply(a, b) {

    return a * b;

}

let result = multiply(4, 5);

console.log(result);

// Output:
// 20


// Any code after return
// will NEVER execute.

function demo() {

    return "Hello";

    console.log("This never runs");

}




// ======================================================
// Different Arguments
// ======================================================

console.log(addTwoNumbers(2, 3));

// 5


console.log(addTwoNumbers(2, "3"));

// "23"

// Number + String
// becomes String


console.log(addTwoNumbers(2, null));

// 2

// null becomes 0


console.log(addTwoNumbers(2, true));

// 3

// true becomes 1


console.log(addTwoNumbers(2));

// NaN

// because

// 2 + undefined




// ======================================================
// Function Without return
// ======================================================

function greet() {

    console.log("Hello");

}

let value = greet();

console.log(value);

// Output:
//
// Hello
// undefined

// Because greet()
// doesn't return anything.




// ======================================================
// Checking Parameters
// ======================================================

function loginUserMsg(username) {

    if (!username) {

        console.log("Please enter a username...");

        return;

    }

    console.log(`${username} just logged in.`);

}


loginUserMsg("Rajdeep");

// Output:
//
// Rajdeep just logged in.




loginUserMsg();

// Output:
//
// Please enter a username...




// ======================================================
// Default Parameters
// ======================================================

// If no value is passed,
// default value is used.

function loginUser(username = "Guest") {

    return `${username} just logged in`;

}

console.log(loginUser());

// Output:
//
// Guest just logged in




// ======================================================
// Summary
// ======================================================

/*

Function Declaration

function myFunction(){}



Function Call

myFunction()



Parameters

Variables in function definition



Arguments

Values passed during function call



return

Returns a value
and stops execution



Default Parameter

function test(name="Guest")

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

// Difference between
// Parameters and Arguments?

// Parameters
// Variables in function definition

// Arguments
// Actual values passed




// Q2.

// What happens after return?

// Function execution stops.




// Q3.

// What is returned
// if no return statement exists?

// undefined




// Q4.

// What is a Default Parameter?

// A value used when
// no argument is passed.




// ======================================================
// Easy Trick
// ======================================================

// Parameter

// function greet(name) {

// }


//  Argument

// greet("Rajdeep");


// Parameter = Placeholder

// Argument = Actual Value
// ```
