import React from "react";
import Slideshow from "./componentes/slideshow";
import './estilos.css';
import styled from 'styled-components';

const App = () => {
  return (
    <main>
      <Titulo>productos Destacados</Titulo>
        <Slideshow></Slideshow>
    </main>
  );
}

const Titulo = styled.p `
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px; 
`;

export default App;