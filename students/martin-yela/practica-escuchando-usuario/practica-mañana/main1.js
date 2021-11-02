// 2. Contador: Crear un HTML con un botón (-) un p y otro botón (+). El p inicialmente mostrará 0. Cuando pulse en el + se deberá sumar uno al valor del p. Cuando pulse en el menos se deberá restar 1.
// 3. Modificar el ejercicio 2 para que cuando el usuario refresque la página, el p se inicialice con el valor que había dejado antes



let laP =document.querySelector('p');
let contador = localStorage.getItem('cont');

if (contador === null){
    contador =0;
}

laP.textContent = contador;
document.querySelector('.butonA').addEventListener('click', function(){
    contador--;
    laP.textContent = contador;
    localStorage.setItem('cont', JSON.stringify(contador));
});

document.querySelector('.butonB').addEventListener('click', function(){
    contador++;
    laP.textContent = contador;
    localStorage.setItem('cont', JSON.stringify(contador));
});
