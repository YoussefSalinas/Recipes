import './assets/scss/App.scss';

// Componentes
import { Home } from './components/home/Home';
import { NavbarComponent } from './components/navbar/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
    </div>
  );
}

export default App;
