class Data extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[], // este es el array que vamos a pintar
            originalData:[] // creamos un array que será donde tengamos los datos originales. Este nunca se va a modificar 
            
        }
    }

    async componentDidMount(){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const d = await r.json();
        this.setState({data: d, originalData:d});
        console.log(d)
    }


   findItems(e){
       const item = e.target.value.toLowerCase();
       const filtradoAirport =  this.state.originalData.filter(i => i.name.toLowerCase().includes(item)); // utilizamos el array que contiene datos originales para obtener los filtros
       this.setState({data: filtradoAirport}) // le damos el valor de los datos filtrados al array que pintamos
       
   }
    

    render(){
        return(
            <React.Fragment>
                <input onChange={e=> this.findItems(e)} type="text" placeholder="escribe un aeropuerto" />
                <div className='container'>
                <div>
                <p>By name</p>
                </div>
               {this.state.data.map(i=> <PrintAirport key={i.code} data={i}></PrintAirport>)}
               </div>
            </React.Fragment>
        )
    }
}