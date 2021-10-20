// declarando las variables promt
let userUno = prompt ('Introduce un número'); 
let userDos = prompt ('Introduce otro número');

// convirtiendo esas variables string en number
let user1 = parseFloat (userUno);
let user2 = parseFloat (userDos);

   

// operando con esas variables
let suma = user1 + user2;
let resta = user1 - user2;
let multiplicación = user1 * user2;
let division = user1 / user2;
console.log(typeof suma)
    document.write('<div class="div__numeros"><p class="p__numerandos">' + suma + '</p></div>' );
    //document.write('2' + suma );
    document.write(' esta es la resta ' + resta );
    document.write(' esta es la multiplicación ' + multiplicación );
    document.write(' esta es la division ' + division);



