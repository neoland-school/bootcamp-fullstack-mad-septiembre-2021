class CityList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            filteredData: [],
            filteredPopulationData:[],
            populationNumber:'',
        }
    }


    async componentDidMount() {
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json')
        const data = await r.json();
        this.setState({ data: data, filteredData: data, filteredPopulationData: data });
    }

    findInfo(e) {
        let info = e.target.value.toLowerCase();
        const filteredByName = this.state.data.filter(a => a.city.toLowerCase().includes(info));
        this.setState({ filteredData: filteredByName });
    }

    findPopulation(e){
        let filteredPopulation =e.target.value;
        const filteredByPopulation = this.state.data.filter(a => a.population>=filteredPopulation);
        this.setState({ filteredPopulationData: filteredByPopulation, populationNumber: filteredPopulation });
        console.log(filteredByPopulation)
    }

    render() {
        return <React.Fragment>
            <input className='search__input' type="text" onChange={e => this.findInfo(e)}></input>
            <div className='population__input'>
                <input type="range" id="population" name="population"
                    min="0" max="5000000" onChange={e => this.findPopulation(e)}></input>
                <label htmlFor="population">Filtery by population</label>
                <p>{this.state.populationNumber}</p>
            </div>
            <div className='main__container'>
                {this.state.filteredPopulationData.map(e => <CityData key={e.utf} data={e}></CityData>)}
            </div>
        </React.Fragment>
    }

}