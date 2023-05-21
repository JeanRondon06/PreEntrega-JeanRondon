import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import CounterContainer from "./components/Counter/CounterContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CounterContainer />
      <ItemListContainer />
      <FetchingData />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
