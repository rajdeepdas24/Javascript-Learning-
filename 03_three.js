// for of

/* basic syntax 

for (const element of object) {
    
}

*/

const arr = [1,2,3,4,5,6,7] //array

// for (const num of arr) {
//     console.log(num);
// }

const greet = "Hello, Good Morning" //string

// for (const g of greet) {
//     console.log(`Each character is : ${g}`);
    
// }


//maps

const map = new Map ()
map.set ("IN", "India")
map.set ("USA", "United states of America")
map.set ("FR", "France")
map.set ("IN", "India") // no re-entry of items

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} : ${value} `);
}

// objects cannot be iterated using this

/*

const myObj = {
    name : "Rajdeep",
    address : "Silchar"
}

for (const [key, value] of myObj) {
    console.log(`${key} : ${value} `);
    
}

*/

_____________________________________________________________________



/*

for...of Loop

Definition

The for...of loop is used to iterate over iterable objects. It directly gives the values of the elements instead of their indexes.

Iterable objects include:

• Arrays
• Strings
• Maps
• Sets

_________________________________________________________

Syntax

for (const variable of iterable) {

    // statements

}

_________________________________________________________

How it Works

• The loop picks one value at a time from the iterable.
• The selected value is stored in the loop variable.
• The process continues until all values are traversed.

_________________________________________________________

Using for...of with Arrays

The loop returns each element of the array one by one.

Example Output

1
2
3
4
5
6
7

_________________________________________________________

Using for...of with Strings

A string is also iterable.

The loop returns one character at a time.

Example Output

H
e
l
l
o

_________________________________________________________

Maps

A Map is a collection of key-value pairs.

Features of Map

• Stores data as key-value pairs.
• Maintains insertion order.
• Keys are unique.
• Duplicate keys are not allowed.
• If the same key is added again, its value is updated instead of creating another entry.

Example

map.set("IN", "India");
map.set("USA", "United States");
map.set("IN", "Bharat");

Output

IN : Bharat
USA : United States

_________________________________________________________

Destructuring in Map

Maps return data in the form of

[key, value]

We use array destructuring to access them.

Example

for (const [key, value] of map) {

}

_________________________________________________________

Can for...of Iterate Objects?

No.

Normal JavaScript objects are NOT iterable.

The following does NOT work:

for (const item of object) {

}

To iterate over objects, use:

• for...in
• Object.keys()
• Object.values()
• Object.entries()

_________________________________________________________

Difference Between for...of and for...in

for...of

• Iterates over values.
• Used with iterable objects.
• Works with Arrays, Strings, Maps and Sets.

----------------------------

for...in

• Iterates over keys.
• Mainly used with Objects.
• Can also iterate array indexes.

_________________________________________________________

Summary

✔ Used for iterable objects.

✔ Returns values directly.

✔ Works with Arrays.

✔ Works with Strings.

✔ Works with Maps.

✔ Works with Sets.

✔ Does NOT work with normal Objects.

_________________________________________________________

Interview Questions

Q1. What is a for...of loop?

Ans:

A loop used to iterate over iterable objects and access their values directly.

----------------------------

Q2. Which data types support for...of?

Ans:

• Arrays
• Strings
• Maps
• Sets

----------------------------

Q3. Can for...of be used with Objects?

Ans:

No.

Objects are not iterable.

----------------------------

Q4. What does a Map store?

Ans:

Key-value pairs.

----------------------------

Q5. Are duplicate keys allowed in a Map?

Ans:

No.

Adding the same key again updates its value.

----------------------------

Q6. What is destructuring in Maps?

Ans:

Using

[key, value]

to directly access both the key and value.

----------------------------

Q7. Difference between for...of and for...in?

Ans:

for...of

Returns values.

for...in

Returns keys (or array indexes).

_________________________________________________________

Easy Trick

for...of

Iterable → Values

(Array, String, Map, Set)

----------------------------

for...in

Object → Keys

*/