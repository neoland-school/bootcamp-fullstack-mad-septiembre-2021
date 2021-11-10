class Data extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            dataOriginal: [],
            value: {min: 0, max: 500000}
        }
    }

    async componentDidMount() {
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const d = await r.json();
        this.setState({ data: d, dataOriginal: d });
        console.log(this.state.data);
        console.log(this.state.dataOriginal)
    }

    normalizeString(cityName){ //creamos una funcion para normalizar el string (quitar los acentos)
        return cityName.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // se utiliza la función de .normalize 

    }

    filtrador(e){
        const item = this.normalizeString(e.target.value.toLowerCase());
        const filteredData = this.state.dataOriginal.filter(i=>this.normalizeString(i.city).toLowerCase().includes(item))
        this.setState({data: filteredData});
        console.log(this.state.data)
    }

    filtradorPoblacion(q){
        const quantity = parseInt(q.target.value); //parseamos el value porque es un string
        const filteredPopulation = this.state.dataOriginal.filter(i=> i.population < quantity);
        this.setState({data: filteredPopulation});
        console.log(quantity)

    }

    render() {
        return (
            <React.Fragment>
                <div className='main'>
                    <input onChange={(e)=> this.filtrador(e)} type="text" />
                    <div className='slider-parent'>
                    <input onChange={(q)=> this.filtradorPoblacion(q)} type="range" min="0" max="5000000"/>
                    </div>
                    <div className='container'>
                        {this.state.data.map(i => { return <Ciudad data={i}></Ciudad> })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}