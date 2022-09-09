import React from "react";

export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="datail">
        <img className="detail__image" src="{data.image}" />
        <div className="content">
          <h1>{data.title} </h1>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
