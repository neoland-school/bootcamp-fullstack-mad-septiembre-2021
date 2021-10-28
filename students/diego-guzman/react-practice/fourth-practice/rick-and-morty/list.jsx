class ListCharacters extends React.Component {
    constructor() {
        super()
        this.state = {
            data:[],
            allData:[],
        }
    }

    async componentDidMount() {
            const r = await fetch ('https://rickandmortyapi.com/api/character')
            const d = await r.json();
            this.setState({ data: d.results });

        let allCharacters=[];

        for(let i=2; i<34; i++){
            const retrieve = await fetch ('https://rickandmortyapi.com/api/character/?page={i}')
            const answer = await retrieve.json();
            allCharacters.push(answer);
            console.log(allCharacters)
            this.setState({ allData: allCharacters });

        }
        }
        

    render() {
        return <React.Fragment>
            <div className='allCharacters__container'>
            {this.state.data.map(e =><CharacterCard key={e.id} data={e}></CharacterCard>)}
            </div>
        </React.Fragment>
    }

}