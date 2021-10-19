//1- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro.

class Circle {
    constructor (radio, color) {  //en los parámetros de entrada no se ponen valores string en el constructor, porque solo son referencias a los valores que mentermos
        this.radio = radio;
        this.color = color;
    }
    calculateArea() {                
        return Math.PI*(this.radio**2);     
    }
    calculatePerimeter() {
        return Math.PI*2*(this.radio);
    }
}


//como limitar los decimales con 
//const a = 1/3 
//a.toFixed(number); deveuelve el número de decimales que indiquemos donde pone number. p.ejemplo a.toFixed(2); devuelve 2 decimales del resultado de a con valor string.

//Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Pintar en el HTML el area y el perímetro de los círculo

    //creamos los los objetos círculos

const bigCircle = new Circle (15, 'blue');
const smallCircle = new Circle (2, 'red');
    //comprobamos que hace el cálculo
console.log(bigCircle.calculateArea());
console.log(bigCircle.calculatePerimeter());
console.log(smallCircle.calculateArea());
console.log(smallCircle.calculatePerimeter());

    //creamos los div que contendrán  la info
const container1 = document.createElement('div');
const container2 = document.createElement('div');

    //damos estilo a los div
container1.style.width = bigCircle.radio;
container1.style.height = bigCircle.radio;
container1.style.borderRadius = 25;
container2.style.width = smallCircle.radio;
container2.style.height = smallCircle.radio;
container2.style.borderRadius = 25;



    //creamos los párrafos que contendrán el resultado de los cálculos
const parrafo1Area = document.createElement('p');
parrafo1Area.textContent = bigCircle.calculateArea();
const parrafo1Perim = document.createElement('p');
parrafo1Perim.textContent = bigCircle.calculatePerimeter();
const parrafo2Area = document.createElement('p');
parrafo2Area.textContent = smallCircle.calculateArea();
const parrafo2Perim = document.createElement('p');
parrafo2Perim.textContent = smallCircle.calculatePerimeter();
    
    //los introducimos dentro de los div. 
container1.appendChild(parrafo1Area);
container1.appendChild(parrafo1Perim);
container2.appendChild(parrafo2Area);
container2.appendChild(parrafo2Perim);

    //imprimimos el resultado
document.body.appendChild(container2);
document.body.appendChild(container1);





