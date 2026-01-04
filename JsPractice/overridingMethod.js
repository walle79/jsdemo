class Car {
    constructor (make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log('Starting engine ... for Car');
    }
}

class Audi extends Car {
    startEngine() {
        console.log('Starting engine ... for Audi');
    }
}

const audi = new Audi();
audi.startEngine();