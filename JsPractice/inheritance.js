// parent (super class)
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    startEngine() {
        console.log('Starting engine ...');
    }

    stopEngine() {
        console.log('Stopping engine ...')
    }
}

// child (sub class)
class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year); // call the parent class constructor
        this.fuelType = fuelType;
    }

    driveCar() {
        console.log('Driving car ...' + this.model)
    }
}