function App() {

    return <React.Fragment>
        <ReactRouterDOM.BrowserRouter>
            <Header></Header>
            <main className='main__container'>
                <ReactRouterDOM.Switch>
                    <ReactRouterDOM.Route path='/page1'>
                        <SingUp></SingUp>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path='/page2'>
                        {/* <Login></Login> */}
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path='/page3'>
                        {/* HERE GOES HOME PAGE */}
                    </ReactRouterDOM.Route>
                </ReactRouterDOM.Switch>
            </main>
            <Footer></Footer>
        </ReactRouterDOM.BrowserRouter>
    </React.Fragment>

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)



