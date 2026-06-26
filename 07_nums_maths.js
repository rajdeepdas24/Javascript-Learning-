// Number is the data type used for both integers and decimal (floating-point) values.

const score = 400 //Number Literal (Most Common)

const balance = new Number(100); //Number Object
// console.log(balance); 

// Usually, you should use number literals (100) instead of new Number(100)



// ++++++++++++ Number Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 1. toString()
// converts a number into a string.

console.log(score.toString()); //400
console.log(typeof score.toString()); //string



// 2. toFixed()
// Formats the number with a fixed number of decimal places.

const price = 99.456;
console.log(price.toFixed(1)); //99.5



// 3. toPrecision()
// Returns the number with a specified total number of significant digits

const num = 123.8966;
console.log(num.toPrecision(4)); //123.9
console.log((1234.56).toPrecision(3)); //1.23e+3

// 4. toLocaleString()
// Formats numbers according to locale

const Bignumber = 100000000;
console.log(Bignumber.toLocaleString()); //10,00,00,000



// ++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The Math object in JavaScript provides built-in mathematical functions and constants.

// 1. Math.abs()
// Returns the absolute (positive) value.

console.log(Math.abs(-10)); //10
console.log(Math.abs(-2980)); //10
console.log(Math.abs(-28)); //10


// 2. Math.round()
// Rounds to the nearest integer

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.9)); // 5


// 3. Math.ceil()
// Always rounds up

console.log(Math.ceil(4.1)); //5


// 4. Math.floor()
// Always rounds down.

console.log(Math.floor(4.9)); //4


// 5. Math.min()
// Returns the smallest value
console.log(Math.min(10, 20, 30, 5)); //5


// 6. Math.max()
// Returns the largest value
console.log(Math.max(10, 20, 30, 5)); //30


// 7. Math.pow()
// Raises a number to a power
console.log(Math.pow(2, 3)); //8


// 8. Math.sqrt()
// Returns the square root
console.log(Math.sqrt(25)); //5


// 9. Math.cbrt()
// Returns the cube root
console.log(Math.cbrt(27)); //3


// 10. Math.random()
// Returns a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); //random value, eg(0.638472918)



// To generate Random Numbers between a range
let min = 50; //define minimum value
let max = 100; //define maximum value

let random = Math.floor(Math.random() * (max - min + 1)) + min;
// math.random generates random number between 0 and 1
// which is multiplied with the range (max - min + 1), which gives 51.
// like 0.63 * 51 = 32.13
// this value is less than the range, so we add the min value
console.log(random);















// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++










// # 📘 JavaScript Numbers & Math Notes

```javascript
// ======================================================
// 📘 JavaScript Numbers
// ======================================================

// JavaScript uses one Number type for
// both integers and decimal numbers.

// Examples:

const score = 400;        // Integer
const price = 99.456;     // Decimal




// ======================================================
// Creating Numbers
// ======================================================

// 1. Number Literal (Recommended)

const score = 400;


// 2. Number Object

const balance = new Number(100);

console.log(balance);

// Output:
// [Number: 100]

// Number Objects are rarely used.
//
// Prefer Number Literals.


// ======================================================
// Number Methods
// ======================================================


// =======================================
// 1. toString()
// =======================================

// Converts Number → String

console.log(score.toString());

// Output:
// "400"

console.log(typeof score.toString());

// Output:
// string




// =======================================
// 2. toFixed()
// =======================================

// Fixes the number of decimal places.

const price = 99.456;

console.log(price.toFixed(1));

// Output:
// 99.5

console.log(price.toFixed(2));

// Output:
// 99.46

console.log(price.toFixed(3));

// Output:
// 99.456




// =======================================
// 3. toPrecision()
// =======================================

// Returns the specified number
// of significant digits.

const num = 123.8966;

console.log(num.toPrecision(4));

// Output:
// 123.9

console.log((1234.56).toPrecision(3));

// Output:
// 1.23e+3

// Useful for scientific notation.




// =======================================
// 4. toLocaleString()
// =======================================

// Formats numbers according to locale.

const bigNumber = 100000000;

console.log(bigNumber.toLocaleString());

// Output (depends on your system locale)

// Example (US):
// 100,000,000

// Example (India):
// 10,00,00,000


// Force Indian format

console.log(bigNumber.toLocaleString("en-IN"));

// Output:
// 10,00,00,000




// ======================================================
// Number Properties
// ======================================================

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);




// ======================================================
// Math Object
// ======================================================

// Math is a built-in object.
//
// It contains useful mathematical
// methods and constants.




// =======================================
// Math.PI
// =======================================

console.log(Math.PI);

// Output:
// 3.141592653589793




// =======================================
// 1. Math.abs()
// =======================================

// Returns the absolute value.
//
// Negative becomes positive.

console.log(Math.abs(-10));

// Output:
// 10

console.log(Math.abs(-2980));

// Output:
// 2980

console.log(Math.abs(-28));

// Output:
// 28




// =======================================
// 2. Math.round()
// =======================================

// Rounds to the nearest integer.

console.log(Math.round(4.4));

// Output:
// 4

console.log(Math.round(4.5));

// Output:
// 5

console.log(Math.round(4.9));

// Output:
// 5




// =======================================
// 3. Math.ceil()
// =======================================

// Always rounds UP.

console.log(Math.ceil(4.1));

// Output:
// 5




// =======================================
// 4. Math.floor()
// =======================================

// Always rounds DOWN.

console.log(Math.floor(4.9));

// Output:
// 4




// =======================================
// 5. Math.min()
// =======================================

// Returns the smallest value.

console.log(Math.min(10, 20, 30, 5));

// Output:
// 5




// =======================================
// 6. Math.max()
// =======================================

// Returns the largest value.

console.log(Math.max(10, 20, 30, 5));

// Output:
// 30




// =======================================
// 7. Math.pow()
// =======================================

// Raises a number to a power.

console.log(Math.pow(2, 3));

// Output:
// 8

// Modern JavaScript

console.log(2 ** 3);

// Output:
// 8




// =======================================
// 8. Math.sqrt()
// =======================================

// Returns square root.

console.log(Math.sqrt(25));

// Output:
// 5




// =======================================
// 9. Math.cbrt()
// =======================================

// Returns cube root.

console.log(Math.cbrt(27));

// Output:
// 3




// =======================================
// 10. Math.random()
// =======================================

// Generates a random decimal
// between 0 (inclusive)
// and 1 (exclusive).

console.log(Math.random());

// Example Outputs:
//
// 0.345
// 0.876
// 0.021




// ======================================================
// Random Number Between a Range
// ======================================================

// Generate a random integer
// between 50 and 100.

let min = 50;
let max = 100;

let random =
Math.floor(
    Math.random() * (max - min + 1)
) + min;

console.log(random);



// Explanation:
//
// Step 1
//
// Math.random()
//
// Example:
//
// 0.63



// Step 2
//
// Find the range.

max - min + 1

// 100 - 50 + 1
//
// = 51



// Step 3
//
// Multiply.

0.63 * 51

// = 32.13



// Step 4
//
// Remove decimal.

Math.floor(32.13)

// = 32



// Step 5
//
// Shift the range
// by adding minimum.

32 + 50

// = 82

// Final Output:
//
// Random number between
// 50 and 100




// ======================================================
// Formula
// ======================================================

Math.floor(
    Math.random() * (max - min + 1)
) + min;




// ======================================================
// Summary
// ======================================================

/*

Number Methods

toString()

toFixed()

toPrecision()

toLocaleString()


Math Methods

Math.PI

Math.abs()

Math.round()

Math.ceil()

Math.floor()

Math.min()

Math.max()

Math.pow()

Math.sqrt()

Math.cbrt()

Math.random()

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

console.log(typeof 100);

// number



// Q2.

console.log((100).toString());

// "100"



// Q3.

console.log((99.456).toFixed(2));

// 99.46



// Q4.

console.log(Math.floor(4.9));

// 4



// Q5.

console.log(Math.ceil(4.1));

// 5



// Q6.

console.log(Math.round(4.5));

// 5



// Q7.

// Formula for random number
// between min and max?

Math.floor(
    Math.random() * (max - min + 1)
) + min;
```
