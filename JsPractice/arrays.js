// declaration of an array
let myArray = []; // empty array


let lang = ["java", "python", "js"]
// 1. push
lang.push("ruby", "html")
console.log(lang);

// 2. pop
let numbers = [1,2,3,4,5]; // array with numbers
numbers.pop();
console.log(numbers);

// 3. shift
let fruits = ["apple", "banana", "orange"] // array with strings
let firstFruit = fruits.shift();
console.log(fruits);
console.log(firstFruit);

// 4. unshift
let colors = ['red', 'blue', 'pink', 'black'];
colors.unshift('green', 'yellow')
console.log(colors);

// 5. splice
let animals = ['dog', 'cat', 'bird', 'fish']
animals.splice(1,1);
console.log(animals);
animals.splice(1,1, 'teddy');
console.log(animals);

// 6. slice
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4); // (]
console.log(newPop);

// 7. concat
let fr = ["apple", "banana", "orange"];
let num = [1,2,3,4];
let mixedArray = fr.concat(num);
console.log(mixedArray);

// 8. indexOf
let color = ['red', 'green', 'black', 'red'];
let redIndex = color.indexOf('red');
console.log(redIndex);
let sonIndex = color.indexOf('son');
console.log(sonIndex);

// 2nd red index
let red2ndIndex = color.indexOf('red', color.indexOf('red')+1)
console.log(red2ndIndex);

// 9. includes
let test = ['admin', 'customer', 'seller', 'vendor'];
let flag = test.includes('buyer');
console.log(flag);

// 10. forEach
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
})