// 3.- Refactorizar el ejercicio anterior para que al pulsar el botón aparezcan los número impares 
// de 1 en 1 cada 0,5 segundos y posteriormente (después de + 1,5 segundos) aparezcan los pares cada 5 segundos.

// BUTTON

let buttonDom = document.createElement('button');
buttonDom.textContent = `Pulsa aquí`;
document.body.appendChild(buttonDom);

// EVENT LISTENER DEL BUTTON

let counter = 0;

buttonDom = addEventListener('click', e => {

    let intervalo = setInterval(() => {
        if (counter % 2 === 0) {
            const number = document.createElement('p');
            number.textContent = counter;
            document.body.appendChild(number);
            counter++
        }
        else { counter++ }

        if (counter === 11) {
            clearInterval(intervalo);
        }
    }, 500)
});