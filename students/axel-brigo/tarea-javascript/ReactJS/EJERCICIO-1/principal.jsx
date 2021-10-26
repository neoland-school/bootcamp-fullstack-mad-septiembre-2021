

class App extends React.Component {

    render() {
        return <React.Fragment>
            <HeaderComponent></HeaderComponent>
            {Array(9).fill(0).map((e, i) => <CardComponent></CardComponent>)}

            <FooterComponent></FooterComponent>


        </React.Fragment>
    }


}

ReactDOM.render(
    <App />,
    document.getElementById('main__react')
);