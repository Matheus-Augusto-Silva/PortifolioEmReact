import React from 'react'
import { ContainerItem } from './Container'
export const Item = ({name}) => {
  return (

        <ContainerItem>
            <img src={name} alt="" />  
            <h3>Nome do Projeto</h3>  
        </ContainerItem>


  )
}
