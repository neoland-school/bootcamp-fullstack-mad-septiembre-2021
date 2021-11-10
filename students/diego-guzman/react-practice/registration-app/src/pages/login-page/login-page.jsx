import React from "react"
import { useHistory } from "react-router";


function LoginPage(){
    const history = useHistory();

   function handleSubmit(e){
       e.preventDefault();
    let info = e.target.emailInput.value;
       sessionStorage.setItem('user', JSON.stringify(info));
       history.push('/private')
       
    }
    


    return(
        <form onSubmit={handleSubmit}> 
            <input name='emailInput' type='email' placeholder='enter your email'></input>
            <button type='submit'>login</button>
        </form>
    )
}

export default LoginPage