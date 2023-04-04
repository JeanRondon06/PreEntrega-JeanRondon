import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CounterContainer from "./components/Counter/CounterContainer";

function App() {
  let saludo = "Hola wachin como estas";
  let edad = 26;

  return (
    <div className="App">
      <Navbar color="red" />
      <ItemList saludo={saludo} edad={edad} />
      <CounterContainer />
    </div>
  );
}

export default App;
