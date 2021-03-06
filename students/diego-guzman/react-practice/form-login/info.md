Vamos a simular un formulario de registro y de login utilizando todas las herramientas desbloqueadas hasta ahora:

1. -Crear una aplicación que muestre un header y un footer además de una zona de contenido central.
2. -El header tendrá 3 links: Registro(ejercicio 3), Login(ejercicio 4) y Home(ejercicio 5).
3. -Crear un componente SignUp que tenga un <h3>REGISTRO</h3> y un formulario en que se tomen nombre completo, nick y contraseña. Almacenar la información en localStorage con el key 'userData'
4. -Crear un componente SignIn que tenga un <h3>LOGIN</h3> y un formulario que acepte nick y contraseña. Cuando se haga click para entrar leeremos el localStorage para comprobar que el usuario y contraseña existen registrados previamente; en caso positivo se guardará el nick del usuario en localStorage con el key "sessionToken" y se mostrará la página Home que se define en el punto 5.
5. -Crear la página Home que tendrá un h1 que salude al usuario por su nombre completo. En caso negativo se mostrará un mensaje en rojo que diga usuario/contraseña erroneos. 
6. -La página Home debe no ser visible salvo que se cumplan las siguientes condiciones:
   exista un item localStorage con el key 'userData' cuyo nick coincida con un item localStorage con el key "sessionToken".
7. - La página Home tendrá un botón de cierre de sesión que borre todos los items de localStorage de "sessionToken"



GESTION DE LA INFORMACION: Para el manejo de información en el localStorage tenemos 3 opciones:

* Fácil: cada vez que hagamos una prueba borraremos los registros con las devtools, por lo que nunca habrá más de un usuario registrado ni más de un token de sesión activo.

* Medio: a la hora de crear el token el key será "userData1" "userData2", etc. (Idem para sessionToken). Tendremos tantos userData items como usuarios hayamos registrado y tantos sessionToken como usuarios DISTINTOS hayan hecho login (debemos validar que no exista sesión previa de un mismo usuario, si existe no la crearemos, daremos por válida la existente.)

* Dificil: el item userData contendrá la información en una estructura de datos apropiada de todos y cada uno de los usuarios registrados. (solo existirá un item userData).

* Leyenda: Añadiremos un botón de "Borrar mi cuenta" en la página home. Cuando el usuario lo pulse debemos manipular el userData (de nivel Dificil) para eliminar al usuario apropiado, además borraremos el token de sesión de dicho usuario y mostraremos una página de despedido que incluya el nombre completo del usuario.