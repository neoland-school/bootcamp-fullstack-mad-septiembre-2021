

class AirportList extends React.Component {

    constructor() {
        super()
        this.state = {
            change: false,
            airport: [],
            airportCountry: [],
            airportCity: [],
            airportState: []
        }
    }

    async componentDidMount() {
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
        const d = await r.json();
        this.setState({ airport: d });
    }

    async findInfo(e) {
        this.setState({ change: true })
        const info = e.target.value.toLowerCase();
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
        const d = await r.json();
        const searchedAirports = d.filter(a => a.name.toLowerCase().includes(info))
        this.setState({ airport: searchedAirports })
        const searchedAirportsCountry = d.filter(a => a.country.toLowerCase().includes(info))
        this.setState({ airportCountry: searchedAirportsCountry })
        const searchedAirportsCity = d.filter(a => a.city.toLowerCase().includes(info))
        this.setState({ airportCity: searchedAirportsCity })
        const searchedAirportsState = d.filter(a => a.state.toLowerCase().includes(info))
        this.setState({ airportState: searchedAirportsState })
    }

    render() {
        return (
            <React.Fragment>
                <form className='search__input'>
                    <input type='text' onChange={e => this.findInfo(e)}></input>
                    <button type='submit'>search</button>
                </form>
                <div className='container'>
                    <div className='name__container'>
                        <p className='p__name'>By Name</p>
                        {this.state.airport.map(a => <AirportCard key={a.code} airport={a}></AirportCard>)}
                    </div>
                    <div className='country__container'>
                        <p className='p__country'>By Country</p>
                        {this.state.airportCountry.map(a => <AirportCard key={a.code} airport={a}></AirportCard>)}
                    </div>
                    <div className='city__container'>
                        <p className='p__city'>By City</p>
                        {this.state.airportCity.map(a => <AirportCard key={a.code} airport={a}></AirportCard>)}
                    </div>
                    <div className='state__container'>
                        <p className='p__state'>By State</p>
                        {this.state.airportState.map(a => <AirportCard key={a.code} airport={a}></AirportCard>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
