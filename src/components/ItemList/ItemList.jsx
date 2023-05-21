import * as React from "react";

import ItemCard from "./ItemCard";

const ItemList = ({ items, deleteProduct, updateProduct }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "40px",
        minHeight: "90vh",
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => {
        return (
          <ItemCard
            item={item}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
