import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost.then((res) => res.json()).then((res) => setData(res));
    const obtenerPorID = fetch("https://jsonplaceholder.typicode.com/posts/2");
    obtenerPorID.then((res) => res.json()).then((res) => setDataById(res));
  }, []);

  return <div></div>;
};

export default FetchingData;
