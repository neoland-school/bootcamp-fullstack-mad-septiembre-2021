class App extends React.Component {

    render() {
        return (<React.Fragment>
            <StateComponent></StateComponent>
        </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('main__react')
);