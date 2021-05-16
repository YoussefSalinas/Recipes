import React from 'react';
import '../assets/scss/RecetaList.scss';

import { Container, CardDeck, CardGroup, CardColumns, Row } from 'react-bootstrap';

import { RecetaDetalle } from './RecetaDetalle'

export function RecetaList({ recetas }) {
  return (
    <Container>
      <CardGroup>
        <Row>
          {recetas.map(( receta ) => (
            <RecetaDetalle key={receta.id} receta={receta} />
          ))}
        </Row>
      </CardGroup>
    </Container>
  )
}
