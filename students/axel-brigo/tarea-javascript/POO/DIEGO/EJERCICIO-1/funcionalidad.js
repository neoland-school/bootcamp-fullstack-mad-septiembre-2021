class Perro {
    constructor(name, age, legs, color, sound, animalImg) {
        this.name = name ;
        this.age =  age;
        this.legs = legs;
        this.color = color;
        this.sound = 'guag';
        this.animalImg = animalImg;
    }

    doSound() {
        let sentence = document.getElementById('p1');
        sentence.textContent = `El perro hace  ${this.sound}`;

        
    }
    
    showAnimal() {
        let sentence = document.getElementById('div1');
        let imagenG = document.createElement('img');
        imagenG.src = 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg';
        sentence.appendChild(imagenG);
    };

}




class Gato {
    constructor(name, age, legs, color, sound, animalImg) {
        this.name = name ;
        this.age =  age;
        this.legs = legs;
        this.color = color;
        this.sound = 'miauu';
        this.animalImg = animalImg;
    }

    doSound() {
        let sentence = document.getElementById('p2');
        sentence.textContent = `El Gato hace  ${this.sound}`
    }
    
    showAnimal() {
        let sentence = document.getElementById('div2');
        let imagenG = document.createElement('img');
        imagenG.src = 'https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg';
        sentence.appendChild(imagenG);
    }

}


class Gallina {
    constructor(name, age, legs, color, sound, animalImg) {
        this.name = name ;
        this.age =  age;
        this.legs = legs;
        this.color = color;
        this.sound = 'cucu';
        this.animalImg = animalImg;
    }

    doSound() {
        let sentence = document.getElementById('p3');
        sentence.textContent = `La Gallina hace  ${this.sound}`
        
    }
    
    showAnimal() {
        let sentence = document.getElementById('div3');
        let imagenG = document.createElement('img');
        imagenG.src = 'https://st.depositphotos.com/1526816/2124/v/600/depositphotos_21243767-stock-illustration-a-hen-and-her-seven.jpg';
        sentence.appendChild(imagenG);
    }

}




let animal1 = new Perro('pepino', 2, 4, 'brown');

let animal2 = new Gato('pepino', 2, 4 , 'gray');

let animal3 = new Gallina('pepino', 2, 2, 'red');

animal1.doSound();
animal1.showAnimal();
animal2.doSound();
animal2.showAnimal();
animal3.doSound();
animal3.showAnimal();


const botonPerro = document.getElementById('btnPerro');
const botonGato = document.getElementById('btnGato');
const botonGallina = document.getElementById('btnGallina');

botonPerro.addEventListener('click', function () {
    botonPerro.style = 'background-color: green';
    let etiquetaPerro = document.createElement("audio")
    etiquetaPerro.setAttribute("src", "./perro.mp3")
      etiquetaPerro.play()
});

botonGato.addEventListener('click', function () {
    botonGato.style = 'background-color: blue';
    let etiquetaGato = document.createElement("audio")
    etiquetaGato.setAttribute("src","./gato.mp3")
      etiquetaGato.play()
})

botonGallina.addEventListener('click', function () {
    botonGallina.style = 'background-color: yellow';
    let etiquetaGallina = document.createElement("audio")
    etiquetaGallina.setAttribute("src","./gallina.mp3")
      etiquetaGallina.play()
})
