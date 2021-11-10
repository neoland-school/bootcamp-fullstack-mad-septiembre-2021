class App extends React.Component{


    render(){
        return(
            <React.Fragment>
                <ServidorData></ServidorData>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)