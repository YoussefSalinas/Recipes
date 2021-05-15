import React from 'react';
import '../assets/scss/Home.scss';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <div className="home">
      <h1>Recetas</h1>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
         Añadir nueva receta
      </Button>
    </div>
  )
}
