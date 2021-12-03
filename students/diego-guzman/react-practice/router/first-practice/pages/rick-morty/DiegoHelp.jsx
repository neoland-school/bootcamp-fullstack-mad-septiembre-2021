class ListCharacters extends React.Component {
    constructor() {
        super()
        
        this.state = {
            data:[],
            component: '',
        }
    }
    // AllCharacters=[];

    async componentDidMount() {
        // for(let i=0; i<671; i++){
        //     this.AllCharacters.push(i);
        // }
        const r = await fetch(`https://rickandmortyapi.com/api/character/2`)
        const d = await r.json();
        this.setState({data: d});
        this.setState({component: <RickMortyCard data={this.state.data}></RickMortyCard>})
        console.log(this.state.data)
    }

    // ${this.AllCharacters[Math.floor(Math.random()*this.AllCharacters.length)]}
    render() {
        return (
            <div className='allCharacters__container'>
                {this.state.component}

                {/* {this.state.data!==undefined? :<p></p>}  */}

            </div>
        )
    
    }

}