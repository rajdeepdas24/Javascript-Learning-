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