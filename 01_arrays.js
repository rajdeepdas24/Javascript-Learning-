// Array

const myArr = [0, 1, 2, 3, 4 , 5]
const heroes = ["spiderman", "IronMan", "Hulk", "Thor"]
console.log(myArr[0]);
console.log(heroes);


// make shallow copies
https://chatgpt.com/
// Array methods

// myArr.push(6)  //add elements in an array in the last
// myArr.push(7)  
// myArr.pop() //removes elements in an array from last
// console.log(myArr);


// myArr.unshift(9) //add elements in an array in the start
// myArr.shift() //removes elements in an array from the start
// console.log(myArr);


// console.log(myArr.includes(9)); //checks if the element is present in the array
// console.log(myArr.indexOf(9)); //checks the index of the given element in the array
// (If the element is not found, -1 index is returned)


const newArr = myArr.join()  //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // converts array into string



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

// slice() extracts a portion of an array. 
// Does NOT modify the original array. 
// Returns a NEW array.


console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2)

// splice() changes the original array.
// Modifies the original array.
// Can remove elements.
// Can add elements.
// Returns the removed elements.
