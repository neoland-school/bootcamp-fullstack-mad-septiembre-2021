// ejercicio 1

/*const promesa1 = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let oracion = document.createElement('p');
        oracion.textContent = `se a resuelto la promesa`
        document.body.appendChild(oracion)
    },5000); 

})  


// ejercicio 2

const botonsito = document.getElementById('boton');


botonsito.addEventListener('click', e => {
    let numerito = 0;

    const parar = setInterval(() => {
        let texto = document.createElement('p');
        texto.textContent = numerito ;
        botonsito.appendChild(texto);
        numerito++;
    
        if (numerito === 11) {
            clearInterval(parar);
        }
    }, 500);

});*/

// ejercicio 3


const botonsito = document.getElementById('boton');


botonsito.addEventListener('click', e => {
    let numerito = 1;
   
    const parar = setInterval(() => {
        let texto = document.createElement('p');
        texto.textContent = numerito;
        botonsito.appendChild(texto);
        numerito += 2;
    
        if (numerito === 11) {
            clearInterval(parar);
        }
    }, 500);

    
        let numerito2 = 0;
       
        const parar2 = setInterval(() => {
            let texto = document.createElement('p');
            texto.textContent = numerito2;
            botonsito.appendChild(texto);
            numerito2 += 2;
        
            if (numerito2 === 11) {
                clearInterval(parar2);
            }
        }, 5000);

    });*/



// ejercicio 4

/*let clocksito = () => {
    let parrafo = document.createElement('p');
    
    setInterval(() => {
        
        const miFecha = new Date();
        parrafo.textContent = miFecha.getDay() + ':' + miFecha.getHours() + ':' + miFecha.getSeconds() + ':' + miFecha.getMilliseconds();

        document.body.appendChild(parrafo);
    }, 16);
};

clocksito(); */


// ejercicio 5

let elInput = document.getElementsByID('input');
let elBoton = document.getElementsByID('boton');