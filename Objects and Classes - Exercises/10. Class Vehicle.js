class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }

    get quality() {
        return this.parts.engine * this.parts.power;
    }
}

const Vehicle = result;

let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);

expect(vehicle.fuel).to.equal(100);