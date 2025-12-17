// map()
// 👉 Transforms each element in an array and returns a new array with the same length.
// Use when: you want to change every item.

// filter()
// 👉 Selects elements that meet a condition and returns a new array (can be shorter).
// Use when: you want to keep only specific items.

// reduce()
// 👉 Combines all elements into one single value (number, string, object, array).
// Use when: you want to calculate, summarize, or aggregate data.

// 1. map
let numbers = [1,2,3];
let doubleNumbers = numbers.map((e) => e * 2);
console.log(doubleNumbers)

// F -> C
// (F-32) * (5/9)
let fahTemp = [32,68,86,104,212]
function fahToCel(fah) {
    return (fah - 32) * (5/9);
}
let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);

// 2nd way
let celTemp1 = fahTemp.map((fah) => {
    return (fah - 32) * (5/9)
})
console.log(celTemp1);

// 3rd way
let celTemp2 = fahTemp.map((fah) => (fah - 32) * (5/9))
console.log(celTemp2);

// 2. filter
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e % 2 == 0)
console.log(evenNum);

let employee = [
    {
        name: "John",
        age: 30,
        gender: "Male"
    },
    {
        name: "Tom",
        age: 32,
        gender: "Male"
    },
    {
        name: "Peter",
        age: 28,
        gender: "Male"
    },
    {
        name: "Queen",
        age: 35,
        gender: "Female"
    },
]

let over30Emp = employee.filter((emp) => emp.age >= 30);
console.log(over30Emp);

// 3. reduce
let numb = [1,2,3,4,5];
let sumOfNumb = numb.reduce((acc, num) => acc + num, 0);
console.log(sumOfNumb);
// 1st -> 0 + 1 = 1
// 2nd -> 1 + 2 = 3

// max number in the array
let top = [10,5,25,8,30,15];
let maxNumInTop = top.reduce((max, num) => {
    if (num > max) {
        return num;
    } else {
        return max;
    }
}, top[0])
console.log(maxNumInTop);

// cart: name, price
let cartItems = [
    {
        name: "Jeans",
        price: 500
    },
    {
        name: "Shirts",
        price: 700
    },
    {
        name: "Shoes",
        price: 200
    },
    {
        name: "Hat",
        price: 1000
    },
    {
        name: "Tshirt",
        price: 270
    }
];

let totalPrice = cartItems.reduce((total, item) => total+item.price, 0);
console.log(totalPrice);