import React from 'react';
import "../../assets/styles/components/_categoria.scss";
import * as Helpers from '../../helpers/Helpers';
import {
  Row,
  Col,
  Card
} from "react-bootstrap";

export function Categoria({ categoria }) {
  const { nombre, imagen } = categoria;

  return (
    <Col className="categoria">
      <Card>
        <Card.Img
          variant="top"
          src={imagen}
        />
        <Card.Body>
          <Row className="name">
            {/* <Card.Title>{Helpers.capitalizeFirstLetter(nombre)}</Card.Title> */}
            <Card.Title>{nombre}</Card.Title>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}
