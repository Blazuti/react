import React from "react";
import Header from "./componentes/estrutura/header";
import Corpo from "./componentes/estrutura/corpo";
import Dados from "./componentes/estrutura/dados"

export default function app(){
  return(
    <>
      <Header/>
      <Corpo/>
      <Dados
        curso=' React'
        youtube=' youtube.com/cfbCursos'
        canal={canal()}
      />
    </>
  )
}
