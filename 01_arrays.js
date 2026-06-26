// Array

const myArr = [0, 1, 2, 3, 4 , 5]
const heroes = ["spiderman", "IronMan", "Hulk", "Thor"]
console.log(myArr[0]);
console.log(heroes);


// make shallow copies
https://chatgpt.com/
// Array methods

// myArr.push(6)  //add elements in an array in the last
// myArr.push(7)  
// myArr.pop() //removes elements in an array from last
// console.log(myArr);


// myArr.unshift(9) //add elements in an array in the start
// myArr.shift() //removes elements in an array from the start
// console.log(myArr);


// console.log(myArr.includes(9)); //checks if the element is present in the array
// console.log(myArr.indexOf(9)); //checks the index of the given element in the array
// (If the element is not found, -1 index is returned)


const newArr = myArr.join()  //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // converts array into string



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

// slice() extracts a portion of an array. 
// Does NOT modify the original array. 
// Returns a NEW array.


console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2)

// splice() changes the original array.
// Modifies the original array.
// Can remove elements.
// Can add elements.
// Returns the removed elements.



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// # 📘 JavaScript Arrays Notes

```javascript
// ======================================================
// 📘 JavaScript Arrays
// ======================================================

// An Array is used to store multiple values
// inside a single variable.

// Arrays can store:
//
// Numbers
// Strings
// Booleans
// Objects
// Functions
// Even other Arrays




// ======================================================
// Creating Arrays
// ======================================================

const myArr = [0, 1, 2, 3, 4, 5];

const heroes = [
    "Spiderman",
    "IronMan",
    "Hulk",
    "Thor"
];




// ======================================================
// Accessing Array Elements
// ======================================================

// Array indexing starts from 0.

console.log(myArr[0]);

// Output:
// 0

console.log(heroes[2]);

// Output:
// Hulk

console.log(heroes);

// Output:
// ["Spiderman","IronMan","Hulk","Thor"]




// ======================================================
// Important Note
// ======================================================

// Arrays make SHALLOW COPIES.

// What is a Shallow Copy?

// A shallow copy copies only the first level.
//
// Primitive values are copied.
//
// Objects inside the array are copied
// by reference.

// Example:

const arr1 = [{ name: "Rajdeep" }];

const arr2 = [...arr1];

arr2[0].name = "Freeze";

console.log(arr1[0].name);

// Output:
// Freeze

// Because both arrays refer
// to the same object.




// ======================================================
// Array Methods
// ======================================================


// =======================================
// push()
// =======================================

// Adds element at the END.

myArr.push(6);

myArr.push(7);

console.log(myArr);

// Output:
//
// [0,1,2,3,4,5,6,7]




// =======================================
// pop()
// =======================================

// Removes the LAST element.

myArr.pop();

console.log(myArr);

// Output:
//
// [0,1,2,3,4,5,6]




// =======================================
// unshift()
// =======================================

// Adds element at the BEGINNING.

myArr.unshift(9);

console.log(myArr);

// Output:
//
// [9,0,1,2,3,4,5,6]




// =======================================
// shift()
// =======================================

// Removes FIRST element.

myArr.shift();

console.log(myArr);

// Output:
//
// [0,1,2,3,4,5,6]




// =======================================
// includes()
// =======================================

// Checks whether an element exists.

console.log(myArr.includes(3));

// Output:
// true


console.log(myArr.includes(10));

// Output:
// false




// =======================================
// indexOf()
// =======================================

// Returns the index
// of the given element.

console.log(myArr.indexOf(3));

// Output:
// 3


// If element is not found

console.log(myArr.indexOf(100));

// Output:
// -1




// =======================================
// join()
// =======================================

// Converts array into a string.

const newArr = myArr.join();

console.log(newArr);

// Output:
//
// "0,1,2,3,4,5"

console.log(typeof newArr);

// Output:
// string




// ======================================================
// slice()
// ======================================================

// Extracts a portion of an array.
//
// ✔ Returns a NEW array
//
// ✔ Original array remains unchanged

console.log("Original");

console.log(myArr);

// [0,1,2,3,4,5]



const myn1 = myArr.slice(1, 3);

console.log(myn1);

// Output:
//
// [1,2]

console.log(myArr);

// Output:
//
// [0,1,2,3,4,5]

// Original array is NOT changed.


// slice(start,end)
//
// start -> Included
//
// end -> NOT Included




// ======================================================
// splice()
// ======================================================

// Modifies the original array.
//
// ✔ Removes elements
//
// ✔ Can insert elements
//
// ✔ Returns removed elements

console.log(myArr);

// [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3);

console.log(myn2);

// Output:
//
// [1,2,3]

console.log(myArr);

// Output:
//
// [0,4,5]

// Original array has changed.




// ======================================================
// slice() vs splice()
// ======================================================

/*

slice()

✔ Returns New Array

✔ Original Array NOT Changed

✔ End Index NOT Included



splice()

✔ Original Array Changes

✔ Removes Elements

✔ Can Add Elements

✔ Returns Removed Elements

*/




// ======================================================
// Visual Difference
// ======================================================

/*

Original Array

[0,1,2,3,4,5]



slice(1,3)

↓

Returns

[1,2]

Original

[0,1,2,3,4,5]



splice(1,3)

↓

Returns

[1,2,3]

Original becomes

[0,4,5]

*/




// ======================================================
// Commonly Used Array Methods
// ======================================================

/*

push()

pop()

shift()

unshift()

includes()

indexOf()

join()

slice()

splice()

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

// Do arrays start from index 1?

// Answer:
//
// No
//
// Arrays start from index 0.



// Q2.

// Does join()
// return an array?

// Answer:
//
// No
//
// It returns a STRING.



// Q3.

// Does slice()
// modify the original array?

// Answer:
//
// No



// Q4.

// Does splice()
// modify the original array?

// Answer:
//
// Yes



// Q5.

// Difference between push()
// and unshift()?

// push()
// Adds at END

// unshift()
// Adds at START



// Q6.

// Difference between pop()
// and shift()?

// pop()
// Removes LAST

// shift()
// Removes FIRST




// ======================================================
// Easy Trick
// ======================================================

// push()
// END ➜ ➜

// pop()
// END ✂

// unshift()
// START ⬅

// shift()
// START ✂

// slice()
// COPY

// splice()
// CUT
```
