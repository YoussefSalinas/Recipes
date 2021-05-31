import React, { useState } from 'react'
import '../../assets/styles/components/_recetaListCategoria.scss';
import * as Helpers from '../../helpers/Helpers';
import { Container, CardGroup, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';

export function RecetaListCategoria() {
  
  const { categoriaRecetas } = useParams();
  let titulo;
  let data;

  switch(categoriaRecetas) {
    case 'desayunos':
      titulo = 'Nuevos desayunos';
      data = Helpers.datosDesayunos();
      break;
    case 'comidas':
      titulo = 'Nuevas comidas';
      data = Helpers.datosComidas();
      break;
    case 'cenas':
      titulo = 'Nuevas cenas';
      data = Helpers.datosCenas();
      break;
  }

  return (
    <Container>
      <CardGroup>
        <h2 className="title">{titulo}</h2>
        <Row>
          { data.length > 0 && 
            data.map(( receta, index ) => (
              Helpers.renderRecetasCategoria(index, receta)
            ))
          }
        </Row>
      </CardGroup>
    </Container>
  )
}
