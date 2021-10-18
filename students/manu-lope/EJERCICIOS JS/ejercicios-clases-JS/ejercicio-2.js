//  5- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
//  6- Vamos a crear la clase perro que hereda de animal.
//  7- Vamos a crear la clase gato que hereda de animal.
//  8- Vamos a crear la clase gallina que hereda de animal

class Animal {

    constructor(name, age, legNumber, color, sound, animal) {

        this.name = name;
        this.age = age;
        this.legNumber = legNumber;
        this.color = color;
        this.sound = sound;
        this.animal = animal;
    }

    makeSound() {
        let soundDom = document.createElement('p');
        soundDom.textContent = (`El sonido que hace ${this.name} es ${this.sound}`); //mirar como hacer para poner un sonido, con input y addEventListener
        document.body.appendChild(soundDom);
    }

    showAnimal() {
        let animalDomType =
            document.createElement('img');
        animalDomType.src = this.animal;
        document.body.appendChild(animalDomType);
    }

}

class Dog extends Animal {
    constructor(name, age, legNumber, color, sound, animal) {
        super(name, age, legNumber, color, sound, animal); // call the super class constructor and pass in the name parameter
    }

}

const Paco = new Dog('paco', '2', '4', 'white', '"¡qué!"', 'https://tinyurl.com/2rnptjjw');
Paco.makeSound()
Paco.showAnimal()

class Cat extends Animal {

    constructor(name, age, legNumber, color, sound, animal) {
        super(name, age, legNumber, color, sound, animal);
    }

}

const Boqueron = new Cat('Boquerón', '35', '3', 'grey', 'meowcofcof', 'https://tinyurl.com/2bbms5vv');
Boqueron.makeSound()
Boqueron.showAnimal()

class Chicken extends Animal {

    constructor(name, age, legNumber, color, sound, animal) {
        super(name, age, legNumber, color, sound, animal);
    }

}

const Paqui = new Chicken('Paqui', '1', '2', 'black', ' caw, caw', 'https://images.pexels.com/photos/3399700/pexels-photo-3399700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
Paqui.makeSound()
Paqui.showAnimal()