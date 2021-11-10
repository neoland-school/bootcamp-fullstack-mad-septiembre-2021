//5- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
class Animal {
    constructor(name, age, patasNumber, color, sound, picture) {
      //tenemos que pasar los parámetros de los métoedos
      this.name = name;
      this.age = age;
      this.patasNumber = patasNumber;
      this.color = color;
      this.sound = sound;
      this.picture = picture;
    }
    animalSound() {
      let buttonSoundAnimal = document.createElement("button");
      buttonSoundAnimal.textContent = "SOUND ANIMAL";
      buttonSoundAnimal.style.width = "3em";
      document.body.appendChild(buttonSoundAnimal);
      buttonSoundAnimal.addEventListener("click", (e) => {
          const music = new Audio("ladrido.mp3"); //ESTA ES YA UNA CLASE POR DEFAULT PARA MOSTRAR SONIDO
          music.play();
      });
    }
    animalPicture() {
      let buttonPictureAnimal = document.createElement("button");
      buttonPictureAnimal.textContent = "IMAGEN";
      document.body.appendChild(buttonPictureAnimal);
      buttonPictureAnimal.addEventListener("click", (e) => {
        let imageAnimal = document.createElement("img");
        imageAnimal.src = this.picture;
        document.body.appendChild(imageAnimal);
      });
    }
  }

const peter = new Animal ();


//6- Vamos a crear la clase perro que hereda de animal.

class Dog extends Animal { //creamos una clase perro sobre la clase creada animal y heredamos con su constructor tanto las propiedades
    constructor( name, age, patasNumber, color, sound, picture) {
        super(name, age, patasNumber, color, sound, picture );
    }

}

// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
class Dog {
  constructor(name, age, patasNumber, color, sound, picture) {
    //tenemos que pasar los parámetros de los métodos
    this.name = name;
    this.age = age;
    this.patasNumber = patasNumber;
    this.color = color;
    this.sound = sound;
    this.picture = picture;
  }
  dogSound() {
    let buttonSoundDog = document.createElement("button");
    buttonSoundDog.textContent = "LADRIDO";
    document.body.appendChild(buttonSoundDog);
    buttonSoundDog.addEventListener("click", (e) => {
        const music = new Audio("ladrido.mp3");
        music.play();
    });
  }
  dogPicture() {
    let buttonPictureDog = document.createElement("button"); //creamos un botón para la imagen, ya que si no se cargará la imagen directamente en la página
    buttonPictureDog.textContent = "IMAGEN";
    document.body.appendChild(buttonPictureDog);
        // creamos un evento para que al hacer click se carge la imagen
    buttonPictureDog.addEventListener("click", (e) => {
      let imageDog = document.createElement("img");
      imageDog.src = this.picture;
      document.body.appendChild(imageDog);
    });
  }
}

const pulgas = new Dog("Pulgas", "8", "4", "grey", "ladrido.mp3", "perro.jpg");
pulgas.dogPicture();
pulgas.dogSound(); //el navegador no permite el autoplay al cargar la página, de modo que hay que crear un botón


// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())

class Cat {
    constructor(name, age, patasNumber, color, sound, picture) {
      //tenemos que pasar los parámetros de los métoedos
      this.name = name;
      this.age = age;
      this.patasNumber = patasNumber;
      this.color = color;
      this.sound = sound;
      this.picture = picture;
    }
    catSound() {
      let buttonSoundCat = document.createElement("button");
      buttonSoundCat.textContent = "MAULLIDO";
      document.body.appendChild(buttonSoundCat);
      buttonSoundCat.addEventListener("click", (e) => {
          const music = new Audio("maullido.mp3");
          music.play();
      });
    }
    catPicture() {
      let buttonPictureCat = document.createElement("button");
      buttonPictureCat.textContent = "IMAGEN";
      document.body.appendChild(buttonPictureCat);
      buttonPictureCat.addEventListener("click", (e) => {
        let imageCat = document.createElement("img");
        imageCat.src = this.picture;
        document.body.appendChild(imageCat);
      });
    }
  }
  
  const raspas = new Cat("Raspas", "5", "4", "orange", "maullido.mp3", "gato.jpg");
  raspas.catPicture();
  raspas.catSound(); //el navegador no permite el autoplay al cargar la página, de modo que hay que crear un botón

// 3- Crear una clase gallina que represente  una gallina y funcione como las anteriores.

class Gallina {
    constructor(name, age, patasNumber, color, sound, picture) {
      //tenemos que pasar los parámetros de los métoedos
      this.name = name;
      this.age = age;
      this.patasNumber = patasNumber;
      this.color = color;
      this.sound = sound;
      this.picture = picture;
    }
    gallinaSound() {
      let buttonSoundGallina = document.createElement("button");
      buttonSoundGallina.textContent = "CACAREO";
      document.body.appendChild(buttonSoundGallina);
      buttonSoundGallina.addEventListener("click", (e) => {
          const music = new Audio("cacareo.mp3");
          music.play();
      });
    }
    gallinaPicture() {
      let buttonPictureGallina = document.createElement("button");
      buttonPictureGallina.textContent = "IMAGEN";
      document.body.appendChild(buttonPictureGallina);
      buttonPictureGallina.addEventListener("click", (e) => {
        let imageGallina = document.createElement("img");
        imageGallina.src = this.picture;
        document.body.appendChild(imageGallina);
      });
    }
  }

  // 4- Crear un objeto de cada clase e imprimir el sonido que hace
  const clueca = new Gallina("Clueca", "5", "4", "orange", "cacareo.mp3", "cacareo.jpg");
  clueca.gallinaPicture();
  clueca.gallinaSound();


// 1- Crear una clase menú que represente un almuerzo. Todos los menús siguientes deben heredar de este. (Primer plato, segundo plato, bebida, postre, precio, mostrarPrecio())

class Almuerzo {
    constructor (primerPlato, segundoPlato, bebida, postre, precio) {
    this.primerPlato = primerPlato;
    this.segundoPlato = segundoPlato;
    this.bebida = bebida;
    this.postre = postre;
    this.precio = precio;
    }
    mostrarPrecio() {
        const calcularPrecio = this.primerPlato + this.segundoPlato + this.bebida + this.postre
    }
}


// 2- Crear una clase que represente un menú vegetariano.





// 3- Crear una clase que represente un menú bajo en calorías.
// 4- Crear una clase que represente un menú carnívoro.
// 5- Crear un objeto de cada clase e imprimir por pantalla el precio del menú.
// 6- Implementar la función 'updatePrice(newPrice)' como propiedad de la clase menú. Esta función debe cambiar el precio del menú, por el que reciba por parámetro(newPrice).
// 7- Implementar la función 'changeDish(kind, newDish)' como propiedad de la clase menú. Esta función debe cambiar el plato que se le ordene (primero, segundo, bebida o postre <- decisión libre el determinar la forma de controlarlo) por el nuevo plato introducido por parámetro (newDish).
// 8- Cambiar el precio de todos los menús y mostrar el menú antes y después del cambio
// 9- Cambiar un plato diferente de cada menú y mostrar por pantalla el objeto antes del cambio y después del cambio.
