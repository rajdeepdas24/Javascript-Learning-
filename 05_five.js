const coding = [1, 2, 3];

// coding.forEach( function (item){
//     console.log(item);
// })


// coding.forEach( (val) =>{
//     console.log(val);
// })


// function printme (val){
//     console.log(val);
// }

// coding.forEach(printme)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })



const mycoding = [ {
    username : "Trisha",
    gender : "Female"
    },
    {
    username : "Rajdeep",
    gender : "Male"
    },
    {
    username : "Kapil",
    gender : "Gay"
    }
]


mycoding.forEach( (item) => {
    console.log(`${item.username} : ${item.gender}`);
    
})




// _________________________________________________________________________________________



/*

forEach Loop
_________________________________________________________

Definition

The forEach() method is used to iterate over each element of an array. It executes a callback function once for every element in the array.

_________________________________________________________

Syntax

array.forEach(function(currentValue, index, array){

    // statements

})

or

array.forEach((currentValue, index, array) => {

    // statements

})

_________________________________________________________

Callback Function

A callback function is a function that is passed as an argument to another function and is executed later.

The callback receives three arguments:

• currentValue → Current element.
• index → Index of the current element.
• array → Original array.

All three parameters are optional.

_________________________________________________________

Ways to Use forEach()

✔ Anonymous Function

✔ Arrow Function

✔ Named Function

_________________________________________________________

Objects inside Arrays

forEach() can also iterate over arrays containing objects.

Object properties can be accessed using

object.property

_________________________________________________________

Important Points

✔ Executes once for every array element.

✔ Maintains the order of elements.

✔ Does not modify the original array unless explicitly changed.

✔ Does not return a new array.

✔ Cannot be stopped using break or continue.

_________________________________________________________

Difference Between
forEach() and for...of

forEach()

• Array method.
• Cannot use break or continue.
• Does not return a value.
• Used for performing actions.

----------------------------

for...of

• Loop statement.
• Supports break and continue.
• Can be used with Arrays, Strings, Maps and Sets.
• More flexible.

_________________________________________________________

Summary

✔ Used to iterate over arrays.

✔ Executes callback once for each element.

✔ Can access value, index and array.

✔ Works with arrays of objects.

✔ Cannot use break or continue.

✔ Does not return a new array.

_________________________________________________________

Interview Questions

Q1. What is forEach()?

Ans:
An array method that executes a callback function once for every array element.

----------------------------

Q2. Does forEach() return a new array?

Ans:
No.

----------------------------

Q3. Can break or continue be used inside forEach()?

Ans:
No.

----------------------------

Q4. What arguments does the callback receive?

Ans:

• Current Value

• Index

• Original Array

----------------------------

Q5. Can forEach() iterate over an array of objects?

Ans:
Yes.

----------------------------

Q6. Difference between forEach() and map()?

Ans:

forEach()

Used for performing actions.
Returns undefined.

map()

Creates and returns a new array.

_________________________________________________________

Easy Trick

forEach()

Array → Perform Action

No Return

No break

No continue

*/