import React from "react";

export default function Dados(props){
    const cn=()=>{
        return 'CFB Cursos'
    }
    return(
        <>
        <p>Canal:{props.cn}</p>
        <p>Youtube:{props.youtube}</p>
        <p>Curso:{props.curso}</p>
        </>
    )
}