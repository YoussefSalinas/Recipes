import './assets/scss/App.scss';

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Componentes
import { Home } from './components/home/Home';
import { NavbarComponent } from './components/navbar/NavbarComponent';
import { RecetaListCategoria } from './components/receta/RecetaListCategoria'

// Datos
import * as Helpers from './helpers/Helpers';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route path="/desayunos">
            <RecetaListCategoria 
              titulo = {'Nuevas recetas para el desayuno'}
              recetas = {Helpers.datosDesayunos()}
            />
          </Route>
          <Route path="/comidas">
            <RecetaListCategoria 
              titulo = {'Nuevas recetas para la comida'}
              recetas = {Helpers.datosComidas()}
            />
          </Route>
          <Route path="/cenas">
            <RecetaListCategoria 
              titulo = {'Nuevas recetas para la cena'}
              recetas = {Helpers.datosCenas()}
            />
          </Route>
          <Route path="/">
            <Home 
              categorias = {Helpers.datosCategorias()}
              desayunos = {Helpers.datosDesayunos()}
              comidas = {Helpers.datosComidas()}
              cenas = {Helpers.datosCenas()}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
