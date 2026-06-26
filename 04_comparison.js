// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);

// equality and comparisons works differently
// comparison converts null to a number, treating it as 0
// that's why null>=0 is true


// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// but it doesn't follow the same with undefined

// === strictly check

console.log("2" === 2);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



 //📘 JavaScript Comparison Operators Notes

```javascript
// ======================================================
// 📘 JavaScript Comparison Operators
// ======================================================

// Comparison operators compare two values
// and return either true or false.


// =======================================
// Basic Comparison Operators
// =======================================

console.log(2 > 1);      // Greater than

// Output:
// true


console.log(2 < 1);      // Less than

// Output:
// false


console.log(2 >= 1);     // Greater than or equal

// Output:
// true


console.log(2 <= 1);     // Less than or equal

// Output:
// false


console.log(2 == 1);     // Loose equality

// Output:
// false


console.log(2 != 1);     // Not equal

// Output:
// true




// ======================================================
// String vs Number Comparison
// ======================================================

// JavaScript automatically converts
// strings into numbers during comparison.

console.log("2" > 1);

// Output:
// true

// Because:

// "2"
// becomes
// 2

// Then

// 2 > 1

// true




console.log("02" > 1);

// Output:
// true

// Because:

// "02"
// becomes
// 2

// Then

// 2 > 1




// ======================================================
// Null Comparison
// ======================================================

// null represents an intentionally empty value.

console.log(null > 0);

// Output:
// false



console.log(null < 0);

// Output:
// false



console.log(null == 0);

// Output:
// false



console.log(null >= 0);

// Output:
// true

// ⭐ Interview Question


// Why?

// Comparison operators (>, <, >=, <=)
// convert null into 0.

// So,

// null >= 0

// becomes

// 0 >= 0

// true



// But

// null == 0

// is false

// because == follows different rules.




// ======================================================
// Undefined Comparison
// ======================================================

console.log(undefined > 0);

// Output:
// false


console.log(undefined < 0);

// Output:
// false


console.log(undefined == 0);

// Output:
// false


console.log(undefined >= 0);

// Output:
// false


// undefined does NOT become 0.
//
// Every comparison involving undefined
// (except undefined == null)
// is generally false.




// ======================================================
// Loose Equality (==)
// ======================================================

// == compares only values.
//
// It performs automatic type conversion
// if the data types are different.

console.log("2" == 2);

// Output:
// true

// Because

// "2"

// becomes

// 2




// ======================================================
// Strict Equality (===)
// ======================================================

// === compares both
//
// 1. Value
// 2. Data Type

console.log("2" === 2);

// Output:
// false

// Because

// "2"
// is a String

// 2
// is a Number




// Example

console.log(2 === 2);

// Output:
// true



console.log(2 == "2");

// Output:
// true



console.log(2 === "2");

// Output:
// false




// ======================================================
// != and !==
// ======================================================

// !=
// Loose Not Equal

console.log(2 != "2");

// Output:
// false

// Because

// "2"

// becomes

// 2




// !==
// Strict Not Equal

console.log(2 !== "2");

// Output:
// true

// Number
// is not equal to
// String




// ======================================================
// Summary Table
// ======================================================

/*

Operator      Meaning

>             Greater Than
<             Less Than
>=            Greater Than or Equal
<=            Less Than or Equal

==            Loose Equality

===           Strict Equality

!=            Loose Not Equal

!==           Strict Not Equal

*/




// ======================================================
// Important Rules
// ======================================================

/*

==

✔ Compares only values
✔ Converts data types automatically


===

✔ Compares values
✔ Compares data types
✔ No automatic conversion

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

console.log("2" == 2);

// Output:
// true



// Q2.

console.log("2" === 2);

// Output:
// false



// Q3.

console.log(null == 0);

// Output:
// false



// Q4.

console.log(null >= 0);

// Output:
// true



// Q5.

console.log(undefined == 0);

// Output:
// false



// Q6.

console.log(typeof null);

// Output:
// object



// ======================================================
// Best Practice
// ======================================================

// Always prefer using === instead of ==
//
// Reason:
//
// It avoids unexpected type conversion
// and makes your code more predictable.

console.log(10 === 10);

// true

console.log("10" === 10);

// false
```
