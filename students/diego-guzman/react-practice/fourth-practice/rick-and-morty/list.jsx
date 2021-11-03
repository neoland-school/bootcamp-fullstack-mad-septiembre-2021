class ListCharacters extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [],
            filteredData: [],
            episode:[],
            episodeName: [],

        };
    }

    AllCharacters = [];
    async componentDidMount() {
        for (let i = 0; i < 671; i++) {
            this.AllCharacters.push(i);
        }
        // this.AllCharacters = Array(671).fill(null).map((_e,i) => i);
        const r = await fetch(`https://rickandmortyapi.com/api/character/${this.AllCharacters}`)
        const d = await r.json();
        // this.setState({ data: d, filteredData: d });
        debugger;
        const info = this.state.filteredData.map(e => e.episode[0])
        // for(let i = 0; i<info.length; i++){
        //     this.state.episode.push(info[i][0])
        // }

        console.log(this.state.episode)
        const rtwo = await fetch(info[0]);
        const dtwo = await rtwo.json();
        this.setState({ episodeName: dtwo })
        console.log(this.state.episodeName)

    }

    filterByName(e) {
        const info = e.target.value.toLowerCase();
        const filteredByName = this.state.data.filter(c => c.name.toLowerCase().includes(info));
        this.setState({ filteredData: filteredByName });
    }


    render() {
        return <React.Fragment>
            <input type="text" placeholder='Busca por nombre' onChange={e => this.filterByName(e)} />
            <div className='allCharacters__container'>
                {this.state.filteredData.map(e => <CharacterCard key={e.id} data={e} episodeName={e}></CharacterCard>)}
            </div>
        </React.Fragment>
    }

}