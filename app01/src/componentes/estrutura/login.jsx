import React,{useState} from "react";


export default function login(){
    const [login, setLogin]= useState(false)
    console.log(login)
    return(
        <>
            <h3>{login?'Acessou':'Acessar'}</h3>
            <input type="button" value={login?'logout':'Login'} onClick={()=>{
                setLogin(!login)
            }} />
        </>
    )
}