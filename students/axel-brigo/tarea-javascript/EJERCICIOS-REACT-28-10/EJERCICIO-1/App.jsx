class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arrayVacio: [],

        }

    };


    async componentDidMount() {
        let r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json')
        let newArray = await r.json()
        this.setState({ arrayVacio: newArray })
    }



    render() {
        return (
            <React.Fragment>

                <input type="text" onChange={(e) => {
                    let coincidences = e.target.value.toLowerCase();
                    let coincidencesFilter = this.state.arrayVacio.filter(a => a.city.toLowerCase().includes(coincidences))
                    console.log(coincidencesFilter)
                    this.setState({ arrayVacio: coincidencesFilter })
                }
                } />


                <input type="range" id="volume" name="volume"
                    min="0" max="5000000" onChange={(e) => {
                        let coincidencesFilter = this.state.arrayVacio.filter(a => a.city.toLowerCase().includes(coincidences))
                        console.log(coincidencesFilter)
                        this.setState({ arrayVacio: coincidencesFilter })
                    }
                    } />


                {this.state.arrayVacio.map(p => <City ciudad={p}></City>)}
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'))

