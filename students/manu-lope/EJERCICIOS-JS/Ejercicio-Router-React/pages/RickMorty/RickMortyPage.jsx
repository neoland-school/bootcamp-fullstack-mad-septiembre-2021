class RickMortyPage extends React.Component {
    constructor() {
        super();
        this.state = {
            personajes: []
        }
    }
    async componentDidMount() {
        // let arrayURL = []
        // for (let i = 1; i < 671; i++) {
        //     arrayURL.push(i)
        // }

        let random = (Math.floor(Math.random()*671)).toString();

        const r = await fetch(`https://rickandmortyapi.com/api/character/${random}`)
        const data = await r.json();
        const newState ={
            personajes: data
        }
        this.setState(newState);
    }
    render() {
        return  <React.Fragment>
                    <CharacterCard
                        name={this.state.personajes.name}
                        status={this.state.personajes.status}
                        // location={this.state.personajes.location.name}
                        // episode={this.state.personajes.episode[0]}
                        image={this.state.personajes.image}
                    >
                    </CharacterCard>
            </React.Fragment>
    }
}