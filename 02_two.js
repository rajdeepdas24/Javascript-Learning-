//  while loop
let index = 0

while (index <= 10) {
   // console.log(`Value of Inndex is ${index}`);
   index++;
}

let myArr = [1,2,3,4,6,78,56]

let arr = 0;
while (arr < myArr.length) {
   // console.log(`Value at ${arr} is ${myArr[arr]}`)
   arr++;
}

let h = 1 

do {
   console.log(`Score is ${h}`);
   h++
} while (h<5);


// _________________________________________________________________________________________________________


/*
While Loop

Definition

The while loop is used to execute a block of code repeatedly as long as a specified condition remains true. It is generally used when the number of iterations is not known beforehand.

_________________________________________________________

Syntax

while (condition) {
    // statements
}

_________________________________________________________

How it Works

1. The condition is checked.
2. If the condition is true, the loop executes.
3. The update statement runs.
4. The condition is checked again.
5. The loop stops when the condition becomes false.

_________________________________________________________

Difference between while and do...while

while
• Checks the condition first.
• May execute zero times.

do...while
• Executes the code first.
• Checks the condition later.
• Always executes at least once.

_________________________________________________________

Summary

✔ Used when the number of iterations is unknown.
✔ Condition is checked before every iteration.
✔ Can execute zero times.
✔ Often used with arrays and unknown-length operations.

_________________________________________________________

Interview Questions

Q1. What is a while loop?

Ans: A loop that executes repeatedly as long as the specified condition remains true.

Q2. Difference between while and do...while?

Ans:
• while checks the condition first.
• do...while executes first and checks the condition later.

Q3. Which loop is guaranteed to execute at least once?

Ans: do...while loop.

Q4. When should we use a while loop?

Ans: When the number of iterations is not known beforehand.

_________________________________________________________

Easy Trick

for → Known iterations

while → Check ➜ Execute

do...while → Execute ➜ Check
*/