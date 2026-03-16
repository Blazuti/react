import React,{useState} from "react";
import Header from "./componentes/estrutura/cabeçalho";
import Corpo from "./componentes/estrutura/corpo"
import Seção from "./componentes/estrutura/seção"
import Footer from "./componentes/estrutura/footer"
import Seção02 from "./componentes/estrutura/seção02"

export default function app(){
  
  return(
    <>
      <Header/>
      <Corpo/>
      <Seção/>
      <Seção02/>
      <Footer/>
    </>
  )
}
