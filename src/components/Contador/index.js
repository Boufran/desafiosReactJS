import React, { useState } from "react";

const Contador = (props) => {
  const [items, setItems] = useState(0);

  const sumar = () =>
    items <= props.stock - 1
      ? setItems(items + 1)
      : alert("Se alcanzo el maximo");
  const restar = () =>
    items > 0
      ? setItems(items - 1)
      : alert("No se puede introducir valores negativos");
  return (
    <>
      <div>Tengo {items} items.</div>
      <div>STOCK {props.stock} </div>
      <button onClick={sumar}>SUMAR</button>
      <button onClick={restar}>RESTAR</button>
    </>
  );
};

export default Contador;
