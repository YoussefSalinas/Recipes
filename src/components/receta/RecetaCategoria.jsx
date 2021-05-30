import React from "react";
import "../../assets/scss/receta/Receta.scss";
import "../../assets/scss/receta/RecetaCategoria.scss";
import * as Helpers from '../../helpers/Helpers';
import {
  Row,
  Col,
  Card,
  Button,
  Image,
} from "react-bootstrap";

export function RecetaCategoria({ receta }) {
  const { nombre, imagen, imagenUsuario, nombreUsuario, dificultad, categoria } = receta;

  return (
    <Col xs={12} md={6} lg={4} className="receta receta_categoria">
      <Card>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Row className="name">
            <Card.Title>{Helpers.reduceText(nombre, 35)}</Card.Title>
          </Row>
          <Row className="info">
            <Col className="profile">
              <Row>
                <Col>
                  <Image src={imagenUsuario} roundedCircle />
                </Col>
                <Col>
                  <p>{nombreUsuario}</p>
                </Col>
              </Row>
            </Col>
            <Col className="difficulty-category">
              <Row>
                <Col className="difficulty">
                  {Helpers.renderDifficulty(dificultad)}
                </Col>
                <Card.Subtitle className="category">
                  {Helpers.capitalizeFirstLetter(categoria)}
                </Card.Subtitle>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
