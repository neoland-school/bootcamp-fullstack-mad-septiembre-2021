class App extends React.Component {

    render() {
        return <React.Fragment>
            <ListCharacters />
        </React.Fragment>

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
