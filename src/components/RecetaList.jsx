import React from 'react';
import '../assets/scss/RecetaList.scss';

import { Container, CardDeck, CardGroup, CardColumns, Row } from 'react-bootstrap';

import { RecetaDetalle } from './RecetaDetalle'

import Carousel from 'react-elastic-carousel';

export function RecetaList({ recetas }) {

  return (
    <Container className="nuevas-recetas">
      <CardGroup>
        <h2 className="title">Nuevas recetas</h2>
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
