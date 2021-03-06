CRUD- Vamos a crear nuestro primer backend, con persistencia en ficheros, de una aplicación de vuelos (solo ida y sin escalas). La aplicación podrá hacer las siguientes operaciones:
 * Devolver todos los vuelos (GET)
 * Devolver un solo vuelo (GET)
 * Crear un vuelo (POST)
 * Eliminar un vuelo (DELETE)

Un vuelo dentro de nuestro sistema será un objeto JSON con la siguiente información:
 - id: Un número que identifica de manera única nuestro vuelo en el sistema
 - origin: Un string de 3 caracteres con el código IATA del aeropuerto de origen del vuelo
  - destination: Un string de 3 caracteres con el código IATA del aeropuerto de destino del vuelo
 - outboundDate: Fecha y hora de salida del vuelo
  - inboundDate: Fecha y hora de llegada de un vuelo

Un código IATA es un código único que representa un aropuerto a nivel mundial. Podéis obtener el listado de codigos IATA de aqui (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json)

 Lo primero que tiene que hacer nuestro servidor al iniciarse es crear un archivo "flights.json" vacío en el mismo directorio donde se encuentra nuestro server, siempre que no esté creado ya. En este archivo es donde nuestro servidor almacenará la información y la consultará

/Nuestro servidor tiene que estar preparado para responder a cada una de las operaciones:

* Devolver todos los vuelos (GET)
  - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método GET al path '/flights'
  - El metodo devolverá un 200 con todo el listado que haya en el archivo flights.json

 * Devolver un vuelo por ID (GET) => 

  - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método GET al path '/flights/:id', siendo :id un parámetro de path donde se encontrará el identificador de vuelos.
  - La operación buscará dentro de todos los vuelos que tenemos en nuestro archivo flights.json y devolverá el que encuentre
  - Si no encuentra ninguno, la operación devolvera un status 404, con un texto diciendo: No se ha encontrado el vuelo buscado

* Crear un vuelo (POST) =>
 - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método POST al path '/flights', pasándonos la info en el body.
      - El body contendrá un JSON con la siguient info (origin, destination, outboundDate y inboundDate)
  - La operación añadirá al la lista de vuelos del archivo 'flight.js' un vuelo con la información dada. El id lo generará sumando 1 al último id que tengamos en nuestra lista.
 - La operación debe validar los datos que introduce el usuario:
     * el origen tiene que ser un código IATA válido
     * el destino tiene que ser un código IATA válido
     * la fecha de salida tiene que ser posterior a la fecha y horas actuales
      * la fecha de destino tiene que ser posterior a la fecha de salida
  - Si alguno de los datos es erróneo retornaremos un statusCode 400 indicando en el mensaje cual es el atributo que no es valido: EJ: 'El atributo outboundDate es inválido'.

 * Eliminar un vuelo (DELETE) =>

 - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método DELETE al path '/flights/:id', siendo :id un parámetro de path donde se encontrará el identificador de vuelos.
  - La operación buscará dentro de todos los vuelos que tenemos en nuestro archivo flights.json y eliminará del archivo ese vuelo si lo encuentra