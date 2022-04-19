import React from 'react'
import { Container } from './ContainerSobre'
import sobre from '../../images/sobremim.jpg'
import { Images } from './Imagens'

export const Sobre = () => {
  return (
    <Container id="sobre">
      <div className="sobre-mim">
        <h1>Sobre mim</h1>
        <div style={{display: 'flex'}}>
          
         
          <p className="sobre">
          <img src={sobre} alt="sobre" />
            Natural de Belo Horizonte - MG, encontrei no 
          mundo do desenvolvimento web minha verdadeira paixão. Meu foco é desenvolver
          o Front-end das aplicações, usando as mais variadas tecnologias disponíveis no mercado.
          Até meus 28 anos de idade, me via na área de tecnologia mais como "curioso", já que 
          tinha uma carreira bem sólida no setor administrativo, de mais de 12 anos de empresa (sendo 5 anos como gestor administrativo), fato
          que fez sempre com que eu me mantivesse na "zona de conforto". Porém, no final de 2020 após muito conversar
          com minha esposa e pedir direção a Deus, optei por "me jogar" de cabeça no mundo do desenvolvimento que sempre foi
          meu sonho, e hoje atuo como analista desenvolvedor de sistemas.
          </p>
        </div>
        {/* talvez eu coloque no futuro */}
        {/* <a  className="curriculo" href="">Meu Curriculo Vitae</a> */}
        
      </div>
      <div className="skills">
        <h1>Minhas Skills</h1>
          <Images/>
      </div>
    </Container>
  )
}
