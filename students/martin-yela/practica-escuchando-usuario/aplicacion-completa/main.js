// Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
//  - Me debe permitir añadir nuevas tareas a la lista
//  - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
//  - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
//  - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
//  El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.

let form = document.querySelector('.formulario');
let listTar = document.querySelector('.tarea_lista');
let url = 'https://img2.freepng.es/20180413/lpq/kisspng-ellipsis-computer-icons-word-punctuation-pause-5ad094373a6815.5818075015236188712392.jpg';
let contador =0;


if (isNaN(parseInt(localStorage.getItem('counter')))){
    contador = 0;
}else {
    console.log('no entro');
    let num = parseInt(localStorage.getItem('counter'));
    for (let i=1; i<=num; i++){
        let val1 = 'titulo' + i;
        let val2 = 'descripcion' +i ;
        armarHTML(localStorage.getItem(val1), localStorage.getItem(val2));
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    armarHTML(e.target.title.value, e.target.tarea.value);
});


function armarHTML(valor1, valor2) {

    contador++;

    let linea = document.createElement('li');
    let simb = document.createElement('img');
    simb.setAttribute('src', url);
    linea.appendChild(simb);
    
    
    let titulo = document.createElement('span');
    titulo.textContent = valor1;
    linea.appendChild(titulo);
    localStorage.setItem('titulo'+JSON.stringify(contador), titulo.textContent);

    let descrip = document.createElement('span');
    descrip.textContent = valor2;
    linea.appendChild(descrip);
    listTar.appendChild(linea);
    localStorage.setItem('descripcion'+JSON.stringify(contador), descrip.textContent);

    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';

    localStorage.setItem('counter', JSON.stringify(contador));
    
}

let check = document.querySelectorAll('img');
for (let i =0;i<check.length;i++){
    check[i].addEventListener('click', () => {
    check[i].removeAttribute('src');
    check[i].setAttribute('src', 'https://img2.freepng.es/20181123/qrc/kisspng-check-mark-computer-icons-image-desktop-wallpaper-5bf86a9ce733d9.927478521543006876947.jpg');
    
})
}


// ENLACE DE CHECK
// https://img2.freepng.es/20181123/qrc/kisspng-check-mark-computer-icons-image-desktop-wallpaper-5bf86a9ce733d9.927478521543006876947.jpg