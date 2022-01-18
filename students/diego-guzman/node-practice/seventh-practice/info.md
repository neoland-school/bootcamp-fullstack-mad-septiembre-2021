1.- Crear una base de datos en mongo DB que contenga informacion sobre smartphones que tenga los siguiente campos:
 name : "iPhone X"
 marca : "Apple"
 modelo : "X"
RAM : "2GB"
capacidad:"64GB"
precio : "600€"

Crear al menos 4 "smartphones" con datos variado pero reales.

2- Crear una aplicación nodeJS que conecte con nuestra BBDD. Una vez conectado:
 - Insertar un nuevo producto
- Recuperar los productos que tengan 6GB de memoria RAM
 - modificar todos los productos que tengan 6GB de RAM para que tengan 12GB de RAM
 - Borrar todos los productos que tengan 12GB RAM


 Para los que vayan acabando:
   Vamos a crear un e2e (end to end) basico…
   Debemos crear una coleccion de "usuarios" en una nueva BBDD MongoDB cuya entidad se compondra de name: y password:

Crearemos un API REST con Express siguiendo el patron MVC que reciba 2 tipos de solicitudes: POST y GET.

Una solicitud POST recibira un name y una password en el body de la request y creara un nuevo usuario en nuestra BBDD MongoDB.

Una solicitud GET recibira un name y una password y devolvera 200 "ok" o 403 "ko" si el usuario existe con ese name y esa password en nuestra base de datos.

Usar POSTMAN para probar que el backend funciona ok antes de pasar al front.


Tras tener listo el backend debemos crear una aplicacion de react que tendra un formulario de registro, un formulario de login y una pagina privada de saludo al usuario por su nombre (<h1>) a la que solo se accedera en caso de que el usuario haya rellenado el formulario de login y su name y password exista en la BBDD.