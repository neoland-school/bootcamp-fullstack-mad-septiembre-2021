

class AppCityList extends React.Component {
    constructor() {
        super()
        this.state = {
            citiesList: [],
            citiesListNew: []
        }

    }

    async componentDidMount() {
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json')
        const cities = await r.json();
        const newState = {
            citiesList: cities,
            citiesListNew: cities
        }
        this.setState(newState);
        console.log(newState);
    }

    render() {
        return <React.Fragment>
            <input placeholder="Busca una ciudad que tenga demasiada gente" type="text" onChange={(e) => {
                let filtered = e.target.value.toLowerCase();
                console.log(filtered);
                let filteredFinal = this.state.citiesList.filter(a => a.city.toLowerCase().includes(filtered));
                console.log(filteredFinal);
                this.setState({ citiesListNew: filteredFinal });
                console.log(this.state.citiesList);
            }} />
            {this.state.citiesListNew.map((e, i) => <CityList key={i} nombre={e.city} poblacion={e.population}></CityList>)}


        </React.Fragment>
    }
}
ReactDOM.render(
    <AppCityList />,
    document.getElementById("react-container-jsx")

)