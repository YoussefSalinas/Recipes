import React, { useCallback, useState } from 'react'
import "../../assets/scss/receta/Receta.scss";
import * as Helpers from '../../helpers/Helpers';
import {
  Row,
  Col,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export function Receta({ titulo, recetas }) {

  const [indexes, setIndexes] = useState({
    previousIndex: recetas.length - 1,
    currentIndex: 0,
    nextIndex: 1,
    action: "right",
  });

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= recetas.length - 1) {
      setIndexes({
        previousIndex: recetas.length - 1,
        currentIndex: 0,
        nextIndex: 1,
        action: "right",
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === recetas.length
            ? 0
            : prevState.currentIndex + 2,
        action: "right",
      }));
    }
  }, [indexes.currentIndex]);

  const handleReverseCardTransition = useCallback(() => {
    if (indexes.currentIndex === 0) {
      setIndexes({
        previousIndex: 0,
        currentIndex: recetas.length - 1,
        nextIndex: recetas.length - 2,
        action: "left",
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        nextIndex:
          prevState.currentIndex - 1 === 0 ? recetas.length - 1 : prevState.currentIndex - 2,
        action: "left",
      }));
    }
  }, [indexes.currentIndex]);

  const renderControls = () => {
    return (
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
    )
  }

  return (
    <Col className="receta">
      <h3 className="title">{titulo}</h3>
      <ul>
        {recetas.map((card, index) => (
          <li
            key={card.id}
            className={`${Helpers.determineClasses(indexes, index)}`}
            onClick={(`${Helpers.determineClasses(indexes, index)}` === 'active right' 
              || `${Helpers.determineClasses(indexes, index)}` === 'active left') 
              ? () => console.log(card.nombre)
              : undefined
            }
          >
            <Card>
              <Card.Img variant="top" src={card.imagen} />
              <Card.Body>
                <Row className="name">
                  <Card.Title>{Helpers.reduceText(card.nombre, 35)}</Card.Title>
                </Row>
                <Row className="info">
                  <Col className="profile">
                    <Row>
                      <Col>
                        <Image src={card.imagenUsuario} roundedCircle />
                      </Col>
                      <Col>
                        <p>{card.nombreUsuario}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="difficulty-category">
                    <Row>
                      <Col className="difficulty">
                        {Helpers.renderDifficulty(card.dificultad)}
                      </Col>
                      <Card.Subtitle className="category">
                        {Helpers.capitalizeFirstLetter(card.categoria)}
                      </Card.Subtitle>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      {renderControls()}
    </Col>
  )
}
