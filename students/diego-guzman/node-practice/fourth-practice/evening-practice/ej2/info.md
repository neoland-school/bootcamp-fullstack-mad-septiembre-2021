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