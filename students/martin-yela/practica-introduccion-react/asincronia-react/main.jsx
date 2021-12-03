// 1- Crear un componente de react que pinte un aeropueto por recibido como objeto por props. Tienen que pintar el (name, country, state, city, lat, long). Todos son P, aunque recubrirlos con un div que tenga un border de 1 px solid black, para que diferenciemos los aeropuertos
// 2- Crear un componente que pinte una lista de aeropuertos. Para ello el componente tiene que solicitar la lista de los aeropuertos en la siguiente URL (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json) y pintar el componente de ejercicio uno pasándole como props cada aeorpuerto.
// 3. Modificar el componente anterior para añadir un buscador (input). Cuando escriba en el input, se irán pintando los aeropuertos cuyo nombre contengan la búsqueda.
// 4. Añadir al buscador anterior que también filter por nombre, país, ciudad y estado en el mismo input


class App extends React.Component {
    render(){
        return (
        <React.Fragment>
            <AirportList></AirportList>
        </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));