let pregunta1 = prompt("te sentis feliz hoy?")
let pregunta2 = prompt("te sentis triste hoy?")

let preguntaBooleana = new Boolean(pregunta1);
let preguntaBooleana2 = new Boolean(pregunta2);

function transformacion(pregunta1, pregunta2) {
    return pregunta1 && pregunta2;
}

document.write(transformacion(pregunta1,pregunta2))