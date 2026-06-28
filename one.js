// if condition

// syntax :

// if (condition) {
//     statement
// } else {
//     statement
// }

const temperature = 39

if (temperature < 50) {
    console.log(`Temperature is less than 50`);
}
else{
    console.log(`Temperature is very high`);
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100){
    const power = "speed"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); //scope concept, variable cannot be used outside the scope

//short hand notation

const balance = 1000;

// if(balance > 500) console.log("amount more than 500rs");

// nesting

if(balance < 500){
    console.log("Less than 500rs");
} else if(balance < 750){
    console.log("Less than 750rs");
} else if ( balance > 900){
    console.log("Greater than 900");
} else {
    console.log("0rs");
}


// Nullish Coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 9 ?? 181

console.log(val1);


// terniary operator

// condition ? true : false 

const price = 1000;

price >= 300 ? console.log("Out of budget") : console.log("In budget");


_____________________________________________________________________________________________________


/*

   IF - ELSE STATEMENTS


Definition

The if statement is used to execute a block of code
only when a specified condition is true.

Syntax

if (condition) {
    // code
}
else {
    // code
}

_____________________________________________________________________________________________________


Comparison Operators

>  :  Greater Than

<  :  Less Than

>= : Greater Than or Equal To

<= :  Less Than or Equal To

== :  Loose Equality
     Compares only values.

=== :  Strict Equality
     Compares both value and datatype.

!= :  Loose Not Equal

!== :  Strict Not Equal

_____________________________________________________________________________________________________


if Statement

• Executes only when the condition is true.

_____________________________________________________________________________________________________


else Statement

• Executes only when the if condition is false.

_____________________________________________________________________________________________________


else if Ladder

• Used when checking multiple conditions.

• JavaScript executes the FIRST true condition
  and ignores the remaining conditions.
_____________________________________________________________________________________________________


Block Scope

Variables declared using let and const
inside an if block exist only inside
that block.

They cannot be accessed outside it.
_____________________________________________________________________________________________________


Shorthand if

When there is only one statement,
curly braces {} can be omitted.

Example

if(balance > 500)
    console.log("More than 500");
_____________________________________________________________________________________________________


Best Practice

✔ Use === instead of ==

✔ Use curly braces {} even for
  single-line statements to improve readability.

✔ Avoid deeply nested if statements.


_____________________________________________________________________________________________________


Summary

• if → Executes when condition is true.

• else → Executes when condition is false.

• else if → Used for multiple conditions.

• let & const → Block Scoped.

• var → Function Scoped (Avoid).


_____________________________________________________________________________________________________


Interview Questions

Q1. What is an if statement?

Ans:
Executes a block of code when
the condition is true.
____________________________________________


Q2. Difference between if and else?

Ans:
if → Executes when condition is true.

else → Executes when condition is false.

____________________________________________

Q3. Difference between == and ===?

Ans:
== compares only values.

=== compares value and datatype.

____________________________________________


Q4. Why should we avoid var?

Ans:
Because var is function scoped
and may cause scope-related bugs.

____________________________________________


Q5. Can variables declared inside
an if block be accessed outside?

Ans:
No.
Variables declared with let and const
are block scoped.

____________________________________________


Q6. When do we use else if?

Ans:
When checking multiple conditions.

____________________________________________


Easy Trick

if
↓
One Condition

if + else
↓
Two Possibilities

if + else if + else
↓
Multiple Possibilities


*/


_____________________________________________________________________________________________________


/*

Nullish Coalescing Operator (??)
_________________________________________________________

Definition

The Nullish Coalescing Operator (??)
returns the right-hand value only when
the left-hand value is

• null
• undefined

If the left-hand value is anything else,
it is returned.

_________________________________________________________

Syntax

value1 ?? value2

_________________________________________________________

Examples

5 ?? 10

Output:
5

Reason:
5 is neither null nor undefined.

----------------------------

null ?? 10

Output:
10

Reason:
null is considered a nullish value.

----------------------------

undefined ?? 15

Output:
15

Reason:
undefined is also a nullish value.

----------------------------

null ?? 9 ?? 181

Output:
9

Reason:
The first non-nullish value is returned.

_________________________________________________________

Difference Between ?? and ||

?? checks only

• null
• undefined

||

Checks all falsy values

• false
• 0
• ""
• null
• undefined
• NaN

Example

0 || 100

Output:
100

because 0 is falsy.

----------------------------

0 ?? 100

Output:
0

because 0 is NOT null or undefined.

_________________________________________________________

When to Use ??

✔ Setting default values.

✔ Handling API responses.

✔ Preventing null or undefined values.

_________________________________________________________

Ternary Operator
_________________________________________________________

Definition

The Ternary Operator is a shorthand
for writing simple if...else statements.

_________________________________________________________

Syntax

condition
    ? expression_if_true
    : expression_if_false

_________________________________________________________

How it Works

If the condition is true,
the first expression executes.

If the condition is false,
the second expression executes.

_________________________________________________________

Example

price >= 300
    ? "Out of Budget"
    : "In Budget"

If price is 1000

Output

Out of Budget

_________________________________________________________

When to Use Ternary Operator

✔ Simple conditions.

✔ Returning one of two values.

✔ Shorter than if...else.

Avoid using it for
complex nested conditions,
as readability decreases.

_________________________________________________________

Summary

✔ ?? returns the first value
  that is NOT null or undefined.

✔ || returns the first truthy value.

✔ Ternary Operator is a
  shorthand for if...else.

_________________________________________________________

Interview Questions

Q1. What is the Nullish Coalescing Operator?

Ans:
It returns the right-hand value
only if the left-hand value is
null or undefined.

----------------------------

Q2. Difference between ?? and || ?

Ans:

?? checks only

• null
• undefined

||

Checks all falsy values.

----------------------------

Q3. What is the output?

0 ?? 100

Ans:
0

----------------------------

Q4. What is the output?

0 || 100

Ans:
100

----------------------------

Q5. What is the Ternary Operator?

Ans:
A shorthand way of writing
an if...else statement.

----------------------------

Q6. What is the syntax of
the Ternary Operator?

condition ? trueExpression : falseExpression

----------------------------

Q7. When should we use
the Ternary Operator?

Ans:
For simple conditions
where only two outcomes exist.

_________________________________________________________

Easy Trick

??

Only cares about

null
undefined

----------------------------

||

Cares about

false
0
""
null
undefined
NaN

----------------------------

Ternary

condition ? True : False

*/