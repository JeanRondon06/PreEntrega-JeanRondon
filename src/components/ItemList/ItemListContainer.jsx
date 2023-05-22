import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import useCounter from "../../utils/hooks/useCounter";

// import useCounter from "../../utils/hooks/useCounter";

const ItemListContainer = () => {
  const { counter, increment } = useCounter();

  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    // const productFiltered = products.filter(
    //   (prod) => prod.category === categoryName
    // );

    setIsChange(false);
    // let data = axios.get("http://localhost:5000/products");
    // data.then((res) => setItems(res.data));
    let tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [isChange, categoryName]);

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

      {/* <button
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
      </button> */}
    </div>
  );
};

export default ItemListContainer;
