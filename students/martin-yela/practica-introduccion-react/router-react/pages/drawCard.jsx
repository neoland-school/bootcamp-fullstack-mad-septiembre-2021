// 2.- Crear un componente padre que realizando peticiones htpp (fetch) al API de rick y morty gestione la respuesta para enviar la información necesaria en el componente “CharacterCard” por props.
// 4.- Añadir un buscador de personajes que reaccione en vivo mostrando el personaje que introduzca el usuario por input.
class DrawCard extends React.Component {
    constructor() {
        super()
        this.state = {
            arr : {
                location:'',
                episode: ''
            },
        }
    }
    async componentDidMount(){
        const aleat = Math.floor(Math.random() * (100 - 1) + 1);
        const r = await fetch(`https://rickandmortyapi.com/api/character/${aleat}`);
        const arr = await r.json();
        console.log(arr)
        this.setState({
            arr: arr,
        });
    }

    render() {
        return(
            <React.Fragment>
                <CharacterCard datos= {this.state.arr}></CharacterCard>
            </React.Fragment>
        )
    }
}

// 6.- Implementar un buscador* por origen que al introducir un origen válido muestre una card con la información de esa localización(id, name, type, dimension,  created) y seguido debajo de ella aparecerán todos los personajes residentes en dicha localización. (*) En este buscador no implementaremos la misma lógica que hasta ahora; en esta ocasión el buscador no hará nada hasta que el usuario haga click en un botón. Cuando haga click debemos evaluar si la localización existe o no; si no existe mostraremos un mensaje en rojo que indique “Localización errónea, intente de nuevo” y en caso de que exista tendrá el funcionamiento explicado antes.