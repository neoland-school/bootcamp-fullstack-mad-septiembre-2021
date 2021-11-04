// 2.- Crear un componente padre que realizando peticiones htpp (fetch) al API de rick y morty gestione la respuesta para enviar la información necesaria en el componente "CharacterCard" por props.
// 4.- Añadir un buscador de personajes que reaccione en vivo mostrando el personaje que introduzca el usuario por input. (editado) 

function DrawCard() {

    const [list, setList] = React.useState([]);
    const [listOrig, setListOrig] = React.useState([]);
    
    React.useEffect(()=> {
        const arr= [];
        for (let i=1; i<183; i++){
                arr.push(i);
            }

        fetch(`https://rickandmortyapi.com/api/character/${arr}`)
        .then(r=> r.json())
        .then(d=>{
            setList(d);
            setListOrig(d);
        })    
        }, [])

    const filter = (e) => {
        let entrada = e.target.value.toLowerCase();
        let isTheSame = listOrig.filter(f=> f.name.toLowerCase().includes(entrada));
        setList(isTheSame); 
    }

    return (
        <div className='card_container'>
            <div className= 'searchName__container'><input type="text" className='search' placeholder='Búsqueda por nombre' onChange= {filter}/></div>
            {list.map((e,i) =><CharacterCard key ={i} datos={e}></CharacterCard>)}          
        </div>
    )

}