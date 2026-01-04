// 1. function declaration
function add(a,b) {
    return a + b;
}
let sum = add(5,6);

// 2. function expression: anonymous function
const multiply = function (x,y) {
    return x*y;
}

console.log(multiply(5,6));

// 3. arrow function expression
const divide = (t1, t2) => t1/t2;
console.log(divide(20,2));