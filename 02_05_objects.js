// destructuring

// Destructuring allows us to extract 
// values from an object or array 
// into separate variables. 


const course = {
    name : "Javascript",
    price : "999",
    instructor : "Rahul Kumar"
}

// course.instructor


// With Destructuring
// Instead of writing [ course.instructor ] every time, we can extract it into a variable.


const {instructor} = course

console.log(instructor);  // Rahul Kumar


// JSON, APIs
// {
//     namee = "Rajdeep",
//     coursename : "javascript",
//     price : "Free"
// }
// APIs can be written in array
// mentor didn't speak much about API now, will learn later





