class Circulo { // creo una clase

    constructor(radius, color) {
        this.radius = radius ;
        this.color =  color;
       
    }

    calculateArea() {
        return (this.radius ** 2) * Math.PI;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    } 
}

const circulo1 = new Circulo(2, 'blue');
const circulo2 = new Circulo(15, 'blue');

let sentence1 = document.getElementById('body') // traigo el body del html

let theDivOne = document.createElement('div') // creo el div 1 del html
let theDivTwo = document.createElement('div') // creo el div 2 del html

let parrafito = document.createElement('p'); // creo el parrafo 1 del html
let parrafito2 = document.createElement('p'); // creo el parrafo 2 del html

theDivOne.appendChild(parrafito); // meto el parrafo 1 en el div 1
theDivTwo.appendChild(parrafito2); // meto el parrafo 2 en el div 2

parrafito.textContent = `El area del primer circulo es  ${circulo1.calculateArea()} y el perimetro del primer circulo es ${circulo1.calculatePerimeter()}`; //le agrego un texto adentro del parrafo 1



parrafito2.textContent = `El area del segundo circulo es  ${circulo2.calculateArea()} y el perimetro del segundo circulo es ${circulo2.calculatePerimeter()}`; //le agrego un texto adentro del parrafo 2

sentence1.appendChild(theDivOne); // le paso el parametro del div 1 adentro del body
sentence1.appendChild(theDivTwo); // le paso el parametro del div 2 adentro del body



theDivOne.style = `width: ${circulo1.radius * 2}cm; height: ${circulo1.radius * 2}cm; background-color: blue; border-radius:50%`;


