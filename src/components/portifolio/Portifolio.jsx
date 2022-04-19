import React from 'react'
import { Container} from './Container'
import Carousel from "react-elastic-carousel";
import { Item } from './Item';
import dtmoney from '../../images/dtmoney.PNG'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Portifolio = () => {
  return (
    <Container id='portifolio'>
      <h1>Portifólio</h1>
      <Carousel className='caroussel' breakPoints={breakPoints}>
          <Item name={dtmoney}/>
          <Item name={dtmoney}/>
          <Item name={dtmoney}/>
          <Item name={dtmoney}/>
          <Item name={dtmoney}/>
          <Item name={dtmoney}/>
      </Carousel>

    </Container>
  )
}
