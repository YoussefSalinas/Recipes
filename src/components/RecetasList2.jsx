import React from 'react'
import '../assets/scss/RecetaList2.scss';
import { 
  Container,
  CardGroup,
  Row 
} from 'react-bootstrap';
import { Receta } from './Receta';

export function RecetasList2({ titulo, recetas }) {
  return (
    <Container className="nuevas-recetas">
      <CardGroup>
        <h2 className="title">Nuevas recetas</h2>
        <Row>
          {recetas.map(( receta, index ) => (
            <Receta 
              key={index} 
              titulo={titulo}
              receta={receta} 
            />
          ))}
        </Row>
      </CardGroup>
    </Container>
  )
}
