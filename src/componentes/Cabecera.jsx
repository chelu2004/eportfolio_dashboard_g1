import React from 'react';

const Cabecera = (props) => {
  return (
    // Usa la etiqueta semántica header
    <header> HEADER {props.usuario}</header>
  )
}

export default Cabecera;