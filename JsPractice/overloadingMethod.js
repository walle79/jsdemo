// can not overload method in js

function print() {
    console.log("Hi");
}

function print(name) {
    console.log("Hi " + name);
}

function print(name, age) {
    console.log("Hi " + name + " age " + age);
}

// calling
print();