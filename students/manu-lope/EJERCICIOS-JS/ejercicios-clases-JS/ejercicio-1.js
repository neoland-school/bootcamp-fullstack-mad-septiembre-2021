// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 3- Crear una clase gallina que represente  una gallina y funcione como las anteriores.
// 4- Crear un objeto de cada clase e imprimir el sonido que hace



class dog {

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

const Bender = new dog('Bender', '8', '4', 'black', 'wof', 'https://images.pexels.com/photos/1638724/pexels-photo-1638724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

Bender.makeSound();
Bender.showAnimal();


class cat {

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
        soundDom.textContent = (`El sonido que hace ${this.name} es ${this.sound}`); //mirar como hacer para poner un sonido
        document.body.appendChild(soundDom);
    }

    showAnimal() {
        let animalDomType =
        document.createElement('img');
        animalDomType.src = this.animal; //mirar como hacer para que salga una foto
        document.body.appendChild(animalDomType);
    }

}

const Anchoa = new cat('Anchoa', '3 months', '4', 'orange', 'meow', 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

Anchoa.makeSound();
Anchoa.showAnimal();

class chicken {

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
        soundDom.textContent = (`El sonido que hace ${this.name} es ${this.sound}`); //mirar como hacer para poner un sonido
        document.body.appendChild(soundDom);
    }

    showAnimal() {
        let animalDomType =
        document.createElement('img');
        animalDomType.src = this.animal; //mirar como hacer para que salga una foto
        document.body.appendChild(animalDomType);
    }

}

const Paqui = new chicken('Paqui', '1', '2', 'black', ' caw, caw', 'https://images.pexels.com/photos/3399700/pexels-photo-3399700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

Paqui.makeSound();
Paqui.showAnimal();



