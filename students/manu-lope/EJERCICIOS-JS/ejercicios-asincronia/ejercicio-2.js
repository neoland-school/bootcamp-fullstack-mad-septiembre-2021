// 2.- Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. 
// Entre elemento y elemento debe transcurrir 0.5 segundos. 


// BUTTON

let buttonDom = document.createElement('button');
buttonDom.textContent = `Pulsa aquí`;
document.body.appendChild(buttonDom);

// EVENT LISTENER DEL BUTTON

buttonDom = addEventListener('click', e => {
    let counter = 0;
    let intervalo = setInterval(() => {
        const number = document.createElement('p');
        number.textContent = counter;
        document.body.appendChild(number);
        counter++
        if (counter === 11) {
            clearInterval(intervalo);
        }
    }, 500)
});

