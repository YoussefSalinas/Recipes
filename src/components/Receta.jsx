import React, { useEffect, useCallback, useState, Fragment } from 'react';
import "../assets/scss/Receta.scss";
import * as Helpers from '../helpers/Helpers';
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Carousel,
  Container,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export function Receta({ titulo, receta }) {
  const { id, nombre, imagen, imagenUsuario, nombreUsuario, dificultad, categoria } = receta;

  const [indexes, setIndexes] = useState({
    // previousIndex: recetas.length - 1,
    previousIndex: 6 - 1,
    currentIndex: 0,
    nextIndex: 1,
    action: "right",
  });

  const handleCardTransition = useCallback(() => {
    // if (indexes.currentIndex >= recetas.length - 1) {
    if (indexes.currentIndex >= 5) {
      setIndexes({
        // previousIndex: recetas.length - 1,
        previousIndex: 6 - 1,
        currentIndex: 0,
        nextIndex: 1,
        action: "right",
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          // prevState.currentIndex + 2 === recetas.length
          prevState.currentIndex + 2 === 6
            ? 0
            : prevState.currentIndex + 2,
        action: "right",
      }));
    }
  }, [indexes.currentIndex]);

  const handleReverseCardTransition = useCallback(() => {
    if (indexes.currentIndex == 0) {
      setIndexes({
        previousIndex: 0,
        // currentIndex: recetas.length - 1,
        currentIndex: 6 - 1,
        // nextIndex: recetas.length - 2,
        nextIndex: 6 - 2,
        action: "left",
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        nextIndex:
          prevState.currentIndex - 1 === 0 ? 5 : prevState.currentIndex - 2,
        action: "left",
      }));
    }
  }, [indexes.currentIndex]);

  return (
    <Fragment>
      <h3 className="title">Nuevas recetas {titulo}</h3>
      <ul className="card-carousel">
        <li
          key={id}
          // className={`cardd ${Helpers.determineClasses(indexes, index)}`}
          // onClick={(`${Helpers.determineClasses(indexes, index)}` == 'active right' 
          //   || `${Helpers.determineClasses(indexes, index)}` == 'active left') 
          //   ? () => console.log(card.nombre)
          //   : undefined
          // }
        >
          <Card className="li-card">
            <Card.Img className="cover" variant="top" src={imagen} />
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
        </li>
      </ul>
      <Row className="controls">
        <Col>
          <Button onClick={handleReverseCardTransition}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
        </Col>
        <Col>
          <Button onClick={handleCardTransition}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}
