function Header(){
    return(
        <header>
            <div className='menu_container'>
                <ReactRouterDOM.Link to='/registro'>Registro</ReactRouterDOM.Link>
            </div>
            <div className='menu_container'>
                <ReactRouterDOM.Link to='/login'>Login</ReactRouterDOM.Link>
            </div>
            <div className='menu_container'>
                <ReactRouterDOM.Link to='/'>Home</ReactRouterDOM.Link>
            </div>
        </header>
    )
}