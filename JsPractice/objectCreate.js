// 1. Object Literals: {}
const user = {
    name: "Son",
    age: "30",
    country: "VN",
    occupation: "Engineer"
}

console.log(user.name);
console.log(user.occupation);

// 2. Constructor Function:
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const c1 = new Car("BMW", "520d", 10000);
console.log(c1.brand);
console.log(c1.model);

// 3. Class style
class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }

    addToCart() {
        console.log(`${this.product} added to cart!`)
    }
}

// instance of the class
const cust1 = new Customer("Son H", "Apple Macbook Pro");
cust1.addToCart();

// 4. Object.create(): with some prototype object
const employeePrototype = {
    printInfo: function() {
        console.log(`Hello, emp name is ${this.name}`)
    }
}