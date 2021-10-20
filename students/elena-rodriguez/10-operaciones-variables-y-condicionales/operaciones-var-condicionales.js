

// EJERCICIO 1 = variable ternaria para determinar un parámetro en función de otro 
// speedLimit es el límite de velocidad.

// let qualityAir = prompt('Introduce la calidad del aire de hoy');
// let qualityNumber = parseInt(qualityAir);

// hasta aquí la declaración de las variables con los datos ya parseados a number.
// a continuación el intento de variable ternaria

// let speed = qualityNumber >= 65 ? 'La velocidad permitida hoy es 70 km/h' : 'La velocidad permitida hoy es 120 km/h' ;
// document.write(`<div class="box"> ${speed} </div>`)


// Segundo intento misma variable usando ifelse

//   if (speedLimitNumber <= 65) {
//        document.write('La velocidad permitida hoy es de 120')
//   }else{
//         document.write('La velocidad permitida hoy es de 70')
//   }


// EJERCICIO 2 = variable switch si introducimos un color aparece dicho color con un texto centrado que diga puede continuar.

const color = prompt('Introduce un color');


switch (color){
    case valorVerde : {
     document.write(`<div class="circleVerde"><p>Puede continuar</p></div>`)   
    }
    case ambarFijorojo : {

    }
}









