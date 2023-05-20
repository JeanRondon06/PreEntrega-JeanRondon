import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../productsMock";
// import axios from "axios";
// import useCounter from "../../utils/hooks/useCounter";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
