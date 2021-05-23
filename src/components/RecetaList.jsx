import React from 'react';
import '../assets/scss/RecetaList.scss';

import { Container, CardDeck, CardGroup, CardColumns, Row } from 'react-bootstrap';

import { RecetaDetalle } from './RecetaDetalle'

import Carousel from 'react-elastic-carousel';

export function RecetaList({ recetas }) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  return (
    <Container>
      <CardGroup>
        <h2 className="title">Nuevas recetas</h2>
          <Carousel breakPoints={breakPoints}>
        <Row>
            {recetas.map(( receta, index ) => (
              <RecetaDetalle 
                key={receta.id} 
                receta={receta} 
              />
            ))}
        </Row>
          </Carousel>
      </CardGroup>
    </Container>
  )
}
