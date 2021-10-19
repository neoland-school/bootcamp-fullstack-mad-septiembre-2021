## cookies

Son una forma de almacenar e intercambiar informacion entre el cliente (navegador) y el servidor.

Una cookie tiene la siguiente informacion:

- **Nombre** : el identificador de la cookie. No puede haber 2 cookies para el mismo dominio, para el mismo path con el mismo nombre
- **valor**: Es la información que contiene la cooke, es decir, los datos que quiero almacenar e intercambiar con el servidor.
- **domain**: Es el domino al que pertenece la cookie. Un sitio web solo puede leer o gestionar las cookies de su dominio
- **path**: Es la página web a la que pertenece la cookie dentro de un sitio web. Cuando ponemos un path esa cookie pertenecerá a esa página web y a todas las páginas hijas de esta.
-**expire**: es el tiempo de expiración de la cookie, es decir, cuando se cumpla ese tiempo la cookie se elimina. es una fecha de tipo `date`
-**httponly**: un booleano que indica si puede ser gesitonada desde el JS del navegador o no. Si es true, solo puede ser gestionada por el servidor, nunca por el cliente.
-**secure**: un flag (booleano) para indicar si tiene que funcionar por http o no. Si esta true solo funciona por https

como lo uso?

## document.cookie

Es un 'String' que me ayuda a gestionar las cookies. es el mecanismo antiguo que ya se esta sustituyendo por `cookieStore`

```js

document.cookie // imprime en string todas las cookies de ese path, ese dominio que pueden ser gestionadas por JS. Procesando este stringa podremos obtener el valor de una cookie

document.cookie = 'demo=valor; Secure'; // Ejemplo de creación y actualizacion de una cookie

document.cookie = 'demo=valor; Expires=Thur, 01 Jan 1970 00:00:01;' ; // Eliminacion de una cookie, seteando su fecha de expiracion a una fecha anterior a la actual, en este vaso el 1 de enero de 1970

```

### cookieStore

Es un mecanismo moderno para la gestión de las cookies. Todavia no esta soportado por todos los navegadores

Es un objeto del window, que ofrece metodos para poder hacer el CRUD de las cookies.
Todos sus metodos so asincronos (lo veremos mañana)

```js

await cookieStore.get('name'); //obtiene un objeto con la información en la cookie 'name'.


await cookieStore.getAll(); //obtiene un array de objetos con la información de todas las cookies.

cookieStore.set('name', 'value', options); // crea o actualiza una cookie

cookieStore.delete('name'); //elimina una cookie