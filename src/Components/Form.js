import { useState,useEffect } from "react";
import { renderIntoDocument } from "react-dom/test-utils";


const FormData =() =>{
    const [validInput, setValidInput] =useState(false)
    
    const [crenditials, setCrenditials] =useState({
      emailId:'',
      password:''  
    })


    useEffect(()=>{
        if(crenditials.emailId && crenditials.password){
           setValidInput(true);
        }

    },[crenditials.emailId,  crenditials.password])


    
    useEffect(()=>{
        if(crenditials.emailId ){
           
        }
        
    },[crenditials.emailId])

    const inputHandler =(event) =>{
        console.log(event);
        let value = event.target.value ;
        let key = event.target.id;
        setCrenditials((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    }

    return(
      <form>
        <label>Email-Id</label>
        <input id='emailId' onChange={inputHandler} type='text' 
                placeholder=" Please Enter UserName" value = {crenditials.emailId} />
        <label>password</label>
        <input id="password" onChange={inputHandler} type='number' 
                placeholder="Enter password" value = {crenditials.password}/>
        <button disabled={!validInput}>submit</button>
      </form>
    )
}
export default FormData;
