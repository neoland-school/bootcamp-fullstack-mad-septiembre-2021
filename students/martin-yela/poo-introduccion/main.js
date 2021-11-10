/* 1- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro.
Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Pintar en el HTML el area y el perímetro de los círculo */

class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
        this.diametro = this.radius * 2;
    }

    calculateArea() {
        return (Math.PI * (this.radius**2)).toFixed(2);
    }
    calculatePerimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
    paintCircle(){
        let dibujo = document.createElement('div');
        dibujo.setAttribute('style', `height: ${this.diametro}cm; width: ${this.diametro}cm; border-radius: 50%; background-color: ${this.color}`); 
        document.querySelector('.container').appendChild(dibujo);
    }
}

let circleOne = new Circle(2, 'red');
let circleTwo = new Circle(15, 'green');

let sentence = document.createElement('p');
sentence.textContent = 'El area del circulo ' + circleOne.color +' es de ' + circleOne.calculateArea();
let sentence1 = document.createElement('p');
sentence1.textContent = 'El perimetro del circulo ' + circleOne.color + ' es de ' + circleOne.calculatePerimeter();

let sentence2 = document.createElement('p');
sentence2.textContent = 'El area del circulo ' + circleTwo.color +' es de ' + circleTwo.calculateArea();
let sentence3 = document.createElement('p');
sentence3.textContent = 'El perimetro del circulo ' + circleTwo.color + ' es de ' + circleTwo.calculatePerimeter();

let div = document.querySelector('.container');

div.appendChild(sentence);
div.appendChild(sentence1);
div.appendChild(sentence2);
div.appendChild(sentence3);

circleOne.paintCircle();
circleTwo.paintCircle();

new Circle(5,'orange').paintCircle();