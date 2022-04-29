import React from 'react'
import { ContainerItem } from './Container'
export const Item = ({imgName,projectName}) => {
  return (

        <ContainerItem>
            <img src={imgName} alt="" />  
            <h3>{projectName}</h3>  
        </ContainerItem>


  )
}
