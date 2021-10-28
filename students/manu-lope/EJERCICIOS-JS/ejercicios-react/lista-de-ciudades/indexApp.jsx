class App extends React.Component {
    constructor() {
        super()
        this.state = {
            citiesList:[]
        }
            
    }

async componentDidMount() {
    const r= await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json')
    const citiesList = await r.json();
    const newState={
        citiesList
    }
    this.setState(newState);
    console.log(newState);
}

    render() {
        return <React.Fragment>
            {this.state.citiesList.map((e, i) => <City nombre={e.city} poblacion={e.population} key={i}></City>)}
        </React.Fragment>
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("react-container-jsx")

)