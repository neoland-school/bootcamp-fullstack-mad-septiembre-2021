class App extends React.Component{


    render(){
        return(
            <React.Fragment>
                <Data></Data>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)