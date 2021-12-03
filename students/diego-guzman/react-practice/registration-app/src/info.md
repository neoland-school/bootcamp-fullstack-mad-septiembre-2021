1.Crear una página publica que ponga un H1 con el texto Hello Public Page


2.Crear una página publica de login con un FORMULARIO que tenga un campos:
        Email -> input de texto tipo email, se debe validar
Al pulsar sobre el botón del login guardará el email del usuario en el sessionStorage
 
3.Crear un customHook llamado useAuth que devuelva si hay un usuario logado o no (obtenido del session storage). 


4.Crear un componente React (PrivateRoute) que defina una ruta pinte el componente hijo que le hayan declarado si hay un usuario logado y sino redirija al login


5.Crear una página que pinte un H1 indicando `Hello <userEmail>`, recogiendo el userEmail del sessionStorage


6.Definir la ruta privada para el componente del punto 5


7.Hacer que el login redirija a la página privada creada en el punto anterior cuando el usuario pulse el botón de login

8.Poner un text input y un botón en la ruta privada del punto 5 debajo de saludo. Al pulsar el botón la página enviará por query param lo que haya introducido el usuario en el text input. La nueva página que recibe el param también será privada y mostrará en un h1 el texto "El usuario <email_usuario> dice: <query_param>"