// 1.- Crear un componente de función "CharacterCard" que mostrará
// nombre
// estado (vivo o muerto)
// Ultima localización conocida
// Nombre del primer episodio en que aparece.
// 2.- Crear un componente padre que realizando peticiones htpp (fetch) al API de rick y morty gestione la respuesta para enviar la información necesaria en el componente "CharacterCard" por props.
// 3.- Mostrar todos los personajes de Rick y Morty en el navegador con la ayuda de los componentes del ejercicio 1 y 2.
// 4.- Añadir un buscador de personajes que reaccione en vivo mostrando el personaje que introduzca el usuario por input. (editado) 
// 5.- Añadir a la card la localización de origen de cada personaje.
// 6.- Implementar un buscador* por origen que al introducir un origen válido muestre una card con la información de esa localización(id, name, type, dimension,  created) y seguido debajo de ella aparecerán todos los personajes residentes en dicha localización. (*) En este buscador no implementaremos la misma lógica que hasta ahora; en esta ocasión el buscador no hará nada hasta que el usuario haga click en un botón. Cuando haga click debemos evaluar si la localización existe o no; si no existe mostraremos un mensaje en rojo que indique "Localización errónea, intente de nuevo" y en caso de que exista tendrá el funcionamiento explicado antes.

function App() {
    return (
        <React.Fragment>
            <DrawCard></DrawCard>
        </React.Fragment>
    )
}
ReactDOM.render(<App></App>, document.getElementById('root'));