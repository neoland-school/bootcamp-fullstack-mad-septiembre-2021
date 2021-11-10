class App extends React.Component {

    render() {
        return (<React.Fragment>
            <DivComponent></DivComponent>
        </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('main__react')
);