import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock.js";
import axios from "axios";

// import useCounter from "../../utils/hooks/useCounter";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setIsChange(false);
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, [isChange]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChange(true);
  };

  const updateProduct = (id, data) => {
    axios.patch(`http://localhost:5000/products/${id}`, data);
    setIsChange(true);
  };

  const createProduct = (data) => {
    axios.post("http://localhost:5000/products", data);
    setIsChange(true);
  };

  return (
    <div>
      <ItemList
        items={items}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
      <button
        variant="contained"
        size="small"
        onClick={() => {
          createProduct({
            title: "total 90",
            price: 15000,
            stock: 22,
            description: "Estas son las mejores zapatillas",
            category: "deportivas",
            img: "https://i.pinimg.com/originals/55/2c/75/552c75a0c361e570975d8502923eacfc.jpg",
          });
        }}
      >
        Crear producto
      </button>
    </div>
  );
};

export default ItemListContainer;
