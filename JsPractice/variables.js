// 1. var: old way
// ES6
// scope: var
// functionally/ locally  + global scope

var x = 10; // global
function test() {
    var y = 20; // function
}
console.log(x);

var pop = "hi js";
function rel() {
    var top = "hello js";
    console.log(top);
}
rel();

var browser = "chrome";
var browser = "firefox";
console.log(browser);
browser = "edge";
console.log(browser);

var g;
console.log(g); //undefined
g = "hello world"
console.log(g);

// issue with var
var flag = true;
var t1 = 4;
if (t1 > 3) {
    flag = false;
}
console.log(flag);
//flag re-declare & re-init once it satified the condition

//let
//most refer and improve from var
// scope: block scoped
let m = "hey son";
let t2 = 4;
if (t2 > 3) {
    let n = "how are you?" //block scoped
    console.log(n);
}

// not available
//let len = 4;
//let len = 5;

// not available
// var lent = 4;
// let lent = 5;

let tom = 1;
tom = 2;
console.log(tom);

// var: re-delare, re-init
// let: re-init, can not re-declare

// const
// day of week, month of year,...

const daysOfWeek = 7;
// daysOfWeek = 10; // not available, can not re-assign

// const p; // not available, need to assign value