import React from "react"
import { useHistory } from "react-router";



function PrivatePage() {

    const email = JSON.parse(sessionStorage.getItem('user'));
    const history = useHistory();

   function handleSubmit(e){
    const info = e.target.messageInput.value;
    history.push(`/private-message?username=${email}&${e.target.messageInput.name}=${info}`)
}
    
 

    return (
        <React.Fragment>
            <h1>hello {email}</h1>
            <form onSubmit={handleSubmit}>
                <input name= 'messageInput' placeholder= 'say something'></input>
                <button type='submit'>send</button>
            </form>

        </React.Fragment>
    )
}

export default PrivatePage