// 1. Crear un componente de reactJS llamado CityMadrid. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Madríd tiene 3,207,247 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.
// 2. Crear un componente de reactJS llamado CityBarcelona. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Barcelona tiene 1,611,822 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.
// 3. Crear un componente de reactJS llamad CitySevilla. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Sevilla tiene 700,169 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.
// ¿Y si os pido que pintéis todas las ciudades de españa? ¿Veis el problema?
// Estamos duplicando el mismo componente constantemente y si tuviesemos 10000 ciudades tendríamos que hacer 10000 componentes iguales, lo unico que cambian son los datos de la ciudad que pinto. Esto nos llevaría muchisimo tiempo y sería el infierno. Vamos a hacer que podamos reutilizar el componente
// 4. Crear un componente City que reciba por props el Nombre de la ciudad y su población. Eliminar los componentes de CityMadrid, CityBarcelona y CitySevilla y pintar en el App las citys de Madrid, Barcelona y Sevilla con el componente City

// 7. Vamos a escribir unos filtros. Modificar el componente CityList para que tenga un input que cuando se escriba, se filtren las ciudades que cuyo nombre contenga lo que el usuario escribió

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            citiesArr : [],
            citiesArrOriginal : []
        }
    };
    
    async componentDidMount() {
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const citiesArr = await r.json();
        this.setState({ 
            citiesArr: citiesArr,
            citiesArrOriginal: citiesArr,
        });
    }
    filterCity(k){
        let sentence = k.target.value.toLowerCase();
        let coincidences = this.state.citiesArrOriginal.filter(l => l.city.toLowerCase(). includes(sentence));
        this.setState({citiesArr : coincidences})
    }
    filterCityRange(r){
        let sentence = r.target.value;
        let coincidences = this.state.citiesArrOriginal.filter(l => l.population < sentence);
        console.log(sentence)
        this.setState({citiesArr : coincidences})
    }

    render() {
        return (
            <React.Fragment>
                <div className='input'><input type="text" className='inp' onChange={(k) => this.filterCity(k)} /></div>
                <div className='input'><input type="range" className='inp' min="35000" max="5000000" onChange={(r) => this.filterCityRange(r)} /></div>
                {this.state.citiesArr.map((e, i) => {return <City key={i} cities= {e} ></City>})}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));