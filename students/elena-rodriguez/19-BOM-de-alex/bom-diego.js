//1- Crear documento HTML con un body vacío.

//2- Crear un objeto que represente una ciudad y que tenga los siguientes atributos, dandole valor con una ciudad que queráis :
// 	- Nombre
// 	- Description
// 	- Pais
// 	- urlImagen
//	- coordenadas:
// 		- latitud
// 		- longitud



let ciudad = {
    nombre = 'Copenhague',
    descripcion = 'país europeo',
    pais = 'Dinamarca',
    urlImagen = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felviajerofeliz.com%2Fciudades-de-dinamarca%2F&psig=AOvVaw0cZxO2JNOE_wrvtrA4w-XC&ust=1634216822730000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj3xJ26x_MCFQAAAAAdAAAAABAI',
    const coordenadas = {
        latitud = 55.681034,
        longitud = 12.56368,
    
    }
}


//3- Generar un HTML con JS con un formato similar a la foto de abajo, con los datos de la ciudad de la variable del ejercicio anterior

const contenedor = document.createElement('div');
div.p = 



//4- Añadir ese HTML al DOM

//5- Generar una función que dado una ciudad, devuelva el elemento del DOM de la card para poder añadirlo al DOM de la página

//6- Generar una funcion que dado un array de ciudades, pinte una lista de cards posicionadas por flex.