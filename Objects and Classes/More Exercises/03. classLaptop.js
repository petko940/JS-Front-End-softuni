class Laptop {
    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        }
        this.quality = quality;
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        this.quality -= 1
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        let result = 800 - this.info.age * 2 + this.quality * 0.5
        return result
    }
}

