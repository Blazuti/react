import React from "react";
import foto01 from './componentes/imgs/background001.jpg'
import foto02 from './componentes/imgs/background002.jpg'


export default function app(){
  const imagem=()=>{
    return <img src={foto01} alt="" />
  }

  return(
    <>
     {imagem()}
     <img src={foto02} alt="" />
    </>
  )
}
