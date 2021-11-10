class App extends React.Component {
    constructor() {
        super();
        this.state = {
            personajes: [],
            personajesListNew: []
        }


    }


    async componentDidMount() {
        let arrayURL = []
        for (let i = 1; i < 671; i++) {
            arrayURL.push(i)
        }
        const r = await fetch(`https://rickandmortyapi.com/api/character/${arrayURL}`)
        const data = await r.json();
        const newState ={
            personajes: data,
            personajesListNew:data

        }
        this.setState(newState);
        console.log(newState)
    }
    render() {
        return (
            <React.Fragment>
                <input placeholder="Wubba Lubba Dub Dub!" type="text" onChange={(e)=>{
                    let usuario = e.target.value.toLowerCase();
                    let usuarioFinal = this.state.personajes.filter(a => a.name.toLowerCase().includes(usuario));
                    this.setState({personajesListNew : usuarioFinal})
                }} />
                {this.state.personajesListNew.map((e, i) =>
                    <CharacterCard key={i}
                        name={e.name}
                        status={e.status}
                        location={e.location.name}
                        episode={e.episode[0]}
                        image={e.image}
                    >
                    </CharacterCard>)}
                <CharacterCard></CharacterCard>

            </React.Fragment>
        )
    }
}
console.log(`llego`)
ReactDOM.render(
    <App />,
    document.getElementById("react-container-jsx")
);