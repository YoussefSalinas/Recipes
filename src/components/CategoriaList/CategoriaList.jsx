import React from 'react';
import '../../assets/styles/components/_categoriaList.scss';
import * as Helpers from '../../helpers/Helpers';
import { Container, CardGroup, Row } from 'react-bootstrap';

export function CategoriaList() {

  let titulo = 'Categorías';
  let data = Helpers.datosCategorias();

  return (
    <Container>
      <CardGroup>
        <h2 className="title">{titulo}</h2>
        <Row>
          { data.length > 0 && 
            data.map(( categoria, index ) => (
              Helpers.renderCategoriaHome(index, categoria)
            ))
          }
        </Row>
      </CardGroup>
    </Container>
  )
}
