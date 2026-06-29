const num = [1,2,3,4,5,6,7,8,9,10]

// const newnums = num.map( (n) => n + 10 ) 

const newnums = num
                    .map( (n) => n * 10 )
                    .map( (n) => n+1)
                    .map( (n) => n + 10)
                    .filter( (n) => n>=50) //chaining method

console.log(newnums);



// ____________________________________________________________________________________



/*

map() Method
_________________________________________________________

Definition

The map() method is used to create a new array by applying a function to every element of an existing array.

It does not modify the original array.

_________________________________________________________

Syntax

array.map((element) => {

    return modifiedValue;

})

_________________________________________________________

How it Works

• Visits each element of the array.
• Performs the specified operation.
• Stores the returned value in a new array.
• Returns the new array.

_________________________________________________________

Return Value

✔ Returns a new array.

✔ The new array always has the same length as the original array.

_________________________________________________________

Implicit Return

When curly braces {} are not used, the value is returned automatically.

_________________________________________________________

Explicit Return

When curly braces {} are used, the return keyword is mandatory.

_________________________________________________________

Method Chaining

Method chaining means calling multiple array methods one after another.

The output of one method becomes the input for the next method.

Commonly used methods

• map()

• filter()

• reduce()

_________________________________________________________

Difference between map() and filter()

map()

✔ Modifies every element.

✔ Returns a new array.

✔ Array length remains the same.

----------------------------

filter()

✔ Selects matching elements.

✔ Returns a new array.

✔ Array length may increase or decrease depending on the condition.

_________________________________________________________

Difference between map() and forEach()

map()

✔ Returns a new array.

✔ Used when values need to be transformed.

----------------------------

forEach()

✔ Returns undefined.

✔ Used when only performing an action.

_________________________________________________________

Summary

✔ Creates a new array.

✔ Does not modify the original array.

✔ Returns the same number of elements.

✔ Used to transform data.

✔ Supports method chaining.

_________________________________________________________

Interview Questions

Q1. What is the map() method?

Ans:

An array method that creates a new array by transforming every element of the original array.

----------------------------

Q2. Does map() modify the original array?

Ans:

No.

It returns a new array.

----------------------------

Q3. Does map() always return the same number of elements?

Ans:

Yes.

The length of the new array is always equal to the original array.

----------------------------

Q4. Difference between map() and filter()?

Ans:

map()

Transforms every element.

filter()

Selects only matching elements.

----------------------------

Q5. Difference between map() and forEach()?

Ans:

map()

Returns a new array.

forEach()

Returns undefined.

----------------------------

Q6. What is Method Chaining?

Ans:

Calling multiple methods one after another where the output of one method becomes the input of the next.

----------------------------

Q7. Can map() and filter() be chained together?

Ans:

Yes.

Method chaining is commonly used with array methods.

_________________________________________________________

Easy Trick

map()

Transform Data

↓

New Array

----------------------------

filter()

Select Data

↓

New Array

----------------------------

forEach()

Perform Action

↓

No Return

*/