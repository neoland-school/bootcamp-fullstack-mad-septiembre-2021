// 2- Crear un componente que pinte una lista de aeropuertos. Para ello el componente tiene que solicitar la lista de los aeropuertos en la siguiente URL (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json) y pintar el componente de ejercicio uno pasándole como props cada aeorpuerto.

// 3. Modificar el componente anterior para añadir un buscador (input). Cuando escriba en el input, se irán pintando los aeropuertos cuyo nombre contengan la búsqueda.

// 4. Añadir al buscador anterior que también filter por nombre, país, ciudad y estado en el mismo input

class AirportList extends React.Component {
    constructor() {
        super();
        this.state = {
            airportArr: [],
        }
        
    };

    async componentDidMount() {
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const airportArr = await r.json();
        this.setState({ airportArr });
    }

    async filterArr(tecla){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const airportArr = await r.json();
        let filtrado = airportArr.filter(obj => obj.name.toLowerCase().includes(tecla.target.value) || obj.country.toLowerCase().includes(tecla.target.value) || obj.city.toLowerCase().includes(tecla.target.value));
        this.setState({airportArr : filtrado});



        // const filteredXName = airportArr.filter(aer => aer.name.toLowerCase().includes(tecla.target.value));
        // const filteredXCountry = airportArr.filter(aer => aer.country.toLowerCase().includes(tecla.target.value));
        // const filteredXCity = airportArr.filter(aer => aer.city.toLowerCase().includes(tecla.target.value));
        // const filteredXstate = airportArr.filter(aer => aer.state.toLowerCase().includes(tecla.target.value));
        // const arrayComplete = [];
        // arrayComplete.concat(filteredXName);
        // arrayComplete.concat(filteredXCountry);
        // arrayComplete.concat(filteredXCity);
        // arrayComplete.concat(filteredXstate);
        // this.setState({airportArr: arrayComplete})
        // console.log(arrayComplete)
    }


    // const airportArr = await r.json();
    // const filteredXName = airportArr.filter(aer => aer.name.toLowerCase().includes(tecla.target.value));
    // console.log(filteredXName)
    // this.setState({airportArr1: filteredXName});
    // this.setState({airportArr: []})


    render() {
        return (
            <React.Fragment>
                <div className='searchEngine'> <input type="text" onChange={tecla => this.filterArr(tecla)}className='searchEngine_input' /></div>
                {this.state.airportArr.map(a => <Airport key={a.code} aeropuerto={a}></Airport>)}
            </React.Fragment>
        )
    }
}