// 5- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 6- Vamos a crear la clase perro que hereda de animal.
// 7- Vamos a crear la clase gato que hereda de animal.
// 8- Vamos a crear la clase gallina que hereda de animal


class Animal {
    constructor(name, age, letsNumber, color){
            this.name = name;
            this.age = age;
            this.letsNumber = letsNumber;
            this.color = color;
    }
    hacerSonido(animal, url){
        let printSound = document.createElement('p');
        printSound.textContent = animal;
        printSound.classList.add(animal);
        document.querySelector('body').appendChild(printSound);

        let buscarP = document.querySelector('.'+animal);
        buscarP.addEventListener('click', () => {
            const music = new Audio(url);
            music.play();
        }) 
    }
    mostrarAnimal(url) {
        let printSound = document.createElement('img');
        printSound.setAttribute('src', url);
        document.querySelector('body').appendChild(printSound);
    }   
}
class Dog extends Animal {
    constructor(name, age, letsNumber, color){
        super(name, age, letsNumber, color);
    }
}
class Gato extends Animal{
    constructor(name, age, letsNumber, color){
        super(name, age, letsNumber, color);
    }
}
class Gallina extends Animal{
    constructor(name, age, letsNumber, color){
        super(name, age, letsNumber, color);
    }
}
let nuevoPerrito = new Dog('s', 23, 4, 'blue');
nuevoPerrito.hacerSonido('dog', './sonidoPerro.mp3');
nuevoPerrito.mostrarAnimal('https://www.ecestaticos.com/imagestatic/clipping/797/767/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1622652711');
let nuevoGatito = new Gato('s', 23, 4, 'blue');
nuevoGatito.hacerSonido('gato', './sonidoGato.mp3');
nuevoGatito.mostrarAnimal('https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg');
let nuevaGallina = new Gallina('s', 23, 4, 'blue');
nuevaGallina.hacerSonido('gallina', './gallina.mp3');
nuevaGallina.mostrarAnimal('https://www.mundoanimalia.com/images/articles/66/58/06/7f6ffaa6bb0b408017b62254211691b5/gallina.jpg' );


nuevaGallina.hacerSonido('gallina', './gallina.mp3');
nuevaGallina.mostrarAnimal('https://avicoladeseleccion.es/1616/26.jpg');


// foto burro   https://media.istockphoto.com/photos/donkey-picture-id517016954?k=20&m=517016954&s=612x612&w=0&h=C6ghDVfbGigA3yL1GzMp81kGaR_q2_LZf--T5Gqu5jM=