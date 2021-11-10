// Crear un HTML que tenga un formulario con un input y un p debajo. cada vez que el usuario escriba en el input, se deberá actualizar el p con el valor que va escribiendo. En este caso tendremos que usar el evento change de los inputs

let tagP = document.querySelector('p');
document.querySelector('input').value = sessionStorage.getItem('texto');
tagP.textContent = sessionStorage.getItem('texto');
console.log(tagP.textContent);

document.querySelector('input').addEventListener('keyup',  (e )=> {
    tagP.textContent = e.target.value ;
    sessionStorage.setItem('texto', JSON.stringify(tagP.textContent));
});