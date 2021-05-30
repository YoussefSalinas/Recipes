import React from 'react';
import '../../assets/scss/categoria/CategoriaList.scss';
import { 
  Container, 
  CardGroup, 
  Row 
} from 'react-bootstrap';
import { Categoria } from './Categoria';

export function CategoriaList({ titulo, categorias }) {
  return (
    <Container>
      <CardGroup>
        <h2 className="title">{titulo}</h2>
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
