// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())

class Dog{

    constructor(name, age, legNumber, color){
        this.name = name;
        this.age = age;
        this.legNumber = legNumber;
        this.color = color;
    }
    makesSound(){
        const dogSound = document.createElement('p');
        const dogButton = document.createElement('button');
        dogButton.classList.add('dog');
        dogButton.textContent = 'play me';
        dogSound.textContent = 'guau guau';
        document.querySelector('.main__container').appendChild(dogSound);
        document.querySelector('.main__container').insertAdjacentElement('afterbegin', dogButton);

        let noise = document.querySelector('.dog');
        noise.addEventListener('click', ()=>{
            const dogAudio = new Audio('./dog.mp3');
            dogAudio.play();
        })
    }

    showAnimal(){
        const dogImage = document.createElement('img');
        dogImage.setAttribute('src','https://thelifeofnello.com/wp-content/uploads/2021/06/Bildschirmfoto-2021-06-22-um-20.01.10.png');
        document.querySelector('.main__container').appendChild(dogImage);
    }

}

const Soren = new Dog('Soren', 2, 4, 'black');

Soren.makesSound();
Soren.showAnimal();

// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())

class Cat{

    constructor(name, age, legNumber, color){
        this.name = name;
        this.age = age;
        this.legNumber = legNumber;
        this.color = color;
    }
    makesSound(){
        const catSound = document.createElement('p');
        const catButton = document.createElement('button');
        catButton.classList.add('cat');
        catButton.textContent = 'play me';
        catSound.textContent = 'miau miau';
        document.querySelector('.main__container').appendChild(catSound);
        document.querySelector('.main__container').insertAdjacentElement('beforeend', catButton);

        let noise = document.querySelector('.cat');
        noise.addEventListener('click', ()=>{
            const catAudio = new Audio('./cat.mp3');
            catAudio.play();
        })
    }

    showAnimal(){
        const catImage = document.createElement('img');
        catImage.setAttribute('src','https://4.bp.blogspot.com/-uLfl0q4yxns/VEl1s9RVDFI/AAAAAAAACcc/PpZEXLfV1CU/s1600/img-thing.jpg');
        document.querySelector('.main__container').appendChild(catImage);
    }

}

const Petzi = new Cat ('Pezti', 5, 4, 'grey');

Petzi.makesSound();
Petzi.showAnimal();

// 3- Crear una clase gallina que represente  una gallina y funcione como las anteriores.

class Chicken{

    constructor(name, age, legNumber, color){
        this.name = name;
        this.age = age;
        this.legNumber = legNumber;
        this.color = color;
    }
    makesSound(){
        const chickenSound = document.createElement('p');
        const chickenButton = document.createElement('button');
        chickenButton.classList.add('chicken');
        chickenButton.textContent = 'play me';
        chickenSound.textContent = 'kikiriki';
        document.querySelector('.main__container').appendChild(chickenSound);
        document.querySelector('.main__container').insertAdjacentElement('afterend', chickenButton);
        

        let noise = document.querySelector('.chicken');
        noise.addEventListener('click', ()=>{
            const chickenAudio = new Audio('./chicken.mp3');
            chickenAudio.play();
        })

    }

    showAnimal(){
        const chickenImage = document.createElement('img');
        chickenImage.setAttribute('src','https://img.freepik.com/foto-gratis/gallina-hibrida-marron-aislada-blanco_79295-14823.jpg?size=626&ext=jpg');
        document.querySelector('.main__container').appendChild(chickenImage);
    }

}

const Turuleta = new Chicken ('Turuleta', 1, 2, 'brown');

Turuleta.makesSound();
Turuleta.showAnimal();

// 4- Crear un objeto de cada clase e imprimir el sonido que hace
