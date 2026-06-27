// for e-commerce shopping website, we need a cart option which doesn't know how many items will be added in the cart
// for that purpose, we use functions to add up the amount

function calculateCartPrice (val1, val2, ...num1 ){  //rest operator//
    return num1
}
// console.log(calculateCartPrice(200, 400 , 500, 2000))

const user = {
    username : "Rajdeep",
    price : "99"
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObj(user)


// handleObj({ //passing an object
//     username : "Trisha",
//     price : "399"
// })

const myArr = [712, 132 , 2565, 123, 21, 12]

function returnSecValue(getArray){
    return getArray[2];
}

// console.log(returnSecValue(myArr));
console.log(returnSecValue([362, 234324, 2432, 2344, 13113]));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// # 📘 JavaScript Functions (Part 2)

// ```javascript
// ======================================================
// 📘 JavaScript Functions (Part 2)
// ======================================================


// ======================================================
// Rest Parameter (...)
// ======================================================

// Sometimes we don't know how many
// arguments will be passed to a function.
//
// Example:
//
// Shopping Cart
//
// A customer can add any number of items.
//
// For such cases, we use the Rest Parameter (...)

// function calculateCartPrice(...prices) {

//     return prices;

// }

// console.log(calculateCartPrice(200, 400, 500, 2000));

// Output:
//
// [200,400,500,2000]


// The Rest Parameter collects all
// arguments into an array.




// ======================================================
// Rest Parameter with Normal Parameters
// ======================================================

// function calculateCartPrice(val1, val2, ...num1) {

//     return num1;

// }

// console.log(calculateCartPrice(200, 400, 500, 2000));

// Output:
//
// [500,2000]


// Explanation:
//
// val1 = 200
//
// val2 = 400
//
// Remaining values
//
// [500,2000]
//
// are stored inside num1.




// ======================================================
// Passing Objects to Functions
// ======================================================

// const user = {

//     username: "Rajdeep",

//     price: 99

// };


// function handleObject(anyObject) {

//     console.log(

//         `Username is ${anyObject.username} and price is ${anyObject.price}`

//     );

// }


// // Passing an object variable

// handleObject(user);


// Output:
//
// Username is Rajdeep and price is 99




// ======================================================
// Passing Object Directly
// ======================================================

// handleObject({

//     username: "Trisha",

//     price: 399

// });

// Output:
//
// Username is Trisha and price is 399




// ======================================================
// Passing Arrays to Functions
// ======================================================

// const myArray = [

//     712,

//     132,

//     2565,

//     123,

//     21,

//     12

// ];


// function returnThirdValue(getArray) {

//     return getArray[2];

// }

// console.log(returnThirdValue(myArray));

// Output:
//
// 2565




// ======================================================
// Passing Array Directly
// ======================================================

// console.log(

//     returnThirdValue([

//         362,

//         234324,

//         2432,

//         2344,

//         13113

//     ])

// );

// Output:
//
// 2432




// ======================================================
// Summary
// ======================================================

/*

Rest Parameter

function test(...values) Collects all arguments into an array




Passing Object

function test(obj)



Passing Array

function test(arr)



Access Array Element

arr[index]

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

// What is the Rest Parameter?

// It collects multiple
// arguments into an array.


// Q2.

// Difference between
// Rest (...) and Spread (...)?

// Rest
//
// Collects values
//
// Example

// function demo(...numbers) {}


// Spread
//
// Expands values
//
// Example

// const arr = [1,2,3];

// console.log(...arr);




// Q3.

// Output?

// function demo(a,b,...c){

//     console.log(c);

// }

// demo(10,20,30,40);

// Output:
//
// [30,40]




// Q4.

// Can objects be passed
// as function arguments?

// Yes




// Q5.

// Can arrays be passed
// as function arguments?

// Yes




// ======================================================
// Easy Trick
// ======================================================

// Rest (...)

// function demo(...args){}

// Think:
//
// Collect everything.




// Spread (...)

// const arr = [1,2,3];

// console.log(...arr);

// Think:
//
// Open or Expand.
