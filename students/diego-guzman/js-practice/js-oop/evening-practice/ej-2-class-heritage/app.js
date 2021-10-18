// 5- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
class Animal{

    constructor(type, name, age, legNumber, color, sound, img){
        this.type = type;
        this.name = name;
        this.age = age;
        this.legNumber = legNumber;
        this.color = color;
        this.sound = sound;
        this.img = img;
    }
    makesSound(){
        const anSound = document.createElement('p');
        anSound.classList.add(`${this.type}__${this.name}__animal`);
        const anButton = document.createElement('button');
        anButton.classList.add(`${this.type}__${this.name}__button`);
        anButton.textContent = 'play me';
        anSound.textContent = `I am a ${this.type}`;
        document.querySelector('.main__container').appendChild(anSound);
        document.querySelector(`.${this.type}__${this.name}__animal`).appendChild(anButton);

        let noise = document.querySelector(`.${this.type}__${this.name}__animal`);
        noise.addEventListener('click', ()=>{
            const anAudio = new Audio(this.sound);
            anAudio.play();
        })
    }

    showAnimal(){
        const anImage = document.createElement('img');
        anImage.setAttribute('src', this.img);
        document.querySelector('.main__container').appendChild(anImage);
    }

}

class Dog extends Animal{
    constructor (type, name, age, legNumber, color, sound, img){
        super (type, name, age, legNumber, color, sound, img);
    }
}

const Nello = new Dog('dog','Nello', 2, 4, 'black','./dog.mp3','https://thelifeofnello.com/wp-content/uploads/2021/06/Bildschirmfoto-2021-06-22-um-20.01.10.png');

Nello.makesSound();
Nello.showAnimal();

const Pancho = new Dog('dog','Pancho', 4, 4, 'brown','./dog.mp3','https://www.publico.es/files/article_main/uploads/2016/05/19/573dce79c7ba8.jpg')
Pancho.makesSound();
Pancho.showAnimal();


// 7- Vamos a crear la clase gato que hereda de animal.

class Cat extends Animal{
    constructor (type, name, age, legNumber, color, sound, img){
        super (type, name, age, legNumber, color, sound, img);
    }
}
const Petzi = new Cat ('cat','Petzi', 2, 4, 'orange','./cat.mp3','https://www.mundodeportivo.com/files/image_948_465/uploads/2018/03/30/60e76fe1d7dc2.jpeg');

Petzi.makesSound();
Petzi.showAnimal();

// 8- Vamos a crear la clase gallina que hereda de animal

class Chicken extends Animal{
    constructor (type, name, age, legNumber, color, sound, img){
        super (type, name, age, legNumber, color, sound, img);
    }
}
const Turuleta = new Chicken ('chicken','Turuleta', 2, 2, 'brown','./chicken.mp3','https://purepng.com/public/uploads/large/91507987589a0kvbpsv9kvuvgqqcloezevgerhscac0cqg0cjzjsucjbz6sbkhqsvxviu3mewwkinuk0gcmnsfkkrm1jyjrzjwy53ip9nivbn3k.png');

Turuleta.makesSound();
Turuleta.showAnimal();
