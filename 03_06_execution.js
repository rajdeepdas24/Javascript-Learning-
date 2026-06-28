let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*

Start Program
       │
       ▼
Create Global Execution Context
       │
       ▼
Memory Phase
│
├── Allocate memory for variables
├── Store function definitions
└── Prepare global scope
       │
       ▼
Execution Phase
│
├── val1 = 10
├── val2 = 5
├── addNum(val1, val2)
│      │
│      ▼
│  Create Function Execution Context
│      │
│      ├── Memory Phase
│      ├── Execution Phase
│      └── Return 15
│
├── result1 = 15
│
├── addNum(10, 2)
│      │
│      ▼
│  Create Function Execution Context
│      │
│      ├── Memory Phase
│      ├── Execution Phase
│      └── Return 12
│
└── result2 = 12
       │
       ▼
End Program

*/


/*
JavaScript executes code in three steps:

1. Global Execution Context (GEC)

-> The Global Execution Context is the environment created when a JavaScript program starts.
-> It provides the main workspace where all global code is executed and manages the this keyword.

Summary: Creates the main workspace for the program.

2. Memory Phase (Creation Phase)


-> The Memory Phase is the first phase of an execution context where JavaScript allocates memory.
-> Variables are allocated memory, and function declarations are stored before any code is executed.

Summary: Prepares memory for variables and functions.

3. Execution Phase

-> -> The Execution Phase is the second phase where JavaScript executes the code line by line.
Variables receive their values, functions are called, and expressions are evaluated.

Summary: Executes the program statement by statement.

___________________________________________________________________________________________________________

<Execution Flow>


JavaScript Program
        ↓
1. Global Execution Context
        ↓
2. Memory (Creation) Phase
        ↓
3. Execution Phase

*/