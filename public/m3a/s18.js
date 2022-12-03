/**
 * @file The Date object
 */

// the current datetime
let now = new Date();
console.log(now);

// extracting components from a date - notice the month!
console.log("Today is " + now.getDate() + ", month " + (now.getMonth() + 1));

// create a date passing year, month (zero based!), day, ...
console.log("January is month zero!", new Date(2023, 0, 1, 11, 37, 51));
