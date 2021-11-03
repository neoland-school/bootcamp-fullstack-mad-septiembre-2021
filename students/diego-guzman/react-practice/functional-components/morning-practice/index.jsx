function App() {

    return(
    <React.Fragment>
        <Hello></Hello>
        {/* <Greeting name={'bootcamp'}></Greeting> */}
        <UserGreeting></UserGreeting>
    </React.Fragment>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)