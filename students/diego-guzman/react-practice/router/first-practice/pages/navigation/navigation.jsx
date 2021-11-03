class Navigation extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><ReactRouterDOM.Link to="/page1">Go to Page 1</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/page2">Go to Page 2</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/">Go to Home</ReactRouterDOM.Link></li>
                </ul>
            </nav>
        )
    }
}