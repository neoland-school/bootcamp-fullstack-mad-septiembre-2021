function Home() {
    const History = ReactRouterDOM.useHistory();
    let user = JSON.parse(localStorage.getItem('userData'))
    let isLogged = JSON.parse(localStorage.getItem('sessionToken'))
    let userName = user.userName;

    function handleLogOut(){
        localStorage.removeItem('sessionToken')
        History.push('/page2')

    }

    return (
        <React.Fragment>
            {isLogged !== null ? <div className='home__container'>
           <h1>{`Hello ${userName}`}</h1><button className='log-out__button' onClick={handleLogOut}>log out</button>
           </div>
                : <h1>wrong username and/or passwords</h1>}
        </React.Fragment>
    )
}