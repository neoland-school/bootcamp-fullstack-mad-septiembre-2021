
function App() {


    return (
        <ReactRouterDOM.BrowserRouter>
            <Hello></Hello>
            <Greeting name="Bootcamp"></Greeting>
            <UserGreeting></UserGreeting>
        </ReactRouterDOM.BrowserRouter>


    )
}




ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);








































