// const tinderUser = new Object() //singleton Object

const tinderUser = {} // non-singleton Object

tinderUser.name = "sam"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { name: 'sam', id: '123abc', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Rajdeep",
            lastname : "Das"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); //Rajdeep
// console.log(regularUser.fullname?.userfullname.lastname); //Das

// combining objects
const obj1 = { 
    1 : "a", 
    2 : "b"
}
const obj2 = { 
    3 : "a", 
    4 : "b"
}
const obj4 = { 
    5 : "a", 
    6 : "b"
}
// const obj3 = { obj1, obj2} //this arises the problem of object in object
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({},obj1, obj2, obj4) //used but not recommended
const obj5 = {...obj1, ...obj2} // used often and recommended
// console.log(obj3);
// console.log(obj5);

const users = [ //suppose you have got users from a database
    {
        id : 11,
        email : 21
    },
    {
        id : 22,
        email : 32
    },
    {
        id : 33,
        email : 43
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// # 📘 JavaScript Objects Notes (Part 2)

```javascript
// ======================================================
// 📘 JavaScript Objects (Part 2)
// ======================================================


// ======================================================
// Creating Objects
// ======================================================

// Method 1
// Object Constructor (Singleton Object)

const tinderUser1 = new Object();


// Method 2
// Object Literal (Most Common)

const tinderUser = {};


// Add Properties

tinderUser.name = "Sam";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Output:
//
// {
//   name: "Sam",
//   id: "123abc",
//   isLoggedIn: false
// }




// ======================================================
// Nested Objects
// ======================================================

const regularUser = {

    email: "some@gmail.com",

    fullname: {

        userfullname: {

            firstname: "Rajdeep",

            lastname: "Das"

        }

    }

};


// Access Nested Properties

console.log(
    regularUser.fullname.userfullname.firstname
);

// Output:
// Rajdeep


console.log(
    regularUser.fullname.userfullname.lastname
);

// Output:
// Das




// ======================================================
// Optional Chaining (?)
// ======================================================

// Prevents errors when a property
// may not exist.

console.log(
    regularUser.fullname?.userfullname.firstname
);

// If fullname doesn't exist,
// JavaScript returns undefined
// instead of throwing an error.




// ======================================================
// Combining Objects
// ======================================================

const obj1 = {

    1: "a",

    2: "b"

};

const obj2 = {

    3: "c",

    4: "d"

};

const obj4 = {

    5: "e",

    6: "f"

};




// Wrong Way

const wrongObj = {

    obj1,

    obj2

};

console.log(wrongObj);

// Output:
//
// {
//   obj1:{...},
//   obj2:{...}
// }

// Objects become nested.




// ======================================================
// Object.assign()
// ======================================================

// Combines multiple objects.
//
// Returns a new object.

const obj3 = Object.assign(
    {},
    obj1,
    obj2,
    obj4
);

console.log(obj3);

// Output:
//
// {
//   1:'a',
//   2:'b',
//   3:'c',
//   4:'d',
//   5:'e',
//   6:'f'
// }


// Syntax

// Object.assign(target, source1, source2...)


// The empty object {}
// is the target object.




// ======================================================
// Spread Operator (...)
// ======================================================

// Modern and Recommended

const obj5 = {

    ...obj1,

    ...obj2,

    ...obj4

};

console.log(obj5);

// Output:
//
// {
//   1:'a',
//   2:'b',
//   3:'c',
//   4:'d',
//   5:'e',
//   6:'f'
// }




// ======================================================
// Array of Objects
// ======================================================

// Data coming from databases
// is often stored like this.

const users = [

    {

        id: 11,

        email: "rajdeep@gmail.com"

    },

    {

        id: 22,

        email: "freeze@gmail.com"

    },

    {

        id: 33,

        email: "abc@gmail.com"

    }

];


// Access second user's email

console.log(users[1].email);

// Output:
//
// freeze@gmail.com




// ======================================================
// Object.keys()
// ======================================================

// Returns all keys
// as an array.

console.log(
    Object.keys(tinderUser)
);

// Output:
//
// ["name","id","isLoggedIn"]




// ======================================================
// Object.values()
// ======================================================

// Returns all values
// as an array.

console.log(
    Object.values(tinderUser)
);

// Output:
//
// ["Sam","123abc",false]




// ======================================================
// Object.entries()
// ======================================================

// Converts object into
// key-value pairs.

console.log(
    Object.entries(tinderUser)
);

// Output:
//
// [
//   ["name","Sam"],
//   ["id","123abc"],
//   ["isLoggedIn",false]
// ]




// ======================================================
// hasOwnProperty()
// ======================================================

// Checks whether
// a property exists.

console.log(
    tinderUser.hasOwnProperty("isLoggedIn")
);

// Output:
// true


console.log(
    tinderUser.hasOwnProperty("isLogged")
);

// Output:
// false




// ======================================================
// Summary
// ======================================================

/*

Object Constructor

new Object()



Object Literal

{}



Nested Object

obj.a.b.c



Optional Chaining

obj?.a?.b



Combine Objects

Object.assign()

Spread (...)




Object Methods

Object.keys()

Object.values()

Object.entries()

hasOwnProperty()

*/




// ======================================================
// Interview Questions
// ======================================================

// Q1.

// Difference between

// {}

// and

// new Object()

// Both create objects.
//
// {} is the preferred and
// most commonly used syntax.




// Q2.

// Why use Optional Chaining?

// Prevents runtime errors
// if a property doesn't exist.




// Q3.

// Difference between

// Object.assign()

// and

// Spread (...)

// Both merge objects.
//
// Spread (...) is cleaner
// and preferred in modern JavaScript.




// Q4.

// What does

// Object.keys()

// return?

// An array of keys.




// Q5.

// What does

// Object.values()

// return?

// An array of values.




// Q6.

// What does

// Object.entries()

// return?

// An array of key-value pairs.




// Q7.

// What does

// hasOwnProperty()

// do?

// Checks whether a property
// belongs directly to the object.
```
