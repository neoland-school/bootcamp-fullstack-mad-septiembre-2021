class ServidorData extends React.Component{

    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    async getData(){
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const d = await r.json();
        this.setState({data: d})
    }

    render(){
        return(
            <React.Fragment>
                {this.state.data.map(i=> {<Cities data={i}></Cities>})}
            </React.Fragment>
        )
    }
}