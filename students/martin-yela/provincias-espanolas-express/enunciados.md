CRUD- Vamos a crear nuestro segundo backend, con persistencia en ficheros, de una aplicación de Provincias españolas. La aplicación podrá hacer las siguientes operaciones:
 * Devolver todos las Provincias (GET)
 * Devolver una sola provincia por id (Numero) (GET)
 * Crear una provincia (POST)
 * Eliminar una provincia (DELETE)

Una provincia dentro de nuestro sistema será un objeto JSON con la siguiente información:
 - id: Un número que identifica de manera única nuestra provincia en el sistema
 - nombre: Un string que representa el nombre de la provincia
 - poblacion: Un numero que representa la población de la provincia.
 - coding: Un numero que representa el prefijo telefónico de la provincia

/Nuestro servidor tiene que estar preparado para responder a cada una de las operaciones:

* Devolver todos las provincias (GET)
  - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método GET al path '/province'
  - El metodo devolverá un 200 con todo el listado que haya en el archivo es-provs.json

 * Devolver una provincia por ID (GET) con path param.
	- Debemos gestionar una respuesta con estado 404 en caso de no existir la provincia.
         - Opcional: gestionar una respuesta con estado 418.

* Crear una provincia (POST) =>
 - Deberá enviarse la info en el body.
 
 - La operación debe validar los datos que introduce el usuario:
    
  - Si alguno de los datos es erróneo retornaremos un statusCode 400 indicando en el mensaje cual es el atributo que no es valido: EJ: 'El atributo outboundDate es inválido'.

 * Eliminar una provincia (DELETE) =>

 - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método DELETE al path '/provs/:id', siendo :id un parámetro de path donde se encontrará el identificador de provincia.
  - La operación buscará dentro de todas las provincias que tenemos en nuestro archivo provs.json y eliminará del archivo esa provincia si la encuentra