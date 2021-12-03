Vamos a crear una red social:

1. Tenemos que crear una BBDD en mongoDB con las siguientes collections:
 - users: guardará los usuarios (name:string, email:string, avatar: string, connections: string[], pendingConnections: string[])
 - posts: guardará los posts (creator: string, likes: number, image: string, msg: string, comments: { text:string, user: string }[]

2. Tenemos que crear un backend para que permita las siguientes operaciones dentro nuestra app:
   - register: crea un usuario, si no existe otro con el mismo email (nombre, email y avatar). El endpoint va a recibir el nombre (string), el email(string) y el avatar (archivo). Guardará el archivo en el file system del servidor y en BBDD el nombre de la imagen. El email debe ser un email válido

      - tutorial para recibir el archivo en express: http://expressjs.com/en/resources/middleware/multer.html
      - exponer un servidor estático del file system: http://expressjs.com/en/starter/static-files.html

Probarlo con una app reactJS creando una página de registro (solicitará al usuario un nombre, un email, subir una foto de avatar)