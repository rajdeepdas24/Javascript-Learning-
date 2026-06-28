// for in

const myObj = {
    name : "Rajdeep",
    address : "Silchar"
}

for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`);
}

const arr = [1,2,3,4,5,6,7]

for (const key in arr) {
    // console.log(arr[key]);
}


const map = new Map ()
map.set ("IN", "India")
map.set ("USA", "United states of America")
map.set ("FR", "France")
map.set ("IN", "India")

// for (const key in map) {
//     console.log(key);
// } not possible for map



// ____________________________________________________________________________________



/*

for...in Loop
_________________________________________________________

Definition

The for...in loop is used to iterate over the enumerable properties (keys) of an object. It is mainly used with JavaScript Objects.

_________________________________________________________

Syntax

for (const key in object) {

    // statements

}

_________________________________________________________

How it Works

• Returns one key at a time.
• The corresponding value can be accessed using object[key].
• Continues until all keys have been visited.

_________________________________________________________

Objects

✔ Returns property names (keys).

_________________________________________________________

Arrays

✔ Can be used with arrays.
✔ Returns array indexes instead of values.

_________________________________________________________

Maps

✘ Does not work with Maps.

Reason:
Maps are iterable but their keys are not enumerable object properties.

Use for...of instead.

_________________________________________________________

Difference between for...in and for...of

for...in

• Returns keys.
• Mainly used with Objects.
• Returns indexes for Arrays.
• Does not work with Maps.

----------------------------

for...of

• Returns values.
• Works with Arrays.
• Works with Strings.
• Works with Maps.
• Works with Sets.
• Does not work with normal Objects.

_________________________________________________________

Summary

✔ Returns keys.
✔ Best suited for Objects.
✔ Returns indexes when used with Arrays.
✔ Does not work with Maps.

_________________________________________________________

Interview Questions

Q1. What is a for...in loop?

Ans:
A loop used to iterate over the keys (properties) of an object.

----------------------------

Q2. What does for...in return?

Ans:
Keys.

----------------------------

Q3. Can for...in be used with Arrays?

Ans:
Yes. It returns the array indexes.

----------------------------

Q4. Can for...in be used with Maps?

Ans:
No.

----------------------------

Q5. Difference between for...in and for...of?

Ans:
for...in returns keys.
for...of returns values.

----------------------------

Q6. How do you access the value inside a for...in loop?

Ans:
Using object[key] or array[key].

_________________________________________________________

Easy Trick

for...in

Object → Keys

Array → Indexes

----------------------------

for...of

Iterable → Values

*/