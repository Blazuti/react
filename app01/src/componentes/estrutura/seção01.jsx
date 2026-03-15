import React, { useState } from "react";

export default function seção01(props){
    
    let [num, setNum] = useState(0)   
    const decrementar = ()=>{
        setNum(num + 1);
    }
   
    return(
        <>
        <p>youtube:{props.youtube}</p>
        <p>curso:{props.curso()}</p>
        <p>{num}</p>
        
        <button onclick={decrementar}> decrementa</button>
        </>
    )
}