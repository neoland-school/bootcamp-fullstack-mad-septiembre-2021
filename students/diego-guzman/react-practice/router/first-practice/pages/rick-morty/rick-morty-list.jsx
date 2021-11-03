class ListCharacters extends React.Component {
    constructor() {
        super()

        this.state = {
            data: {
                location: {},
                origin: {},
                episode: [],
                episodeInfo: '',
                
            },
            episodeName: {},
        }
    }
    AllCharacters = [];


    async componentDidMount() {
        for (let i = 0; i < 671; i++) {
            this.AllCharacters.push(i);
        }
        const r = await fetch(`https://rickandmortyapi.com/api/character/${this.AllCharacters[Math.floor(Math.random() * this.AllCharacters.length)]}`)
        const d = await r.json();
        this.setState({ data: d });
        
        const rtwo = await fetch(`${this.state.data.episode[0]}`)
        const dtwo = await rtwo.json();
        this.setState({ episodeName: dtwo })
    }

    render() {
        return (
            <RickMortyCard data={this.state.data} episodeName={this.state.episodeName}></RickMortyCard>
        )

    }

}
