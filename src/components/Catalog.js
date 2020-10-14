import React from "react";
import { useSelector, useStore } from "react-redux";

// import { Container } from './styles';

function Catalog() {
  const dates = useSelector((state) => state);

  console.log(dates);

  return <h1>Catalogo</h1>;
}

export default Catalog;
