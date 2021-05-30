import React, { Fragment, useState } from "react";
import "../../assets/scss/navbar/Navbar.scss";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function NavbarComponent() {
  const [isConnected, setConnected] = useState(false);

  function handleLogin() {
    setConnected(true);
  }

  function handleLogout() {
    setConnected(false);
  }

  return (
    <Fragment>
      <Navbar>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <NavDropdown title="Categorías">
              <Link to="/desayunos">Desayunos</Link>
              <Link to="/comidas">Comidas</Link>
              <Link to="/cenas">Cenas</Link>
              <NavDropdown.Item href="/desayunos" >Desayunos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cenas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar alguna receta" className="mr-sm-2" />
            <Button variant="outline-info">Buscar</Button>
          </Form>
          {!isConnected ? (
            <Button 
              className="log-in" 
              variant="success" 
              onClick={handleLogin}>Iniciar sesión
            </Button>
          ) : (
            <NavDropdown title="Mi cuenta" className="account">
              <NavDropdown.Item href="#action/3.1">Mis datos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mis recetas</NavDropdown.Item>
              <NavDropdown.Divider />
              <Button 
                className="log-out" 
                variant="danger" 
                onClick={handleLogout}>Cerrar sesión
              </Button>
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
