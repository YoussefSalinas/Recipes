import React, {Fragment} from "react";
import "../assets/scss/RecetaDetalle.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faStar } from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";

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
    imagen,
    nombreUsuario,
    imagenUsuario
  } = receta;

  const reduceText = ( text, qty ) => {
    return (text.length > qty) ? `${text.substring(0, qty)}...` : text;
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
      <Card
        // onClick={() => {alert(`${nombre} seleccionada`)}}
      >
        <Card.Img
          className="cover"
          variant="top"
          src={imagen}
        />
        <Card.Body>
          <Row className="name">
            <Card.Title>{reduceText(nombre, 35)}</Card.Title>
          </Row>
          <Row className="info">
            <Col className="profile">
              <Row>
                <Col><Image src={imagenUsuario} roundedCircle /></Col>
                <Col><p>{nombreUsuario}</p></Col>
              </Row>
            </Col>
            <Col className="difficulty-category">
              <Row>
                <Col className="difficulty">{renderDifficulty()}</Col>
                <Card.Subtitle className="category">{capitalizeFirstLetter(categoria)}</Card.Subtitle>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>

  );
}
