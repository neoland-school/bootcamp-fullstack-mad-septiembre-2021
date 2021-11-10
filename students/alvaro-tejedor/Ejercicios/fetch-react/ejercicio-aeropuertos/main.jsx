class App extends React.Component{


    render(){
        return(
            <React.Fragment>
                <AirportData></AirportData>
                <Data></Data>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)