import React, { useEffect, useCallback, useState, Fragment } from "react";
import "../assets/scss/CardCarousel.scss";

import { Row, Col, Card, Button, Image, Carousel, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faStar } from "@fortawesome/free-solid-svg-icons";







export function CardCarousel() {

  const [recetas, setRecetas] = useState([
    {
      id: 1, 
      nombre: '1 - Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados', 
      categoria: 'desayunos',
      descripcion: 'Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo',
      fechaCreacion: '16/05/2021',
      dificultad: 'facil',
      porciones: 2,
      tiempoPreparacion: 0,
      tiempoCoccion: 30,
      tiempoDescanso: 0,
      utensilios: [
        { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
        { id: 2, cantidad: 1, utensilio: "Parrilla"}
      ],
      ingredientes: [
        { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
        { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
        { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
      ],
      preparacion: [
        { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
        { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
      ],
      imagen: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      nombreUsuario: 'Youssef',
      imagenUsuario: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg'
    },
    {
      id: 2,
      nombre: '2 - Comidas',
      categoria: 'comidas',
      descripcion: 'Descripción del platillo',
      fechaCreacion: '16/05/2021',
      dificultad: 'medio',
      porciones: 2,
      tiempoPreparacion: 0,
      tiempoCoccion: 30,
      tiempoDescanso: 0,
      utensilios: [
        { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
        { id: 2, cantidad: 1, utensilio: "Parrilla"}
      ],
      ingredientes: [
        { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
        { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
        { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
      ],
      preparacion: [
        { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
        { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
      ],
      imagen: 'https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
      nombreUsuario: 'Youssef',
      imagenUsuario: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg'
    },
    {
      id: 3,
      nombre: '3 - Cenas',
      categoria: 'cenas',
      descripcion: 'Descripción del platillo',
      fechaCreacion: '16/05/2021',
      dificultad: 'dificil',
      porciones: 2,
      tiempoPreparacion: 0,
      tiempoCoccion: 30,
      tiempoDescanso: 0,
      utensilios: [
        { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
        { id: 2, cantidad: 1, utensilio: "Parrilla"}
      ],
      ingredientes: [
        { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
        { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
        { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
      ],
      preparacion: [
        { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
        { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
      ],
      imagen: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
      nombreUsuario: 'Ana',
      imagenUsuario: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    },
    {
      id: 4, 
      nombre: '4 - Desayunos', 
      categoria: 'desayunos',
      descripcion: 'Descripción del platillo',
      fechaCreacion: '16/05/2021',
      dificultad: 'facil',
      porciones: 2,
      tiempoPreparacion: 0,
      tiempoCoccion: 30,
      tiempoDescanso: 0,
      utensilios: [
        { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
        { id: 2, cantidad: 1, utensilio: "Parrilla"}
      ],
      ingredientes: [
        { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
        { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
        { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
      ],
      preparacion: [
        { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
        { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
      ],
      imagen: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      nombreUsuario: 'Ana',
      imagenUsuario: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    },
    {
      id: 5,
      nombre: '5 - Comidas',
      categoria: 'comidas',
      descripcion: 'Descripción del platillo',
      fechaCreacion: '16/05/2021',
      dificultad: 'facil',
      porciones: 2,
      tiempoPreparacion: 0,
      tiempoCoccion: 30,
      tiempoDescanso: 0,
      utensilios: [
        { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
        { id: 2, cantidad: 1, utensilio: "Parrilla"}
      ],
      ingredientes: [
        { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
        { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
        { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
      ],
      preparacion: [
        { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
        { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
      ],
      imagen: 'https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
      nombreUsuario: 'Youssef',
      imagenUsuario: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg'
    },
    {
      id: 6,
      nombre: '6 - Cenas',
      categoria: 'cenas',
      descripcion: 'Descripción del platillo',
      fechaCreacion: '16/05/2021',
      dificultad: 'medio',
      porciones: 2,
      tiempoPreparacion: 0,
      tiempoCoccion: 30,
      tiempoDescanso: 0,
      utensilios: [
        { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
        { id: 2, cantidad: 1, utensilio: "Parrilla"}
      ],
      ingredientes: [
        { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
        { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
        { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
      ],
      preparacion: [
        { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
        { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
      ],
      imagen: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
      nombreUsuario: 'Ana',
      imagenUsuario: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    }
  ]);

  const cardItems = [
    {
      id: 1,
      title: "Stacked Card Carousel",
      copy:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est."
    },
    {
      id: 2,
      title: "Second Item",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      title: "A Third Card",
      copy:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla."
    },
    {
      id: 4,
      title: "Fourth",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  const reduceText = ( text, qty ) => {
    return (text.length > qty) ? `${text.substring(0, qty)}...` : text;
  }

  const capitalizeFirstLetter = ( text ) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const renderDifficulty = ( difficulty ) => {
    switch ( difficulty ) {
      case 'facil':
        return <Fragment><FontAwesomeIcon icon={faStar} /></Fragment>;
      case 'medio':
        return <Fragment><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></Fragment>;
      case 'dificil':
        return <Fragment><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></Fragment>;
    }
  }

  const [indexes, setIndexes] = useState({
    previousIndex: recetas.length - 1,
    currentIndex: 0,
    nextIndex: 1,
    action: 'right'
  });

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= recetas.length - 1) {
      setIndexes({
        previousIndex: recetas.length - 1,
        currentIndex: 0,
        nextIndex: 1,
        action: 'right'
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === recetas.length ? 0 : prevState.currentIndex + 2,
        action: 'right'
      }));
    }
  }, [indexes.currentIndex]);

  const handleReverseCardTransition = useCallback(() => {
    console.log(`Previous #${indexes.previousIndex}`);
    console.log(`Current #${indexes.currentIndex}`);
    console.log(`Next #${indexes.nextIndex}`);

    if (indexes.currentIndex == 0) {
      setIndexes({
        previousIndex: 0,
        currentIndex: recetas.length - 1,
        nextIndex: recetas.length - 2,
        action: 'left'
      });
    } else {
      
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex - 1 === 0 ? 5 : prevState.currentIndex - 2,
        action: 'left'
      }));
    }
  }, [indexes.currentIndex]);

  function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex && indexes.action === 'right') {
      return "active right";
    } else if (indexes.currentIndex === cardIndex && indexes.action === 'left') {
      return "active left";
    } else if (indexes.nextIndex === cardIndex && indexes.action === 'right') {
      return "next right";
    } else if (indexes.nextIndex === cardIndex && indexes.action === 'left') {
      return "next left";
    } else if (indexes.previousIndex === cardIndex && indexes.action === 'right') {
      return "prev right";
    } else if (indexes.previousIndex === cardIndex && indexes.action === 'left') {
      return "prev left";
    }
    return "inactive";
  }

  // useEffect(() => {
  //  const transitionInterval = setInterval(() => {
  //    handleCardTransition();
  //  }, 4000);

  //  return () => clearInterval(transitionInterval);
  // }, [handleCardTransition, indexes]);

  return (
    <Container>
      <button onClick={handleReverseCardTransition}>Transition to Back</button>
      <button onClick={handleCardTransition}>Transition to Next</button>
      <ul className="card-carousel">
      {/* <Col xs={6} md={4} className="mb-10 pb-10"> */}
        {/* {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`cardd ${determineClasses(indexes, index)}`}
          >
            <h2>{card.title}</h2>
            <p>{card.copy}</p>
          </li>
        ))} */}

        {recetas.map((card, index) => (
          <li
            key={card.id}
            className={`cardd ${determineClasses(indexes, index)}`}
          >
            <Card className="li-card">
              <Card.Img
                className="cover"
                variant="top"
                src={card.imagen}
              />
              <Card.Body>
                <Row className="name">
                  <Card.Title>{reduceText(card.nombre, 35)}</Card.Title>
                  {/* <Card.Title>Previous: {indexes.previousIndex}</Card.Title>
                  <Card.Title>Current: {indexes.currentIndex}</Card.Title>
                  <Card.Title>Next: {indexes.nextIndex}</Card.Title>
                  <Card.Title>Length: {recetas.length}</Card.Title> */}
                </Row>
                <Row className="info">
                  <Col className="profile">
                    <Row>
                      <Col><Image src={card.imagenUsuario} roundedCircle /></Col>
                      <Col><p>{card.nombreUsuario}</p></Col>
                    </Row>
                  </Col>
                  <Col className="difficulty-category">
                    <Row>
                      <Col className="difficulty">{renderDifficulty(card.dificultad)}</Col>
                      <Card.Subtitle className="category">{capitalizeFirstLetter(card.categoria)}</Card.Subtitle>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </li>
        ))}

{/* </Col> */}
      </ul>
    </Container>
  );
};

