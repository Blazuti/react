import React from "react";
import Header from "./componentes/estrutura/cabeçalho";
import Corpo from "./componentes/estrutura/corpo"
import Seção from "./componentes/estrutura/seção"



export default function app(){
  
  return(
    <>
      <Header/>
      <Corpo/>
      <Seção/>
    </>
  )
}
