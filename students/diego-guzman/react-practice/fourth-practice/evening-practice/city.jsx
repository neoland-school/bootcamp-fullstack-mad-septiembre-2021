class City extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    city: "Álava",
                    population: 321932,
                    utf: "%C3%81lava"
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
                utf:"Almer%C3%ADa"
                },
                {
                    city: "Asturias",
                    population: 1062000,
                utf:"Asturias"
                }
            ]};
    }

    // apiParsed(){
    //     const data = JSON.parse(this.state.d);
    //     this.setState({parsed: data})
    // }
    // apiParsed()

    render() {
        return <React.Fragment>
             {this.state.data.map(e=><CityData key={e.utf} data={e}></CityData>)}
        </React.Fragment>
    }

}