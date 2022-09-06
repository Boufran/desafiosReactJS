import { useEffect } from "react";

const CicloVida = ({ validacion }) => {
  useEffect(() => {}, []);

  return <div>{validacion === true ? <h2>Verdadero</h2> : <h2>Falso</h2>}</div>;
};

export default CicloVida;
