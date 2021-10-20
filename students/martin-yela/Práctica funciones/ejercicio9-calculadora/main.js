let option = 0;

option = parseInt(prompt('Elige una opción: 1.Suma 2. Resta 3. Multiplicación 4. División 5. Porcentaje 6.Salir'));
    switch (option){
        case 1: {
            let num1 = numInput();
            let num2 = numInput();
            document.write(`<h2 style="blue">${num1} + ${num2} = ${suma(num1,num2)}`);
            break;
        }
        case 2: {
            let num1 = numInput();
            let num2 = numInput();
            document.write(`<h2 style="blue">${num1} - ${num2} = ${resta(num1,num2)}`);
            break;
        }
        case 3: {
            let num1 = numInput();
            let num2 = numInput();
            document.write(`<h2 style="blue">${num1} x ${num2} = ${multiplicacion(num1,num2)}`);
            break;
        }
        case 4: {
            let num1 = numInput();
            let num2 = numInput();
            document.write(`<h2 style="blue">${num1} / ${num2} = ${division(num1,num2)}`);
            break;
        }
        case 5: {
            let num1 = numInput();
            let num2 = numInput();
            document.write(`<h2 style="blue">El ${num1}%  de ${num2} es ${porcentaje(num1,num2)}`)
            break;
        }
        case 6:{
            document.write('<h2 style="color:green">El programa ha finalizado con éxito</h2>');
            break;
        }
        default: {
            document.write('<h2 style="color:red">No has puesto una opción válida</h2>');
            option = 6;
        }
    }
document.write('<p style="color:blue">El programa ha finalizado</p>');




function numInput(){
    let numberOne = parseInt(prompt('Introduce un número'));
    if (isNaN(numberOne)){
        alert('CUIDADO! no has puesto un número');
        numInput();
    }else {
        return numberOne;
    }
}
function suma(num1, num2) {
    return num1+num2;
}
function resta(num1, num2) {
    return num1-num2;
}
function division(num1, num2) {
    return num1/num2;
}
function multiplicacion(num1, num2){
    return num1*num2;
}
function porcentaje(num1, num2){
    return (num2*num1)/100;
}