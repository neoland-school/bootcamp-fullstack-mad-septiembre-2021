
class App extends React.Component {

    render() {
        return <React.Fragment>
        <CityList />
        </React.Fragment>

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);