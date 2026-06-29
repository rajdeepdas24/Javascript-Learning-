// const coding = ["cpp", "c", "JS", "Java", "Python"]

// const values = coding.forEach( (item) => {
     // console.log(item);
//     return item
// })

// console.log(values);
// for each doesn't return any value

const num = [1,5,6,8,9]

// const newNum = num.filter( (num) => num > 4 )
const newNum = num.filter( (num) => {
    return num > 4 
})
// console.log(newNum);
  

const books = [
    {
        title: "The Alchemist",
        genre: "Fiction",
        publishedYear: 2019
    },
    {
        title: "Atomic Habits",
        genre: "Self Help",
        publishedYear: 2018
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "Finance",
        publishedYear: 2001
    },
    {
        title: "Harry Potter",
        genre: "Fantasy",
        publishedYear: 1997
    },
    {
        title: "The Hobbit",
        genre: "Fiction",
        publishedYear: 1937
    }
];

 
let mybooks = books.filter( (bk) => bk.genre === "Fiction")

mybooks = books.filter( (bk) => { 
    return bk.publishedYear >= 2000 && bk.genre === "Fiction"
})
console.log(mybooks);



// ___________________________________________________________________________________


/*

filter() Method
_________________________________________________________

Definition

The filter() method is used to create a new array containing only the elements that satisfy a specified condition.

It does not modify the original array.

_________________________________________________________

Syntax

array.filter((element) => {

    return condition;

})

_________________________________________________________

How it Works

• Visits each element of the array.
• Checks the given condition.
• If the condition is true, the element is added to the new array.
• If the condition is false, the element is ignored.
• Returns a new filtered array.

_________________________________________________________

Return Value

✔ Returns a new array.

✔ If no element satisfies the condition, an empty array is returned.

_________________________________________________________

Implicit Return

When curly braces {} are not used, the result is returned automatically.

_________________________________________________________

Explicit Return

When curly braces {} are used, the return keyword is mandatory.

Without return, nothing is added to the new array.

_________________________________________________________

Filtering Arrays of Objects

filter() can also be used with arrays of objects.

Conditions can be applied on object properties such as

• title
• genre
• publishedYear

Multiple conditions can be combined using

&&  (AND)

||  (OR)

_________________________________________________________

Difference between filter() and forEach()

filter()

✔ Returns a new array.

✔ Used to select elements.

✔ Does not modify the original array.

----------------------------

forEach()

✔ Returns undefined.

✔ Used to perform an action on each element.

✔ Does not create a new array.

_________________________________________________________

Summary

✔ Creates a new array.

✔ Returns only matching elements.

✔ Original array remains unchanged.

✔ Works with primitive values and objects.

✔ Supports multiple conditions.

✔ Requires return when using {}.

_________________________________________________________

Interview Questions

Q1. What is the filter() method?

Ans:

An array method that returns a new array containing only the elements that satisfy a given condition.

----------------------------

Q2. Does filter() modify the original array?

Ans:

No.

It returns a new array.

----------------------------

Q3. What does filter() return if no element matches?

Ans:

An empty array ([]).

----------------------------

Q4. What is the difference between filter() and forEach()?

Ans:

filter()

Returns a new array.

forEach()

Returns undefined.

----------------------------

Q5. Is return required inside filter()?

Ans:

Yes, when using curly braces {}.

No, when using implicit return.

----------------------------

Q6. Can filter() be used with arrays of objects?

Ans:

Yes.

It can filter objects based on their properties.

----------------------------

Q7. Can multiple conditions be used inside filter()?

Ans:

Yes.

Using logical operators like

&& (AND)

|| (OR)

_________________________________________________________

Easy Trick

filter()

Condition ✔

↓

Matching Elements

↓

New Array

*/