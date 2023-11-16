function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = []
    for (const iterator of arr) {
        let [name, age] = iterator.split(' ');
        let newCat = new Cat(name, age);
        newCat.meow();
        cats.push(newCat);
    }
}

