function App() {


    return (
        <ReactRouterDOM.BrowserRouter>




            <Header></Header>

            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route path="/page1">
                    <SignUp></SignUp>
                </ReactRouterDOM.Route>


                <Footer></Footer>
            </ReactRouterDOM.Switch>





        </ReactRouterDOM.BrowserRouter>
    )
}


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);
