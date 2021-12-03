1- Crear un servidor http expressjs con una ruta GET en un router, que devuelva un texto que diga "Hola Router". Añadir a esa aplicación lo siguiente:
 Un middleware de aplicación que pinte por consola en el servidor "Hola mundo App Middleware"
 Un middleware de ruter que pinte por consola en el servidor "Hola mundo Router Middleware"
 Un middleware de ruta que pinte por consola en el servidor "Hola mundo Ruta Middleware"

 2-  Crear un servidor http expressjs con una ruta GET en un router, que devuelva un texto indicando por cuantos middleware custom ha pasado. La respuesta de la ruta tiene que decir: "HE pasado por X middlewares", siendo X el número de middlewares por los que ha pasado o 0 si no ha pasado por ninguno. Añadir un middleware de app, otro de router y otro de ruta que aumenten en uno el numero de middlewares actuales de la peticion. 

 3. Vamos a hacer un back-end en expressjs de una agenda de contactos con persistencia en ficheros. Nuestro back-end tiene que permitir las siguientes operaciones:
 - Devolver toda la lista de contactos (se podrá filtrar los contactos por empresa)
 - Devolver una lista de contactos buscando por teléfono
 - Devolver un contacto concreto buscando por alias
 - Crear un contacto
 - Actualizar un contacto
 - Eliminar un contacto
 - añadir un número de teléfono a un contacto

La entidad contacto tendrá los siguientes atributos:
 - alias: string
 - nombre: string
 - apellido: string
 - empresa: string
- telefonos: string[] (en formato telefono movil español)

 Siempre las entidades tienen que tener al que les identifica. En este caso el alias será el campo que identifica a un contacto, es decir, no pueden existir dos contactos con el mismo alias