const useremail = "#dgsdgvs";

if (useremail) {
    console.log("Got user Email");
} else {
    console.log("No user email");
}

// false values 
//  false, 0, -0, bigint (0n), "", null, NaN, undefined

// true values 
// true, 1, "0", 'false', " ", [], {}, function(){}


// Array check
 let arr = []
 if(arr.length === 0){
    console.log("Array is empty");
 } else {
    console.log("Array has elements");
 }

// object check
// const obj = {
//     name : "Rajdeep",
//     age : "19"
// } 

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object has keys");
}