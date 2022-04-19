import React from 'react'
import { Container } from './ContainerContato'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import instagram from '../../images/instagram.png'
import whattsapp from '../../images/whattsapp.png'

export const Contato = () => {
  return (
    <Container id="contato">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/matheus-augusto-29b39b2b/" target="_blank">
              <img class="icones detalhes-contato" src={linkedin} alt="linkedin"/></a>
          </li>
          <li>
            <a href="https://github.com/Matheus-Augusto-Silva" target="_blank">
              <img class="icones detalhes-contato" src={github} alt="github"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/matheuzin90/" target="_blank">
              <img class="icones detalhes-contato" src={instagram} alt="instagram"/>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5531993872439" target="_blank">
              <img class="icones detalhes-contato" src={whattsapp} alt="whatsapp"/>
            </a>
          </li>
        </ul>
    </Container>
  )
}
