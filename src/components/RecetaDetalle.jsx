import React from "react";
import "../assets/scss/RecetaDetalle.scss";

import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

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

  return (
    <Col xs={6} md={4}>
      <Card>
        <Card.Img
          variant="top"
          src={imagen}
        />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Fecha de creación: {fechaCreacion}</Card.Subtitle>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Categoría: {categoria}</ListGroupItem>
          <ListGroupItem>Dificultad: {dificultad}</ListGroupItem>
          <ListGroupItem>{porciones} porciones</ListGroupItem>
          <ListGroupItem>Tiempo de preparación: {tiempoPreparacion} min</ListGroupItem>
          <ListGroupItem>Tiempo de cocción: {tiempoCoccion} min</ListGroupItem>
          <ListGroupItem>Tiempo de descanso: {tiempoDescanso} min</ListGroupItem>
          {/* <ListGroupItem>Ingredientes</ListGroupItem>
          {ingredientes.map((ingrediente) => (
            <>
              <ListGroupItem key={ingrediente.ingrediente}>{ingrediente.cantidad} {ingrediente.tipo} {ingrediente.ingrediente}</ListGroupItem>
            </>
          ))}
          <ListGroupItem>Preparación</ListGroupItem>
          {preparacion.map((paso) => (
            <>
              <ListGroupItem key={paso.numeroPaso}>Paso {paso.numeroPaso}</ListGroupItem>
              <ListGroupItem>{paso.paso}</ListGroupItem>
            </>
          ))} */}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Ver detalles</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
