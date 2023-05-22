import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { Login } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoryName/:name" element={<ItemListContainer />} />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<h1>la ruta no existe</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
