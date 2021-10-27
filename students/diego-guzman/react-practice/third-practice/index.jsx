// 1- Crear un componente de react que pinte un aeropueto por recibido como objeto por props. Tienen que pintar el (name, country, state, city, lat, long). Todos son P

// 2- Crear un componente que pinte una lista de aeropuertos. Para ello el componente tiene que solicitar la lista de los aeropuertos en la siguiente URL (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json) y pintar el componente de ejercicio uno pasándole como props cada aeorpuerto.

// 3. Modificar el componente anterior para añadir un buscador (input). Cuando escriba en el input, se irán pintando los aeropuertos cuyo nombre contengan la búsqueda.

// 4. Añadir al buscador anterior que también filter por nombre, país, ciudad y estado en el mismo input

// class AirportCard extends React.Component {

//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div className ='airport__container'>
//                     <p>{this.props.name}</p>
//                     <p>{this.props.country}</p>
//                     <p>{this.props.state}</p>
//                     <p>{this.props.city}</p>
//                     <p>{this.props.lat}</p>
//                     <p>{this.props.long}</p>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

class App extends React.Component {

    render() {
        return <AirportList />
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);