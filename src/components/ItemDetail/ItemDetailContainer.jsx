import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let id = 4;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id == id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 1500);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
