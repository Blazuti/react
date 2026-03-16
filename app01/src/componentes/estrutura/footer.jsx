import React, {useState} from "react";

export default function Footer(){
    const [num, setNum]=useState(0);
    
    return(
        <>
        <h2>Testanto incremento com setState</h2>
        <p>Valor state num {num}</p>
        <button onClick={()=>{setNum(num+50)}}>botão envia 50</button>
    </>
    )
}