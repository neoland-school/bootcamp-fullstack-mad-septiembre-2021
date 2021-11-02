//EJERCICIO_1

// let airQuality = prompt('Introduce la calidad del aire que marca tu dispositivo.');
// let contaminacion = parseInt(airQuality);
// if (contaminacion > 65){
// document.write (`<div class="div__style"><p class="p__style">Velocidad permitida hoy 70km/h</p></div>`);
// } else {
//    document.write (`<div class="div__style"><p class="p__style">Velocidad permitida hoy 120km/h</p></div>`); 
//}

//EJERCICIO_2 (Quiero limpiar este código, pero no termino de saber como)

// const semVerde = 'verde';
// const semAmbar = 'ambar';
// const semAmbarInt = 'int';
// const semRojo = 'rojo';
// const semRoto = 'roto'

// let semaforo = prompt('Color')
// switch (semaforo){
//     case semVerde: {
//         document.write (`<div class="div__style div__style_semVerde">
//                             <p class="p__style">Puede continuar</p>
//                         </div>`);
//     }break;

//     case semAmbar: {
//         document.write (`<div class="div__style div__style_semAmbar">
//                             <p class="p__style">Puede continuar</p>
//                         </div>`);
//     }break;

//     case semAmbarInt: {
//         document.write (`<div class="div__style div__style_semAmbarInt parpadeo">
//                             <p class="p__style">Pare</p>
//                         </div>`);
//     }break;
//     case semRojo: {
//         document.write (`<div class="div__style div__style_semRojo">
//                             <p class="p__style">Pare</p>
//                         </div>`);
//     }break;
//     default: {
//         document.write (`<div class="div__style">
//                             <p class="p__style">STOP</p>
//                         </div>`);
//     }break;
// }

// EJERCICIO_3

// let notaInput = prompt('Introduce tu nota del 1 al 10');
// let notaFinal = parseInt(notaInput);

// if (notaFinal<5){
//     document.write (`<p class="p__style">SUSPENSO</p>`)
// } else if (notaFinal >=5 && notaFinal<7){
//     document.write (`<p class="p__style">APROBADO</p>`)
// } else if (notaFinal >=7 && notaFinal<9) {
//     document.write (`<p class="p__style">NOTABLE</p>`)
// } else if (notaFinal===9){
//     document.write (`<p class="p__style">sobresaliente</p>`)
// }else if (notaFinal===10){
//     document.write (`<p class="p__style">MATRÍCULA DE HONOR</p>`)
// } else {
//     document.write (`<p class="p__style">Ha ocurrido un error contacta con el profesor</p>`)
// }