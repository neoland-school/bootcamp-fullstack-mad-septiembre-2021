class ListCharacters extends React.Component {
    constructor() {
        super()
        
        this.state = {
            data: [],
            // allData: [],
            // AllCharacters:[],
        }
    }
arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

    async componentDidMount() {
        // for(let i=0; i<671; i++){
        //     this.state.AllCharacters.push(i);
        // }
        const r = await fetch(`https://rickandmortyapi.com/api/character/${this.arr}`)
        const d = await r.json();
        this.setState({ data: d.results});
        // console.log(this.state.AllCharacters)
        

    }

   

    render() {
        return <React.Fragment>
            <div className='allCharacters__container'>
                {this.state.data.map(e => <CharacterCard key={e.id} data={e}></CharacterCard>)}
            </div>
        </React.Fragment>
    }

}