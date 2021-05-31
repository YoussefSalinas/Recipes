import React, { Fragment, useState } from "react";
import logo from '../../assets/images/logo.svg';
import "../../assets/styles/components/_header.scss";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

export function Header() {
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
          <Link to="/">
            <img src={logo} width="100" height="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <NavDropdown title="Categorías">
              <LinkContainer to="/categoria/desayunos">
                <Nav.Link>Desayunos</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/comidas">
                <Nav.Link>Comidas</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/cenas">
                <Nav.Link>Cenas</Nav.Link>
              </LinkContainer>
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
