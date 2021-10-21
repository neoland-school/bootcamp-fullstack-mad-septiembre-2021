// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) 
// debe aparecer debajo la información completa de ese país.

// let myButton = document.getElementByID('select');
// myButton.onclick = function () {

// ---------------------- MAL PLANTEADO ------------------- //


// let button = document.getElementById('select');
// let paisInput = document.getElementById('paisInput').value;
// button.addEventListener('click', e => { 
//     fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
//         .then(result => result.json())
//         .then(data => {
//             if (paisInput === data.countries.name) {
//                 let name = document.createElement('ul');
//                 let code = document.createElement('li');
//                 let telfCode = document.createElement('li');
//                 name.textContent = element.name_es;
//                 code.textContent = element.code;
//                 telfCode.textContent = element.dial_code;
//                 document.appendChild(name);
//                 name.appendChild(code);
//                 name.appendChild(telfCode);
//             } else result = document.write('La función del if no está bien planteada')
//         });
// });

// ---------------------- MAL PLANTEADO ------------------- //

// ---------------------- REPETIDO SIGUIENDO PASOS DE ALEX ---------------------- //

