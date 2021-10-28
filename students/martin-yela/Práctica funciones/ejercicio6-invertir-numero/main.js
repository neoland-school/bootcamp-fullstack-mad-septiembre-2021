let number = prompt('Dime un número: ');

function inverter(number) {
    let newNumber ="";
    for (let i=number.length; i>=0;i--){
        newNumber += number.charAt(i);
    }
    return newNumber;
}
function capicua(number){
    if (number === inverter(number)) {
        return '<h2>es capicua</h2>';
    } else {
        return '<h2>no es capicua</h2>';
    }
}

document.write(`<h1>${inverter(number)}</h1>`);

document.write(capicua(number));



