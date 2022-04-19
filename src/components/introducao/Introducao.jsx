import React from 'react'
import { ContainerIntro } from './ContainerIntro'
import backgroundImg from '../../images/programing2.gif'
import { Menu } from './Menu'
import { Contato } from './Contato'
export const Introducao = () => {
  return (
    
    <ContainerIntro  id="home">
       <div className="container-intro"> 
        <div className="data-content">
            <h2 >Olá, meu nome é</h2>
            <h1 >Matheus Augusto</h1>
            <p>
              E sou um desenvolvedor Front-end.
            </p>
          </div>
          <img className="background" src={backgroundImg} alt="background" />
        </div>
        <nav>
          <Menu/>
          <Contato/>
        </nav>
    </ContainerIntro>
  )
}
