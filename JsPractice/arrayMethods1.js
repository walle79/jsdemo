// 1. every()
let num = [1,2,3,4,5];
let flag = num.every((e) => e < 10);
console.log(flag);

// 2. find()
let total = [1,2,3,4,7,9];
let fe = total.find((e) => e % 2 == 0);
console.log(fe);

// 3. indexOf()
// 4. lastIndexOf()

// 5. reverse()
let fruits = ['apple', 'banana', 'mango', 'pear'];
let reverseFruits = fruits.reverse();
console.log(reverseFruits);

// 6. sort()