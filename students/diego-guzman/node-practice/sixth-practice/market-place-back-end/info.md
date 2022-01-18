Vamos a crear un servidor con Express que sera el backend de nuestra pequeña web app.

1.- Debemos segun el patron MVC para el back y crear un CRUD completo que creará, leerá, actualizará y borrará usuarios con persistencia en ficheros. Cada usuario tendra 2 campos: nombre y contraseña.

 para el create user debemos verificar que no exista previamente un usuario con ese nombre. Si no existe crearemos el nuevo usuario y devolveremos 200 “ok”. Si ya existe devolveremos 402 “ko” y no escribiremos nada en el fichero

para el read no mostraremos nada visualmente solo lo usaremos para hacer “login” en nuestra app de react, por lo que la consulta se    hara pasando nombre y contraseña por queryparams. Si el usuario existe se devolvera un “usuario correcto” con estado 200 y se dara por validada la sesion. En caso de no existir se devolvera “el usuario no existe” y estado 403.

 para el update se preparara el endpoint para recibir por query params nombre y contraseña. Si el usuario existe se le guardara la nueva contraseña y se respondera “actualizado” y estado 200 o “no actualizado” y 204.
 
para el delete se recibira por path param el nombre del usuario y se borrara si existe devolviendo “borrado” 200 o “no borrado” 403