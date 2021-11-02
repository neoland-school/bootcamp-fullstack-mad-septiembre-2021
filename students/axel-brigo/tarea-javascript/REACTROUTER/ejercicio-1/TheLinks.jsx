class TheLinks extends React.Component {

    render() {
        return (
            <div className="losLinks">
                <ul>
                    <li><ReactRouterDOM.Link to="/pokemon">Pokemon</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/RickYMorty">Rick</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link></li>
                </ul>
            </div>
        )
    }


}