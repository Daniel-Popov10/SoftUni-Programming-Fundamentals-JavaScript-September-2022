function cat(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < input.length; i++) {
        let currentCat = input[i].split(' ');
        let name = currentCat[0];
        let age = Number(currentCat[1]);
        let cat = new Cat(name, age)
        cat.meow();
    }

}

cat(['Mellow 2', 'Tom 5']);