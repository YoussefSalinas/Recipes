import React from 'react'
import * as Helpers from '../helpers/Helpers';
import "../assets/scss/Categorias.scss";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";

export function Categoria({ categoria }) {
  const { nombre, imagen } = categoria;

  return (
    <Col >
      <Card>
        <Card.Img
          className="cover"
          variant="top"
          src={imagen}
        />
        <Card.Body>
          <Row className="name">
            <Card.Title>{Helpers.capitalizeFirstLetter(nombre)}</Card.Title>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}
