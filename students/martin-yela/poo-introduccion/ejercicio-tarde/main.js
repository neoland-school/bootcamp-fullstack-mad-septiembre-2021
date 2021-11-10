// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 3- Crear una clase gallina que represente  una gallina y funcione como las anteriores.
// 4- Crear un objeto de cada clase e imprimir el sonido que hace

class Dog {
    constructor(name, age, letsNumber, color){
            this.name = name;
            this.age = age;
            this.letsNumber = letsNumber;
            this.color = color;
    }
    hacerSonido(){
        let printSound = document.createElement('p');
        printSound.textContent = 'guau guau';
        printSound.classList.add('guau');
        document.querySelector('body').appendChild(printSound);

        let buscarP = document.querySelector('.guau');
        buscarP.addEventListener('click', () => {
            const music = new Audio('./sonidoPerro.mp3');
            music.play();
        })
    
        }
    mostrarAnimal() {
        let printSound = document.createElement('img');
        printSound.setAttribute('src', 'https://www.ecestaticos.com/imagestatic/clipping/797/767/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1622652711')
        document.querySelector('body').appendChild(printSound);
    }
}
class Gato {
    constructor(name, age, letsNumber, color){
            this.name = name;
            this.age = age;
            this.letsNumber = letsNumber;
            this.color = color;
    }
    hacerSonido(){
        let printSound = document.createElement('p');
        printSound.textContent = 'miau miau';
        printSound.classList.add('miau');
        document.querySelector('body').appendChild(printSound);

        let buscarP = document.querySelector('.miau');
        buscarP.addEventListener('click', () => {
        const music = new Audio('./sonidoGato.mp3');
        music.play();
        })
    }
    mostrarAnimal() {
        let printSound = document.createElement('img');
        printSound.setAttribute('src', 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg')
        document.querySelector('body').appendChild(printSound);
    }
}
class Gallina {
    constructor(name, age, letsNumber, color){
            this.name = name;
            this.age = age;
            this.letsNumber = letsNumber;
            this.color = color;
    }
    hacerSonido(){
        let printSound = document.createElement('p');
        printSound.textContent = 'kikiriki';
        printSound.classList.add('kikiriki');
        document.querySelector('body').appendChild(printSound);

        let buscarP = document.querySelector('.kikiriki');
        buscarP.addEventListener('click', () => {
        const music = new Audio('./gallina.mp3');
        music.play();
        })
    }
    mostrarAnimal() {
        let printSound = document.createElement('img');
        printSound.setAttribute('src', 'https://www.mundoanimalia.com/images/articles/66/58/06/7f6ffaa6bb0b408017b62254211691b5/gallina.jpg')
        document.querySelector('body').appendChild(printSound);
    }
}

let nuevoPerrito = new Dog('s', 23, 4, 'blue');
nuevoPerrito.hacerSonido();
nuevoPerrito.mostrarAnimal();
let nuevoGatito = new Gato('s', 23, 4, 'blue');
nuevoGatito.hacerSonido();
nuevoGatito.mostrarAnimal();
let nuevaGallina = new Gallina('s', 23, 4, 'blue');
nuevaGallina.hacerSonido();
nuevaGallina.mostrarAnimal();