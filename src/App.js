import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CounterContainer from "./components/Counter/CounterContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import FetchingData from "./components/FetchingData/FetchingData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <CounterContainer />

      <ItemListContainer />
      <FetchingData />
    </div>
  );
}

export default App;
