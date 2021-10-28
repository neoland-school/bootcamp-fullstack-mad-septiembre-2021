// 1.- Crear un componente “CharacterCard” que mostrará
// nombre
// estado (vivo o muerto)
// Ultima localización conocida
// Nonbre del primer episodio en que aparece.
// 2.- Crear un componente padre que realizando peticiones htpp (fetch) al API de rick y morty gestione la respuesta para enviar la información necesaria en el componente “CharacterCard” por props.
// 3.- Mostrar todos los personajes de Rick y Morty en el navegador con la ayuda de los componentes del ejercicio 1 y 2.
// 4.- Añadir un buscador de personajes que reaccione en vivo mostrando el personaje que introduzca el usuario por input. (editado) 

class App extends React.Component {
    render() {
        return (
        <React.Fragment>
            <DrawCard></DrawCard>
        </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));