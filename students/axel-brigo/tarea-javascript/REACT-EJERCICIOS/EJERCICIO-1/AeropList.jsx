class AeropList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            airport =[]
        }
    }

    async listaAeropuertos() {
        const r = await fetch(`https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json`);
        const airport = await r.json();
        this.setState({ airport });

    }



    render() {
        return (
            <div>
                <p>{this.state.airport.name}</p>
            </div>
        )

    }
}
