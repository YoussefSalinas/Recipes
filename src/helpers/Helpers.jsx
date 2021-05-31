import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Categoria } from '../components/CategoriaList/Categoria';
import { RecetaHome } from '../components/RecetaList/RecetaHome';
import { RecetaCategoria } from '../components/RecetaList/RecetaCategoria';

export const reduceText = (text, qty) => {
  return text.length > qty ? `${text.substring(0, qty)}...` : text;
};

export const renderDifficulty = (difficulty) => {
  switch (difficulty) {
    case "facil":
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
    case "medio":
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
    case "dificil":
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
  }
};

export const determineClasses = (indexes, cardIndex) => {
  if (indexes.action === 'left') {
    if (indexes.previousIndex === cardIndex) {
      return 'prev left';
    } else if (indexes.currentIndex === cardIndex) {
      return 'active left';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next left';
    }
  } else {
    if (indexes.previousIndex === cardIndex) {
      return 'prev right';
    } else if (indexes.currentIndex === cardIndex) {
      return 'active right';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next right';
    }
  }
  return "inactive";
}

/** Categoria Home **/
export const renderCategoriaHome = (key, categoria) => {
  return (
    <Categoria
      key = {key} 
      categoria = {categoria} 
    />
  )
}

/** Recetas Home **/
export const renderRecetasHome = (titulo, recetas) => {
  return (
    <RecetaHome
      titulo = {titulo}
      recetas = {recetas} 
    />
  )
}

/** Recetas Categoria **/
export const renderRecetasCategoria = (key, receta) => {
  return (
    <RecetaCategoria
      key = {key} 
      receta = {receta} 
    />
  )
}

/** Datos **/
export const datosCategorias = () => {
  return (
    [
      {
        id: 1,
        nombre: "desayunos",
        imagen:
          "https://images.unsplash.com/photo-1612711501595-9f2def1e4837?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      },
      {
        id: 2,
        nombre: "comidas",
        imagen:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 3,
        nombre: "cenas",
        imagen:
          "https://images.unsplash.com/photo-1522784081430-8ac6a122cbc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
    ]
  )
}
export const datosDesayunos = () => {
  return (
    [
      {
        id: 1,
        nombre:
          "Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados",
        categoria: "desayunos",
        descripcion:
          "Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "facil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
      {
        id: 2,
        nombre: "Comida 1",
        categoria: "desayunos",
        descripcion: "Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "medio",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
      {
        id: 3,
        nombre: "Cena 1",
        categoria: "desayunos",
        descripcion: "Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "dificil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
        nombreUsuario: "Ana",
        imagenUsuario:
          "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      },
      {
        id: 4,
        nombre:
          "Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados",
        categoria: "desayunos",
        descripcion:
          "Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "facil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
    ]
  )
}
export const datosComidas = () => {
  return (
    [
      {
        id: 1,
        nombre:
          "Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados",
        categoria: "comidas",
        descripcion:
          "Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "facil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
      {
        id: 2,
        nombre: "Comida 1",
        categoria: "comidas",
        descripcion: "Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "medio",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
      {
        id: 3,
        nombre: "Cena 1",
        categoria: "comidas",
        descripcion: "Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "dificil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
        nombreUsuario: "Ana",
        imagenUsuario:
          "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      },
      {
        id: 4,
        nombre:
          "Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados",
        categoria: "comidas",
        descripcion:
          "Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "facil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
    ]
  )
}
export const datosCenas = () => {
  return (
    [
      {
        id: 1,
        nombre:
          "Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados",
        categoria: "cenas",
        descripcion:
          "Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "facil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
      {
        id: 2,
        nombre: "Comida 1",
        categoria: "cenas",
        descripcion: "Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "medio",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
      {
        id: 3,
        nombre: "Cena 1",
        categoria: "cenas",
        descripcion: "Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "dificil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
        nombreUsuario: "Ana",
        imagenUsuario:
          "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      },
      {
        id: 4,
        nombre:
          "Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados Huevos estrellados",
        categoria: "cenas",
        descripcion:
          "Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo Descripción del platillo",
        fechaCreacion: "16/05/2021",
        dificultad: "facil",
        porciones: 2,
        tiempoPreparacion: 0,
        tiempoCoccion: 30,
        tiempoDescanso: 0,
        utensilios: [
          { id: 1, cantidad: 1, utensilio: "Tabla de picar" },
          { id: 2, cantidad: 1, utensilio: "Parrilla" },
        ],
        ingredientes: [
          { cantidad: 1, ingrediente: "Salsa de Mamá Mexicana", tipo: "" },
          {
            cantidad: 2,
            ingrediente: "filetes de media pechuga de pollo sin piel y sin hueso",
            tipo: "",
          },
          {
            cantidad: 1,
            ingrediente: "sazonador para parrilleras",
            tipo: "cdita",
          },
        ],
        preparacion: [
          {
            numeroPaso: 1,
            paso: "Corta en cuadrados medianos los filetes de pechuga.",
          },
          {
            numeroPaso: 2,
            paso: "Lava el pimiento y córtalos en cuadrados medianos.",
          },
        ],
        imagen:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        nombreUsuario: "Youssef",
        imagenUsuario: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
      },
    ]
  )
}