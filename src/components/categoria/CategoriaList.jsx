import React from 'react';
import '../../assets/scss/categoria/CategoriaList.scss';
import * as Helpers from '../../helpers/Helpers';
import { 
  Container, 
  CardGroup, 
  Row 
} from 'react-bootstrap';

export function CategoriaList({ titulo, categorias }) {
  return (
    <Container>
      <CardGroup>
        <h2 className="title">{titulo}</h2>
        <Row>
          { categorias.length > 0 && 
            categorias.map(( categoria, index ) => (
              Helpers.renderCategoriaHome(index, categoria)
            ))
          }
        </Row>
      </CardGroup>
    </Container>
  )
}
