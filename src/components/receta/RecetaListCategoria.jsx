import React, { useState } from 'react'
import '../../assets/scss/receta/RecetaListCategoria.scss';
import * as Helpers from '../../helpers/Helpers';
import {
  Container,
  CardGroup,
  Row,
} from "react-bootstrap";

export function RecetaListCategoria({ titulo, recetas }) {
  return (
    <Container>
      <CardGroup>
        <h2 className="title">{titulo}</h2>
        <Row>
          { recetas.length > 0 && 
            recetas.map(( receta, index ) => (
              Helpers.renderRecetasCategoria(index, receta)
            ))
          }
        </Row>
      </CardGroup>
    </Container>
  )
}
