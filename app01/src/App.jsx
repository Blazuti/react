import React,{useState} from "react";
import Header from "./componentes/estrutura/cabeçalho";
import Corpo from "./componentes/estrutura/corpo"
import Seção from "./componentes/estrutura/seção"
import Footer from "./componentes/estrutura/footer"
import Seção02 from "./componentes/estrutura/seção02"
import Login from "./componentes/estrutura/login"

export default function app(){
   const [liga, setLiga]=useState(false)
  return(
    <>
      <Header/>
      <Login/>
      <Corpo/>
      <Seção/>
      <Seção02
      liga = {liga}
      setLiga = {setLiga}/>
      <Footer/>
    </>
  )
}
