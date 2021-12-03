
import React from "react"
import { useLocation } from "react-router";

function UserMessagePage(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get('messageInput');
    const username = searchParams.get('username');
    
    
    return(<React.Fragment>
        <h1>{username} </h1>
        <h2>says: {message}</h2>
        </React.Fragment>
    )
}

export default UserMessagePage