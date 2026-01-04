// 1. find unique values from array
const array = [1,2,3,4,2,3,4,2,5,6,7,7,7,7]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray)

// 2. int to string
const num = 32;
const numStr = num + ''; // '32'
console.log(numStr+10);
// another way
console.log("--------------------------------");
const numStr1 = String(num);
console.log(numStr1+10);

// 3. float to int
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);

// 4. check if a variable is a number
const value = 56;
if (typeof value === 'number' && isNaN(value)) {
    console.log(value + ' is number')
} else {
    console.log(value + ' not a number')
}

// 5. swap variable values
let a = 5;
let b = 10;
[a,b] = [b,a]
console.log(a,b);

// 6. check if an object has a property
const person = {
    name: "Son H",
    age: 30
}

if (person.hasOwnProperty('address')) {
    console.log('person has property')
}

// 7. remove falsy value from the array: (false, 0, "", null, undefined, NaN)
const values = [0,1,false,2,'',3,null,undefined,NaN,4]
const newValues = values.filter(Boolean);
console.log(newValues);

// 8. string -> uppercase, lowercase
const str = "Son Automation Test"
const u1 = str.toUpperCase();
const l1 = str.toLowerCase();

// 9. check if array contains a value
const lang = ['java', 'javascripts', 'python', 'ruby']
if (lang.includes('javascripts')) {
    console.log('found')
}

// 10. check if an array is empty
const empty = [];
if (empty.length === 0) {
    console.log("Array is empty")
}

// 11. generate a random number
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number: ${randomNumber}`)

// 12. string to number
const strNumber = '32';
const x1 = parseFloat(strNumber);
console.log(x1);

// 13. join array elements into a string
const words = ['Hello', 'Son H'];
const sentence = words.join(' ');
console.log(sentence);

// 14. get object property
const user = {
    name: "Son H",
    age: 30,
    dob: "18-12-1995"
}
console.log(user['name']);

// 15. clone an array or object
const marks = [10,20,30,50,66,70];
const marksDup = [...marks];
console.log(marksDup);

const user1 = {
    name: "Son H",
    age: 30,
    dob: "18-12-1995"
}
const user1Dup = { ... user1}; // spread operator
console.log(user1Dup);

// 16. convert object to array
const employee = {
    name: "Son H",
    age: 30,
    dob: "18-12-1995"
}
// a. keys array
const keysArray = Object.keys(employee);
console.log(keysArray);
// b. values array
const valuesArray = Object.values(employee);
console.log(valuesArray);
// c. key-value array
const keyValArray = Object.entries(employee);
console.log(keyValArray);

// 17. get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleDateString());

// 18. check variable is defined
let i;
if(typeof i === 'undefined') {
    console.log('variable not defined')
}
console.log(i);

// 19. truncate an array
const testing = [0,1,2,3,4,5,6,7];
testing.length = 3;
console.log(testing);

// 20. last item in array
const pop = [0,1,2,3,4,5,6,7];
const n1 = pop.slice(-1);

