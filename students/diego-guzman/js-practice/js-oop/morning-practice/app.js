// 1- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro.
// Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Pintar en el HTML el area y el perímetro de los círculo

class Circle {

    constructor(radius, color){
    this.radius = radius;
    this.color = color;
    this.diameter = this.radius*2;
    };

    getPerimeter(){
       return this.radius*2*Math.PI;
    }

    getArea(){
       return this.radius*this.radius*Math.PI;
    }

    printCircle(){
        const printed = document.createElement('div');
        printed.style = `background-color:${this.color}; border-radius: 50%; width: ${this.diameter}cm; height: ${this.diameter}cm;`;
        document.querySelector('.main__container').appendChild(printed);
    }
}

const circleOne = new Circle (2,'blue');
const circleTwo = new Circle (15,'red');

const container = document.querySelector('.main__container');

const circleOneDOM = document.createElement('p');
circleOneDOM.textContent = `The area is: ${circleOne.getArea().toFixed(3)}. The perimeter is: ${circleOne.getPerimeter().toFixed(3)}`;
container.appendChild(circleOneDOM);

const circleTwoDOM = document.createElement('p');
circleTwoDOM.textContent = `The area is: ${circleTwo.getArea().toFixed(3)}. The perimeter is: ${circleTwo.getPerimeter().toFixed(3)}`;
container.appendChild(circleTwoDOM);
circleOne.printCircle();
circleTwo.printCircle();