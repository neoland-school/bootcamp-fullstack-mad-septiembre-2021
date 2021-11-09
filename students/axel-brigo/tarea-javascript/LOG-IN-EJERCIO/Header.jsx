function Header() {



    return (
        <div className="theHeader">
            <ul>

                <li><ReactRouterDOM.Link to="/page1">REGISTER</ReactRouterDOM.Link></li>
                <li><a href="">LOGIN</a> </li>
                <li><a href="">HOME</a> </li>
            </ul>
        </div>
    )
}

