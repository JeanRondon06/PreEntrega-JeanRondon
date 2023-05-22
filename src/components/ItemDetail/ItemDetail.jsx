import React from "react";

export const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt="" />
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
    </div>
  );
};

export default ItemDetail;
