import logo from './assets/images/logo.svg';
import './assets/scss/App.scss';

// Componentes
import { Home } from './components/Home';
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
    </div>
  );
}

export default App;
