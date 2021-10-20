/* 1.- Crear una aplicación que presente un formulario donde se solicite:
	-nombre
	-edad
	-hobby

	Al pulsar el botón, debe guardarse dicha información en memoria.

	Al refrescar el navegador, si existe información en memoria (se ha hecho click previamente)debe mostrarse dicha información debajo del formulario, en caso que el usuario vuelva a introducir información y pulsar el botón, debemos actualizar los datos en memoria y mostrar los datos actualizados */

if (localStorage.getItem('nombre')!== null) {
	let valor= document.createElement('p');
	valor.textContent = localStorage.getItem('nombre');
	console.log(valor);
	document.querySelector('div').appendChild(valor);
}
if (localStorage.getItem('edad')!== null) {
	let valor1= document.createElement('p');
	valor1.textContent = localStorage.getItem('edad');
	document.querySelector('div').appendChild(valor1);
}
if (localStorage.getItem('hobby')!== null) {
	let valor2= document.createElement('p');
	valor2.textContent = localStorage.getItem('hobby');
	document.querySelector('div').appendChild(valor2);
}



let array = document.querySelectorAll('input') ;
let boton = document.querySelector('#test__btn');

boton.addEventListener('click', function(){
		localStorage.setItem('nombre', array[0].value);
		localStorage.setItem('edad', array[1].value);
		localStorage.setItem('hobby', array[2].value);
});


// array.forEach((v) => {
// 	let valor= document.createElement('p');
// 	valor.textContent = v.value;
// 	console.log(v);
// 	document.querySelector('div').appendChild(valor);