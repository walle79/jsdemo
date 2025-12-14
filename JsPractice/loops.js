// for loop
for(i = 1; i<=10; i++) {
    console.log(i);
}

console.log("------------------------------------------------------------")

// for ... of loop
const array = [1,2,3,4,5];
for(const e of array) {
    console.log(e);
}
//
for(i=0; i< array.length; i++) {
    console.log(array[i]);
}

console.log("------------------------------------------------------------")

// while
let p = 1;
while(p <= 10) {
    console.log(p);
    p++;
}

console.log("------------------------------------------------------------")
// do-while
let h = 1
do {
    console.log(h);
    h++
} while (h<= 3)

console.log("------------------------------------------------------------")
// for ... in loop on objects
const user = {
    name: "son h",
    age: 30,
    city: "Hue"
}
for(const key in user) {
    console.log(key + ":" + user[key])
}