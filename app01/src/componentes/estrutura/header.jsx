import React from "react";
import imagemCabaçalho from "../imgs/background002.jpg";
export default function header(){
    return(
        <header>
            <h1>
                Importando Elementos React
            </h1>
            <img src={imagemCabaçalho}/>
        </header>
    )
}