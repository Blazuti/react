import React,{useState} from "react";
import Ledverde from "../imgs/ledVerde.png";
import Ledvermelho from "../imgs/ledVermelho.png";


export default function seção02(props){
   
    return(
        <>
        
        <img style={{width:'80px'}} src={props.liga?Ledverde:Ledvermelho} />
        <button onClick={()=>{
            props.setLiga(!props.liga)?{Ledverde}:{Ledvermelho}
            
        }}>{props.liga?'desligar':'ligar'}</button>
        </>
    )
}