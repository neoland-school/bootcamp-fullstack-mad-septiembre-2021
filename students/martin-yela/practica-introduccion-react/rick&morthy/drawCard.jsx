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
    // async componentDidMount(){
    //     let array =[];
    //     for (let i =1;i<672;i++){
    //         array.push(i);
    //     }
    //     const r = await fetch(`https://rickandmortyapi.com/api/character/${array}`);
    //     const arr = await r.json();
    //     console.log(arr)
    //     this.setState({
    //         arr: arr,
    //         arrOriginal: arr
    //     });
    // }

    async componentDidMount(){
        let arrayConcat = [];
        let arrayConcat2 = [];
        for (let i = 1; i <2; i++){
        const r = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
        const arr = await r.json();
        arrayConcat.push(arr)
        }
        arrayConcat.forEach(a=>{
            a.results.forEach(b=> {
                arrayConcat2.push(b);
            })
        })
    this.setState({arr : arrayConcat2,
        arrOriginal:arrayConcat2
    });
    }

    filterCard(e){
        let teclas = e.target.value.toLowerCase();
        let filtro = this.state.arrOriginal.filter(a=> a.name.toLowerCase().includes(teclas));
        this.setState({arr : filtro});
    }
    filterCardByLocation(l){
        l.preventDefault();
        let teclas = l.target.prueba.value.toLowerCase();
        let filtro = this.state.arrOriginal.filter(a=> a.location.name.toLowerCase().includes(teclas));
        this.setState({arr : filtro,
                        arrOriginal :filtro
        });
       
    }
    render() {
        return(
            <React.Fragment>
                <div className='contInput'>
                    <form onSubmit={(e)=> this.filterCardByLocation(e)}>
                        <input type="text" className='input' name='prueba'/>
                        <button className='boton' type='submit' >BOTON</button>
                    </form>
                </div>
                <div>
                    
                </div>
                <div className='contInput'><input type="text" className='input' onChange={(l)=> this.filterCard(l)} /></div>
                {this.state.arr.map((e,i) => {return <CharacterCard key={i} datos= {e}></CharacterCard>})}
            </React.Fragment>
        )
    }
}

// 6.- Implementar un buscador* por origen que al introducir un origen válido muestre una card con la información de esa localización(id, name, type, dimension,  created) y seguido debajo de ella aparecerán todos los personajes residentes en dicha localización. (*) En este buscador no implementaremos la misma lógica que hasta ahora; en esta ocasión el buscador no hará nada hasta que el usuario haga click en un botón. Cuando haga click debemos evaluar si la localización existe o no; si no existe mostraremos un mensaje en rojo que indique “Localización errónea, intente de nuevo” y en caso de que exista tendrá el funcionamiento explicado antes.