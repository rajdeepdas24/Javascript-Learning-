// Dates

let today = new Date(); // Created dates


console.log(today);  // 2026-06-26T07:18:43.127Z

console.log(today.toString()); // Fri Jun 26 2026 12:51:09 GMT+0530 (India Standard Time)

console.log(today.toDateString()); // Fri Jun 26 2026

console.log(today.toTimeString()); // 12:54:01 GMT+0530 (India Standard Time)

console.log(today.toLocaleString()); // 26/6/2026, 12:54:30 pm

console.log(today.toLocaleTimeString());  // 12:54:53 pm

console.log(typeof today);  // object (asked in interviews)

// let dates = new Date(2023, 2, 24, 8, 30);
// let dates = new Date("2070-03-24");
let dates = new Date("03-24-2023");
console.log(dates.toLocaleString()); // 24/3/2023, 12:00:00 am


let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // 1782459251394
// console.log(dates.getTime()); // 1679596200000

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); // as the month array starts from 0
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{ //locale string can be customized
    weekday: "long"
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// # 📅 JavaScript Date Object Notes

```javascript
// =======================================
// 📅 JavaScript Date Object
// =======================================

// The Date object is used to work with dates and time.
// Creating a Date object without any arguments gives
// the current date and current time.

let today = new Date();


// =======================================
// Displaying Date & Time
// =======================================

// Returns the complete date and time object.
console.log(today);

// Example Output:
// 2026-06-26T07:18:43.127Z
// (ISO Format - Used internally)


// Converts the date object into a readable string.
console.log(today.toString());

// Example Output:
// Fri Jun 26 2026 12:51:09 GMT+0530 (India Standard Time)


// Displays only the date.
console.log(today.toDateString());

// Example Output:
// Fri Jun 26 2026


// Displays only the time.
console.log(today.toTimeString());

// Example Output:
// 12:54:01 GMT+0530 (India Standard Time)


// Displays date and time according to your country's format.
console.log(today.toLocaleString());

// Example Output:
// 26/6/2026, 12:54:30 pm


// Displays only the local time.
console.log(today.toLocaleTimeString());

// Example Output:
// 12:54:53 pm


// typeof Date object is "object"
// ⭐ Interview Question
console.log(typeof today);

// Output:
// object



// =======================================
// Creating Custom Dates
// =======================================

// Method 1
// Syntax:
// new Date(year, monthIndex, day, hour, minute)

// NOTE:
// Month starts from 0.
// January = 0
// February = 1
// March = 2
// ...
// December = 11

// Example:
let date1 = new Date(2023, 2, 24, 8, 30);

// Output:
// Fri Mar 24 2023 08:30:00


// Method 2
// Using YYYY-MM-DD format

let date2 = new Date("2023-03-24");

// This format is recommended because it's unambiguous.


// Method 3
// Using MM-DD-YYYY format

let date3 = new Date("03-24-2023");

console.log(date3.toLocaleString());

// Output:
// 24/3/2023, 12:00:00 am




// =======================================
// Timestamp
// =======================================

// Timestamp means the number of milliseconds
// since January 1, 1970 (Unix Epoch).

let myTimeStamp = Date.now();

console.log(myTimeStamp);

// Example Output:
// 1782459251394



// getTime() returns the timestamp of a specific date.

console.log(date3.getTime());

// Example Output:
// 1679596200000



// Convert milliseconds into seconds

console.log(Math.floor(Date.now() / 1000));




// =======================================
// Getting Individual Parts of Date
// =======================================

let newDate = new Date();


// Returns the day of the month (1-31)
console.log(newDate.getDate());


// Returns the month (0-11)
// Since months start from 0,
// add +1 to display the actual month.
console.log(newDate.getMonth() + 1);


// Returns the full year.
console.log(newDate.getFullYear());


// Returns the day of the week.
// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6

console.log(newDate.getDay());


// Returns hours (0-23)
console.log(newDate.getHours());


// Returns minutes (0-59)
console.log(newDate.getMinutes());


// Returns seconds (0-59)
console.log(newDate.getSeconds());




// =======================================
// Customizing Locale String
// =======================================

// toLocaleString() accepts two parameters:
//
// 1. Locale (language)
// 2. Options object

console.log(
    newDate.toLocaleString("default", {
        weekday: "long"
    })
);

// Output:
// Friday



// More customization examples

console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);

// Output:
// Friday, June 26, 2026



// Display only month

console.log(
    newDate.toLocaleString("default", {
        month: "long"
    })
);

// Output:
// June



// Display only year

console.log(
    newDate.toLocaleString("default", {
        year: "numeric"
    })
);

// Output:
// 2026



// =======================================
// ⭐ Most Important Methods (Revision)
// =======================================

new Date()                // Current date & time
Date.now()                // Current timestamp

toString()                // Full date & time
toDateString()            // Date only
toTimeString()            // Time only
toLocaleString()          // Local date & time

getDate()                 // Day of month
getDay()                  // Day of week (0-6)
getMonth()                // Month (0-11)
getFullYear()             // Year
getHours()                // Hours
getMinutes()              // Minutes
getSeconds()              // Seconds

getTime()                 // Timestamp of a specific date



// =======================================
// ⭐ Interview Questions
// =======================================

// Q1. What is the type of Date?
// Answer:
// object

// Q2. Why do we write getMonth() + 1?
// Answer:
// Months are zero-indexed.
// January = 0
// December = 11

// Q3. What is a Timestamp?
// Answer:
// Milliseconds elapsed since
// January 1, 1970 (Unix Epoch).
```
