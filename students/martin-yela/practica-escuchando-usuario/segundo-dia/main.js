// 1- Crear un HTML que tenga un formulario con un input y un botón. Cuando se pulse el botón deberá ir añadiendo lo que se ha escrito en una lista no ordenada debajo

document.querySelector('form').addEventListener('submit',  (e )=> {
    e.preventDefault();
    let item = document.createElement('li');
    item.textContent = e.target.sentence.value;
    document.querySelector('ul').appendChild(item);
    e.target.sentence.value = '';
});