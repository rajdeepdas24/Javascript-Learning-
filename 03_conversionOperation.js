let score = 33 //number
// let score = "33" //string
// let score = null //NaN , object
// let score = undefined //NaN , undefined
// let score = true //1, boolean

// console.log(typeof score);
// console.log(typeof (score));

// let ValueInNumber = Number(score)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

// "33" => 33
// "33abc" => NaN 
// true => 1 , false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// true => 1 , false => 0
// "" => false
// "Rajdeep" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// _______operators___________________________________________________________________________________ //


let value = 3
let negValue = -value
// console.log(negValue);

// basic operators______________________________________

// console.log(2+2); //add
// console.log(2-2); //sub
// console.log(2*2); //multiply
// console.log(2**2); //power
// console.log(2/2); //divide
// console.log(2%2); //mod

let str1 = "Hello "
let str2 = "Rajdeep"
let str3 = str1 + str2
console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2); //if string is in first, everything will be treated as string 
// console.log("1" + (2 + 2)); //but if we use brackets, it doesn't behave like string
// console.log(1 + 2 + "2"); // that's why we need to use proper brackets for readability, but can be asked in interviews or exams



// console.log(true); 
// console.log(+true); //gives 1 as output
// console.log(true+); //This is bullshit



let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not to code like this


let gameCounter = 100
++gameCounter; //pre-increment = 101
gameCounter++; //post-increment = 102
// console.log(gameCounter); //102



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// # 📘 JavaScript Type Conversion & Operators Notes

```javascript
// ======================================================
// 📘 JavaScript Type Conversion
// ======================================================

// JavaScript automatically converts data types in some cases.
// We can also convert them manually.

// =======================================
// Number Conversion
// =======================================

// Number() converts any value into a number.

let score = 33;

// Other Examples

// let score = "33";         // String
// let score = "33abc";      // Invalid Number
// let score = null;         // Empty value
// let score = undefined;    // Undefined
// let score = true;         // Boolean


console.log(typeof score);

// Output:
// number


// Convert into Number

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


// =======================================
// Number() Conversion Table
// =======================================

/*

Original Value         Result

33                     33
"33"                   33
"33abc"                NaN
true                   1
false                  0
null                   0
undefined              NaN
""                     0

*/


// NaN means
// "Not a Number"

console.log(Number("33abc"));

// Output:
// NaN

// Although NaN means "Not a Number",
// its type is still:

console.log(typeof NaN);

// Output:
// number

// ⭐ Interview Question




// =======================================
// Boolean Conversion
// =======================================

// Boolean() converts values into
// true or false.

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// Output:
// true



// Boolean Conversion Table

/*

Original Value        Result

1                     true
0                     false

"Rajdeep"             true
""                    false

null                  false
undefined             false

*/

// Any non-empty string is true.
// Empty string is false.




// =======================================
// String Conversion
// =======================================

// String() converts any value into a string.

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// Output:
// "33"
// string




// ======================================================
// 📘 Operators
// ======================================================


// Unary Minus

let value = 3;

let negValue = -value;

console.log(negValue);

// Output:
// -3




// =======================================
// Arithmetic Operators
// =======================================

console.log(2 + 2);   // Addition

console.log(2 - 2);   // Subtraction

console.log(2 * 2);   // Multiplication

console.log(2 / 2);   // Division

console.log(2 % 2);   // Modulus (Remainder)

console.log(2 ** 3);  // Power

// Output:
// 8




// =======================================
// String Concatenation
// =======================================

let str1 = "Hello ";
let str2 = "Rajdeep";

let str3 = str1 + str2;

console.log(str3);

// Output:
// Hello Rajdeep




// =======================================
// String + Number
// =======================================

console.log(1 + "2");

// Output:
// "12"



// Number becomes String.

console.log("1" + 2);

// Output:
// "12"



console.log("1" + 2 + 2);

// Output:
// "122"

// Reason:
//
// First value is String,
// so everything becomes String.



console.log(1 + 2 + "2");

// Output:
// "32"

// Reason:
//
// 1 + 2 = 3
//
// Then
//
// 3 + "2"
//
// becomes
//
// "32"



console.log("1" + (2 + 2));

// Output:
// "14"

// Brackets execute first.




// =======================================
// Unary Plus
// =======================================

console.log(+true);

// Output:
// 1

console.log(+false);

// Output:
// 0


// Invalid Syntax

// console.log(true+);

// ❌ Syntax Error




// =======================================
// Multiple Assignment
// =======================================

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

// All variables become 4.

console.log(num1);
console.log(num2);
console.log(num3);


// ⚠ Avoid writing code like this.
//
// Better:

num1 = 4;
num2 = 4;
num3 = 4;




// =======================================
// Increment Operator
// =======================================

let gameCounter = 100;


// Pre Increment

++gameCounter;

console.log(gameCounter);

// Output:
// 101



// Post Increment

gameCounter++;

console.log(gameCounter);

// Output:
// 102




// =======================================
// Difference Between
// Pre & Post Increment
// =======================================


// Pre Increment

let x = 5;

console.log(++x);

// Output:
// 6

// First increases,
// then returns the value.




// Post Increment

let y = 5;

console.log(y++);

// Output:
// 5

console.log(y);

// Output:
// 6

// First returns,
// then increases.




// =======================================
// Summary
// =======================================

/*

Type Conversion

Number(value)
Boolean(value)
String(value)


Arithmetic Operators

+
-
*
/
%
**


Increment

++
--


*/


// =======================================
// Interview Questions
// =======================================

// Q1. Number("33abc")

// Output:
// NaN


// Q2. typeof NaN

// Output:
// number


// Q3. Boolean("")

// Output:
// false


// Q4. Boolean("Rajdeep")

// Output:
// true


// Q5. "1" + 2 + 2

// Output:
// "122"


// Q6. 1 + 2 + "2"

// Output:
// "32"


// Q7. Difference between ++x and x++

// ++x
// Increment first,
// then return.

// x++
// Return first,
// then increment.
```
