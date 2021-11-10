class City_list extends React.Component {
    constructor(props){
        super(props);
        this.listadoCiudades = [
        {
            city: "Álava",
            population: 321932,
        utf: "Álava"
        },
        {
            city: "Ávila",
            population: 59258,
        utf: "%C3%81vila"
        },
        {
            city: "Albacete",
            population: 172693,
        utf: "Albacete"
        },
        {
            city: "Alicante",
            population: 335052,
        utf:"Alicante"
        },
        {
            city: "Almería",
            population: 192697,
        utf:"Almería"
        },
        {
            city: "Asturias",
            population: 1062000,
        utf:"Asturias"
        }
     ]
    }

    render() {
        return (
         <React.Fragment>
             {this.listadoCiudades.map((e, i) => <Cities nombre={e.city} habitantes={e.population} utf={e.utf} key={i} ></Cities>)}
                {/* a map le introducimos una key, un identificador único para que no nos saque un warning. React quiere que cada elemento de un bucle tenga un identificador. */}
            
        </React.Fragment>
        )
    }
}