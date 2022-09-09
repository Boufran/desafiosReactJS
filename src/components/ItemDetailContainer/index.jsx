import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const prod = {
  id: 1,
  image:
    "https://media.istockphoto.com/photos/hand-flip-wooden-cube-with-word-change-to-chance-personal-development-picture-id871196052?s=612x612",
  title: "Cambios",
};

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(prod);
      }, 3000);
    });

    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
