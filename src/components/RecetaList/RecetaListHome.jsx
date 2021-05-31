import React from 'react'
import '../../assets/styles/components/_recetaListHome.scss';
import * as Helpers from '../../helpers/Helpers';
import { Container, Row } from 'react-bootstrap';

export function RecetaListHome() {

  const tituloDesayunos = 'Nuevos desayunos';
  const tituloComidas = 'Nuevas comidas';
  const tituloCenas = 'Nuevas cenas';
  const dataDesayunos = Helpers.datosDesayunos();
  const dataComidas = Helpers.datosComidas();
  const dataCenas = Helpers.datosCenas();

  return (
    <Container>
      <Row>
        { dataDesayunos.length > 0 && Helpers.renderRecetasHome(tituloDesayunos, dataDesayunos) }
        { dataComidas.length > 0 && Helpers.renderRecetasHome(tituloComidas, dataComidas) }
        { dataCenas.length > 0 && Helpers.renderRecetasHome(tituloCenas, dataCenas) }
      </Row>
    </Container>
  )
}
