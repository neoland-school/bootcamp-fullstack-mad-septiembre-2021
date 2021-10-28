//Escribir varias funciones que calculen área y perímetro de diferentes figuras geometricas (Rectángulo, Cuadrado, triángulo y Círculo) 
let perimeter = 0;
let area = 0;
function areaFourSidedObject (sideOne, sideTwo){
    return  area = sideOne*sideTwo;
}
function perimeterFourSidedObject (sideOne, sideTwo){
return perimeter = sideOne*2 + sideTwo*2;
}

function areaCircleObject (radius) {
    return area = 3.1415 * (Math.pow(radius,2));
}

function perimeterCircleObject (radius) {
    return perimeter = 2 * 3.1415 * radius;
}

function areaTriangleObject (height, base) {
    return area = (height*base)/2;
}

function perimeterTriangleObject (sideOne, sideTwo, base) {
    return perimeter = sideOne + sideTwo + base;
}