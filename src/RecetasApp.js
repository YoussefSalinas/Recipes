import React, { Fragment } from 'react';
import './assets/styles/base/App.scss';

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Componentes
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { RecetaListCategoria } from './components/RecetaList/RecetaListCategoria';

// Datos
import * as Helpers from './helpers/Helpers';


import { AppRouter } from './routes/AppRouter';

export function RecetasApp() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Switch>
    //       <Route path="/desayunos">
    //         <RecetaListCategoria 
    //           titulo = {'Nuevas recetas para el desayuno'}
    //           recetas = {Helpers.datosDesayunos()}
    //         />
    //       </Route>
    //       <Route path="/comidas">
    //         <RecetaListCategoria 
    //           titulo = {'Nuevas recetas para la comida'}
    //           recetas = {Helpers.datosComidas()}
    //         />
    //       </Route>
    //       <Route path="/cenas">
    //         <RecetaListCategoria 
    //           titulo = {'Nuevas recetas para la cena'}
    //           recetas = {Helpers.datosCenas()}
    //         />
    //       </Route>
    //       <Route path="/">
    //         <Home 
    //           categorias = {Helpers.datosCategorias()}
    //           desayunos = {Helpers.datosDesayunos()}
    //           comidas = {Helpers.datosComidas()}
    //           cenas = {Helpers.datosCenas()}
    //         />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Fragment>
      <AppRouter />
    </Fragment>
  );
}