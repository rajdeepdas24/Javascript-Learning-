let score = 33 //number
// let score = "33" //string
// let score = null //NaN , object
// let score = undefined //NaN , undefined
// let score = true //1, boolean

// console.log(typeof score);
// console.log(typeof (score));

// let ValueInNumber = Number(score)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

// "33" => 33
// "33abc" => NaN 
// true => 1 , false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// true => 1 , false => 0
// "" => false
// "Rajdeep" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// _______operators___________________________________________________________________________________ //


let value = 3
let negValue = -value
// console.log(negValue);

// basic operators______________________________________

// console.log(2+2); //add
// console.log(2-2); //sub
// console.log(2*2); //multiply
// console.log(2**2); //power
// console.log(2/2); //divide
// console.log(2%2); //mod

let str1 = "Hello "
let str2 = "Rajdeep"
let str3 = str1 + str2
console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2); //if string is in first, everything will be treated as string 
// console.log("1" + (2 + 2)); //but if we use brackets, it doesn't behave like string
// console.log(1 + 2 + "2"); // that's why we need to use proper brackets for readability, but can be asked in interviews or exams



// console.log(true); 
// console.log(+true); //gives 1 as output
// console.log(true+); //This is bullshit



let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not to code like this


let gameCounter = 100
++gameCounter; //pre-increment = 101
gameCounter++; //post-increment = 102
// console.log(gameCounter); //102

