import React from 'react';
import '../assets/scss/RecetaList.scss';

import { Container, CardDeck, CardGroup, CardColumns, Row, Carousel } from 'react-bootstrap';

import { RecetaDetalle } from './RecetaDetalle'

export function RecetaList({ recetas }) {
  return (
    <Container>
      <CardGroup>
        <h2 className="title">Nuevas recetas</h2>
        <Row>
          {recetas.map(( receta ) => (
            <RecetaDetalle key={receta.id} receta={receta} />
          ))}
        </Row>
      </CardGroup>
    </Container>
  )
}
