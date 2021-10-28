// 2.- Crear un componente padre que realizando peticiones htpp (fetch) al API de rick y morty gestione la respuesta para enviar la información necesaria en el componente “CharacterCard” por props.
// 4.- Añadir un buscador de personajes que reaccione en vivo mostrando el personaje que introduzca el usuario por input.
class DrawCard extends React.Component {
    constructor() {
        super()
        this.state = {
            arr : [],
            arrOriginal : []
        }
    }
    async componentDidMount(){
        const r = await fetch('https://rickandmortyapi.com/api/character');
        const arr = await r.json();
        this.setState({
            arr: arr.results,
            arrOriginal: arr.results
        });
    }
    filterCard(e){
        let teclas = e.target.value.toLowerCase();
        let filtro = this.state.arrOriginal.filter(a=> a.name.toLowerCase().includes(teclas));
        this.setState({arr : filtro});
    }
    render() {
        return(
            <React.Fragment>
                <div className='contInput'><input type="text" className='input' onChange={(e)=> this.filterCard(e)} /></div>
                {this.state.arr.map((e,i) => {return <CharacterCard key={i} datos= {e}></CharacterCard>})}
            </React.Fragment>
        )
    }
}