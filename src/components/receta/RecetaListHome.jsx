import React from 'react'
import '../../assets/scss/receta/RecetaListHome.scss';
import * as Helpers from '../../helpers/Helpers';
import { 
  Container,
  Row,
} from 'react-bootstrap';

export function RecetaListHome({ 
  titulo_desayunos,
  titulo_comidas,
  titulo_cenas, 
  desayunos,
  comidas,
  cenas
}) {
  return (
    <Container>
      <Row>
        { desayunos.length > 0 && Helpers.renderRecetasHome(titulo_desayunos, desayunos) }
        { comidas.length > 0 && Helpers.renderRecetasHome(titulo_comidas, comidas) }
        { cenas.length > 0 && Helpers.renderRecetasHome(titulo_cenas, cenas) }
      </Row>
    </Container>
  )
}
