/*

Switch statement
___________________________________________


Basic syntax :

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

const month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("JMarch");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    default:
        break;
}


// __________________________________________________________________________________________________________

/*

Switch Statement
_________________________________________________________

Definition

The switch statement is used to execute
one block of code among many possible
options based on the value of an expression.

It is an alternative to writing
multiple if...else if statements.

_________________________________________________________

Syntax

switch (expression) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
        break;
}

_________________________________________________________

How Switch Works

1. The expression is evaluated once.

2. Its value is compared with each case.

3. If a matching case is found,
   its code is executed.

4. The break statement stops
   further execution.

5. If no case matches,
   the default block executes.

_________________________________________________________

break Statement

The break statement exits
the switch block immediately.

Without break,
execution continues into the
next case even if it doesn't match.

This is called "Fall Through".

_________________________________________________________

default Statement

The default block executes
when no case matches
the given expression.

It is similar to the else block
in an if...else statement.

_________________________________________________________

Fall Through

If break is omitted,
JavaScript continues executing
all the remaining cases
until it finds a break
or reaches the end of the switch.

Example

case 1:
    console.log("One");

case 2:
    console.log("Two");

case 3:
    console.log("Three");

Output (expression = 1)

One
Two
Three

_________________________________________________________

When to Use switch

✔ When checking one variable
   against many possible values.

✔ Makes code cleaner than
   long if...else if ladders.

✔ Best when comparing
   exact values.

_________________________________________________________

When NOT to Use switch

✘ For range comparisons.

Example

marks > 90

marks < 50

Use if...else for such conditions.

_________________________________________________________

Summary

✔ switch compares one expression
  with multiple cases.

✔ case contains the value to compare.

✔ break stops execution.

✔ default runs when
  no case matches.

✔ Without break,
  execution falls through
  to the next case.

_________________________________________________________

Interview Questions

Q1. What is a switch statement?

Ans:
A control statement used to
execute one block of code
from multiple choices.

----------------------------

Q2. Why do we use break?

Ans:
To stop execution after
a matching case is found.

----------------------------

Q3. What happens if break
is omitted?

Ans:
Execution continues into
the next case.
This is called Fall Through.

----------------------------

Q4. What is the purpose
of default?

Ans:
It executes when no case matches.

----------------------------

Q5. When should we use switch
instead of if...else?

Ans:
When comparing one variable
against multiple fixed values.

----------------------------

Q6. Can default be placed
anywhere inside switch?

Ans:
Yes.

Although it is usually written
at the end for better readability.

_________________________________________________________

Easy Trick

if...else

✔ Best for Conditions

marks > 90

age >= 18

----------------------------

switch

✔ Best for Exact Values

month = 5

day = "Monday"

role = "Admin"

*/