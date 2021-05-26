import React, { useState } from 'react';
import '../assets/scss/Home.scss';

import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { RecetaList } from './RecetaList';

import Carousel from 'react-elastic-carousel';
import { Card } from './Card';
import { CardCarousel } from './CardCarousel';
import { CategoriaList } from './CategoriaList';

export function Home() {
  const [recetas, setRecetas] = useState([
    {
      id: 1, 
      nombre: 'Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados', 
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
      nombre: 'Comida 1',
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
      nombre: 'Cena 1',
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
    // {
    //   id: 4, 
    //   nombre: 'Desayuno 1', 
    //   categoria: 'desayunos',
    //   descripcion: 'Descripción del platillo',
    //   fechaCreacion: '16/05/2021',
    //   dificultad: 'facil',
    //   porciones: 2,
    //   tiempoPreparacion: 0,
    //   tiempoCoccion: 30,
    //   tiempoDescanso: 0,
    //   utensilios: [
    //     { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
    //     { id: 2, cantidad: 1, utensilio: "Parrilla"}
    //   ],
    //   ingredientes: [
    //     { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
    //     { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
    //     { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
    //   ],
    //   preparacion: [
    //     { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
    //     { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
    //   ],
    //   imagen: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    //   nombreUsuario: 'Ana',
    //   imagenUsuario: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    // },
    // {
    //   id: 5,
    //   nombre: 'Comida 1',
    //   categoria: 'comidas',
    //   descripcion: 'Descripción del platillo',
    //   fechaCreacion: '16/05/2021',
    //   dificultad: 'facil',
    //   porciones: 2,
    //   tiempoPreparacion: 0,
    //   tiempoCoccion: 30,
    //   tiempoDescanso: 0,
    //   utensilios: [
    //     { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
    //     { id: 2, cantidad: 1, utensilio: "Parrilla"}
    //   ],
    //   ingredientes: [
    //     { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
    //     { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
    //     { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
    //   ],
    //   preparacion: [
    //     { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
    //     { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
    //   ],
    //   imagen: 'https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
    //   nombreUsuario: 'Youssef',
    //   imagenUsuario: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg'
    // },
    // {
    //   id: 6,
    //   nombre: 'Cena 1',
    //   categoria: 'cenas',
    //   descripcion: 'Descripción del platillo',
    //   fechaCreacion: '16/05/2021',
    //   dificultad: 'medio',
    //   porciones: 2,
    //   tiempoPreparacion: 0,
    //   tiempoCoccion: 30,
    //   tiempoDescanso: 0,
    //   utensilios: [
    //     { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
    //     { id: 2, cantidad: 1, utensilio: "Parrilla"}
    //   ],
    //   ingredientes: [
    //     { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
    //     { cantidad: 2, ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso", tipo: ""},
    //     { cantidad: 1, ingrediente: "sazonador para parrilleras", tipo: "cdita"}
    //   ],
    //   preparacion: [
    //     { numeroPaso: 1, paso: "Corta en cuadrados medianos los filetes de pechuga." },
    //     { numeroPaso: 2, paso: "Lava el pimiento y córtalos en cuadrados medianos."}
    //   ],
    //   imagen: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
    //   nombreUsuario: 'Ana',
    //   imagenUsuario: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    // }
  ]);

  const [categorias, setCategorias] = useState([
    {
      id: 1,
      nombre: 'desayunos',
      imagen: 'https://images.unsplash.com/photo-1612711501595-9f2def1e4837?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
    },
    {
      id: 2,
      nombre: 'comidas',
      imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      
    },
    {
      id: 3,
      nombre: 'cenas',
      imagen: 'https://images.unsplash.com/photo-1522784081430-8ac6a122cbc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
  ])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  return (
    <div className="home">

      {/* Categorías */}
      <CategoriaList categorias={categorias} /> 

      {/* Nuevas recetas */}
      {/* <RecetaList recetas={recetas} />  */}
      
      <Container className="nuevas-recetas-2">
        <Row>
          <Col>
            <CardCarousel titulo={1} />
          </Col>
          <Col>
            <CardCarousel titulo={2} />
          </Col>
          <Col>
            <CardCarousel titulo={3} />
          </Col>
        </Row>
      </Container>
      
      {/* <Container>
        <Carousel breakPoints={breakPoints}>
          <Card className="carta" number="1" />
          <Card className="carta" number="2" />
          <Card className="carta" number="3" />
          <Card className="carta" number="4" />
          <Card className="carta" number="5" />
          <Card className="carta" number="6" />
        </Carousel>
      </Container> */}
    </div>
  )
}
