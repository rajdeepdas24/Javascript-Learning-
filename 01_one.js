// for

/*

for (declaring a variable; condition; increment / decrement) {
    statements;
}

*/

for (let i = 1; i <=10; i++) {
    // console.log(`Table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value : ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}

// array
 
myArr = [1,2,3,4,5,6,7,8,9,0]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element, i);
}

// Break and continue


// for (let index = 1; index <= 30; index++) {
//     if (index === 5){
//         console.log(`${index} is detected`);
//         break;
//     }
//     console.log(`value of index is ${index}`);
// }


for (let index = 1; index <= 30; index++) {
    if (index === 5){
        console.log(`${index} is detected`);
        continue;
    }
    console.log(`value of index is ${index}`);
}


// _________________________________________________________________________________________________


/*

For Loop
_________________________________________________________

Definition

The for loop is used to execute a block of code repeatedly until a specified condition becomes false.

It is commonly used when the number of iterations is already known.

_________________________________________________________

Syntax

for(initialization; condition; increment/decrement){

    // statements

}

_________________________________________________________

Parts of a for Loop

1. Initialization

Executed only once before
the loop starts.

Example

let i = 0

_________________________________________________________

2. Condition

Checked before every iteration.

If the condition is true,
the loop continues.

If it becomes false,
the loop stops.

___________________________________________________

3. Increment / Decrement

Executed after every iteration.

Usually used to increase
or decrease the loop variable.

Example

i++

i--

___________________________________________________

Nested Loop

A loop inside another loop
is called a Nested Loop.

The outer loop executes once,
then the inner loop executes completely.

Common Uses

✔ Multiplication Tables

✔ Matrix Problems

✔ Pattern Printing

___________________________________________________

Looping Through an Array

Arrays are usually traversed
using a for loop.

The loop should run until

array.length

This ensures every element
is visited exactly once.

___________________________________________________

Break Statement

The break statement immediately
terminates the loop.

Execution continues with
the statement after the loop.

Use break when you want to
stop the loop early.

___________________________________________________

Continue Statement

The continue statement skips
the current iteration.

The loop immediately moves
to the next iteration.

Unlike break,
continue does NOT terminate
the loop.

___________________________________________________

Difference Between
break and continue

break

✔ Stops the entire loop.

___________________________________________________

continue

✔ Skips only the current iteration.

✔ Loop continues normally.

___________________________________________________

Summary

✔ for loop executes code repeatedly.

✔ Initialization runs only once.

✔ Condition is checked every iteration.

✔ Increment/Decrement updates
  the loop variable.

✔ Nested loops are loops
  inside another loop.

✔ break stops the loop.

✔ continue skips the current iteration.

_________________________________________________________

Interview Questions

Q1. What is a for loop?

Ans:

A loop used to execute
a block of code repeatedly
for a known number of iterations.

___________________________________________________

Q2. Name the three parts
of a for loop.

Ans:

• Initialization

• Condition

• Increment / Decrement

___________________________________________________

Q3. What is a Nested Loop?

Ans:

A loop inside another loop.

___________________________________________________

Q4. How do we iterate
through an array?

Ans:

Using

array.length

inside a loop condition.

___________________________________________________

Q5. What does break do?

Ans:

Immediately terminates the loop.

___________________________________________________

Q6. What does continue do?

Ans:

Skips the current iteration
and moves to the next one.

___________________________________________________

Q7. Difference between
break and continue?

Ans:

break

Stops the loop completely.

continue

Skips one iteration
and continues the loop.

_________________________________________________________

Easy Trick

for

Repeat Until Condition Becomes False

----------------------------

break

Stop Everything ❌

----------------------------

continue

Skip Once ➡ Continue

*/