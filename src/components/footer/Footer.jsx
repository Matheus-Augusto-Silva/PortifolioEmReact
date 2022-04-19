import React from 'react'
import { ContainerFooter } from './ContainerFooter'
import react from '../../images/react.png'

export const Footer = () => {
  return (
    <ContainerFooter>
      <h3>Site desenvolvido em <img src={react} alt="react"/>por Matheus Augusto Rocha Silva</h3> 
    </ContainerFooter>
  )
}
