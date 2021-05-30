import React from 'react'
import '../../assets/scss/receta/RecetaList.scss';
import { 
  Container,
  Row,
} from 'react-bootstrap';
import { Receta } from './Receta';

export function RecetaList({ 
  titulo_desayunos,
  titulo_comidas,
  titulo_cenas, 
  desayunos,
  comidas,
  cenas
}) {

  const renderRecetas = (titulo, recetas) => {
    return (
      <Receta
        titulo = {titulo}
        recetas = {recetas} 
      />
    )
  }

  return (
    <Container>
      <Row>
        { desayunos.length > 0 && renderRecetas(titulo_desayunos, desayunos) }
        { comidas.length > 0 && renderRecetas(titulo_comidas, comidas) }
        { cenas.length > 0 && renderRecetas(titulo_cenas, cenas) }
      </Row>
    </Container>
  )
}
