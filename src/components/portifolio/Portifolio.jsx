import React from 'react'
import { Container} from './Container'
import Carousel from "react-elastic-carousel";
import { Item } from './Item';
import imc from '../../images/imc.PNG'
import coca from '../../images/coca.JPG'
import ninja from '../../images/ninja.PNG'
import dogz from '../../images/dogz.PNG'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
//
export const Portifolio = () => {
  return (
    <Container id='portifolio'>
      <h1>Portifólio</h1>
      <Carousel className='caroussel' breakPoints={breakPoints}>
          <a href="https://dogz.netlify.app/" target="_blank">
            <Item imgName={dogz} projectName={"Dogs-Consumindo API"}/>
          </a>
          <a href="https://matheus-augusto-silva.github.io/Projeto-IMC/" target="_blank">
            <Item imgName={imc} projectName={"Calculador de IMC"}/>
          </a>
          <a href="https://matheus-augusto-silva.github.io/Landing-Page-Coca-Brasil/" target="_blank" >
            <Item imgName={coca} projectName={"Landing Page Coca-Cola"}/>
          </a>
          <a href="https://matheus-augusto-silva.github.io/Ninja-Fingers/" target="_blank" >
            <Item imgName={ninja} projectName={"Ninja Fingers"}/>
          </a>
      </Carousel>

    </Container>
  )
}
