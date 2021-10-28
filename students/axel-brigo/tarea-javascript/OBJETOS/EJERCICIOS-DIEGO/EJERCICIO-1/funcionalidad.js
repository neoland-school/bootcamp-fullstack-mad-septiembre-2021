'use strict';


let personaX = { 
    nombre : 'Michael',
    edad : 31,
    feliz : true,
    amigos : ['axel', 'pri','guille','Luci'],
    padres : { 
            padre: 'Carlos',
            madre: 'Laura',
    },
    pensar: function () { },
    cancion: null,
    arboles: undefined,
};

delete personaX.edad;
delete personaX.nombre;
delete personaX.amigos;
delete personaX.padres;
delete personaX.pensar;
delete personaX.feliz;
delete personaX.cancion;
delete personaX.arboles;

console.log(personaX.edad);
console.log(personaX);
console.log(personaX.nombre);
console.log(personaX.amigos[2]);
console.log(personaX.padres.madre);
console.log(personaX.pensar);
console.log(personaX.feliz);
console.log(personaX.cancion);
console.log(personaX.arboles);



;


