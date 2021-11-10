class AirportData extends React.Component{
    constructor(props){
        super(props);
        this.airport = {
            name: 'Barajas',
            country: 'Spain',
            state: 'Madrid',
            city: 'Madrid',
            lat: '00000',
            long: '0000'
        }
    }

    render(){
        return(
            <Airport data={this.airport}></Airport>
        )
    }
}