import React, {Fragment} from "react";
import "../assets/scss/RecetaDetalle.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faStar } from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Card } from "react-bootstrap";

export function RecetaDetalle({ receta }) {
  const { 
    id, 
    nombre, 
    categoria, 
    descripcion, 
    fechaCreacion,
    dificultad,
    porciones,
    tiempoPreparacion,
    tiempoCoccion,
    tiempoDescanso,
    utensilios,
    ingredientes,
    preparacion,
    imagen 
  } = receta;

  const reduceText = ( text, qty ) => {
    return (text.length > qty) ? `${text.substring(0, qty)} ...` : text;
  }

  const capitalizeFirstLetter = ( text ) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const renderDifficulty = () => {
    if (dificultad === "facil") {
      return <Fragment><FontAwesomeIcon icon={faStar} /></Fragment>
    } else if (dificultad === "medio") {
      return <Fragment><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></Fragment>
    } else if (dificultad === "dificil") {
      return <Fragment><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></Fragment>
    }
  }

  return (
    <Col xs={6} md={4}>
      <Card>
        <Card.Img
          variant="top"
          src={imagen}
        />
        <Card.ImgOverlay>
          <Card.Title>{reduceText(nombre, 35)}</Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Row>
            <Col>
              <Card.Subtitle>{capitalizeFirstLetter(categoria)}</Card.Subtitle>
            </Col>
            <Col className="difficulty">{renderDifficulty()}</Col>
          </Row>
          
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col className="time-preparation">
              <Row>
                <Col><h4>Preparación</h4></Col>
                <Col><p><span>{tiempoPreparacion}</span> min</p></Col>
                <Col><FontAwesomeIcon icon={faStopwatch} /></Col>
              </Row>
            </Col>
            <Col className="time-cooking">
              <Row>
                <Col><h4>Cocción</h4></Col>
                <Col><p><span>{tiempoCoccion}</span> min</p></Col>
                <Col><FontAwesomeIcon icon={faStopwatch} /></Col>
              </Row>
            </Col>
            <Col className="time-rest">
              <Row>
                <Col><h4>Descanso</h4></Col>
                <Col><p><span>{tiempoDescanso}</span> min</p></Col>
                <Col><FontAwesomeIcon icon={faStopwatch} /></Col>
              </Row>
            </Col>
          </Row>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
        <Card.Body>
          <Card.Link href="#">Ver detalles</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
