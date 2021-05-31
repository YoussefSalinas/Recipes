import React, { useState } from "react";
import "../../assets/styles/components/_home.scss";
import { CategoriaList } from "../CategoriaList/CategoriaList";
import { RecetaListHome } from "../RecetaList/RecetaListHome";

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
