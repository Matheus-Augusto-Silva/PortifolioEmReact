import React from 'react'
import { ContainerImg } from './ContainerSobre'

import jquery from '../../images/jquery.png'
import js from '../../images/js.png'
import node from '../../images/node.png'
import react from '../../images/react.png'
import sass from '../../images/sass.png'
import styled from '../../images/styled.png'
import ts from '../../images/ts.png'
import vue from '../../images/vue.png'

export const Images = () => {
  return (
      <ContainerImg>      
        <img src={jquery} alt={"Jquery"} />
        <img src={js} alt={"js"} />
        <img  className="node" src={node} alt={"node"} />
        <img src={react} alt={"react"} />
        <img src={sass} alt={"sass"} />
        <img src={styled} alt={"styled"} />
        <img src={ts} alt={"ts"} />
        <img src={vue} alt={"vue"} />
      </ContainerImg>

  )
}
