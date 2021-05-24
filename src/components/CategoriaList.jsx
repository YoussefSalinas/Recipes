import React from 'react'
import '../assets/scss/CategoriaList.scss';

import { Container, CardDeck, CardGroup, CardColumns, Row } from 'react-bootstrap';

import { Categoria } from './Categoria';

export function CategoriaList({ categorias }) {
  return (
    <Container className="categorias">
      <CardGroup>
        <h2 className="title">Nuevas categorías</h2>
        <Row>
          {categorias.map(( categoria, index ) => (
            <Categoria
              key={index} 
              categoria={categoria} 
            />
          ))}
        </Row>
      </CardGroup>
    </Container>
  )
}
