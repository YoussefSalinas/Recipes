import React, { useState } from "react";
import "../../assets/scss/home/Home.scss";

import { CategoriaList } from "../categoria/CategoriaList";
import { RecetaListHome } from "../receta/RecetaListHome";

export function Home({ 
  categorias,
  desayunos,
  comidas,
  cenas,
}) {
  return (
    <div className="home">

      {/* Categorías */}
      <CategoriaList 
        titulo = {'Categorías'} 
        categorias = {categorias}
      />

      {/*  Recetas */}
      <RecetaListHome
        titulo_desayunos = {"Nuevos desayunos"}
        titulo_comidas = {"Nuevas comidas"}
        titulo_cenas = {"Nuevas cenas"}
        desayunos = {desayunos}
        comidas = {comidas}
        cenas = {cenas}
      />

    </div>
  );
}
