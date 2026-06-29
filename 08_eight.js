// reduce 

const Arr = [1,2,3,4,5]

const i = 0

const total = Arr.reduce((acc, curr) => {

    // console.log(`accumulator : ${acc}, current value : ${curr}`);
    
    return acc + curr},0);

// console.log(total);


const shopcart = [
    {
        itemname : "JS course", 
        price : 2999
    },
    {
        itemname : "PY course", 
        price : 999
    },
    {
        itemname : "C++ course", 
        price : 1999
    },
    {
        itemname : "AI/ML course", 
        price : 8999
    }
]

const updatedcart = shopcart.reduce( (acc, curr) => acc + curr.price , 0)

// or

// const updatedcart = shopcart.reduce( (acc, curr) => {
//     console.log(`accumulator : ${acc}, current value : ${curr.price}`);
//     return acc + curr.price} , 0)

console.log(updatedcart);


// _______________________________________________________________________________________________________


/*

reduce() Method
_________________________________________________________

Definition

The reduce() method is used to reduce all elements of an array into a single value. The final value can be a sum, product, average, object, array or any custom result.

_________________________________________________________

Syntax

array.reduce((accumulator, currentValue) => {

    return updatedAccumulator;

}, initialValue)

_________________________________________________________

How it Works

• Starts with the initial value.
• Takes one array element at a time.
• Updates the accumulator.
• Continues until all elements are processed.
• Returns a single final value.

_________________________________________________________

Parameters

accumulator (acc)

Stores the accumulated result after each iteration.

----------------------------

currentValue (curr)

Represents the current element being processed.

----------------------------

initialValue

The starting value of the accumulator.

Commonly

0

for addition.

_________________________________________________________

Return Value

✔ Returns a single value.

It may be

• Number
• String
• Object
• Array
• Boolean

depending on the operation performed.

_________________________________________________________

Using reduce() with Objects

reduce() can also be used with arrays of objects.

It is commonly used to

• Calculate total price.

• Count objects.

• Group data.

• Find maximum or minimum values.

_________________________________________________________

Difference between reduce(), map() and filter()

reduce()

✔ Returns a single value.

✔ Combines all elements into one result.

----------------------------

map()

✔ Returns a new array.

✔ Transforms every element.

----------------------------

filter()

✔ Returns a new array.

✔ Returns only matching elements.

_________________________________________________________

Summary

✔ Returns a single value.

✔ Uses an accumulator.

✔ Processes every array element.

✔ Does not modify the original array.

✔ Can work with arrays of objects.

_________________________________________________________

Interview Questions

Q1. What is reduce()?

Ans:

An array method that combines all elements into a single value.

----------------------------

Q2. What is an accumulator?

Ans:

A variable that stores the accumulated result after each iteration.

----------------------------

Q3. What is currentValue?

Ans:

The current array element being processed.

----------------------------

Q4. Why do we pass an initial value?

Ans:

It provides the starting value for the accumulator.

----------------------------

Q5. What does reduce() return?

Ans:

A single value.

----------------------------

Q6. Can reduce() be used with arrays of objects?

Ans:

Yes.

It is commonly used to calculate totals, counts and grouped data.

----------------------------

Q7. Difference between reduce(), map() and filter()?

Ans:

reduce()

Returns one value.

map()

Returns a transformed array.

filter()

Returns a filtered array.

_________________________________________________________

Easy Trick

reduce()

Many Values

↓

One Value

----------------------------

map()

Many Values

↓

Many Modified Values

----------------------------

filter()

Many Values

↓

Matching Values

*/