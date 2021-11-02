class LinksComp extends React.Component{

    render(){
        return (
            <div>
            <ul>
                <li><ReactRouterDOM.Link to="/Rick-and-Morty">Rick and Morty</ReactRouterDOM.Link></li>
                <li><ReactRouterDOM.Link to="/">Main</ReactRouterDOM.Link></li>
            </ul>
            </div>
        )
    }

}