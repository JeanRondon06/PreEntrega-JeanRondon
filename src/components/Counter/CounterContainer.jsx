import { useState } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const [user, setUser] = useState("");

  const restar = () => {
    setCounter(counter - 1);
  };

  const sumar10 = () => {
    setCounter(counter + 10);
  };
  const reiniciar = () => {
    setCounter(0);
  };
  const login = () => {
    setUser("Pepito");
  };
  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        sumar10={sumar10}
        login={login}
        reiniciar={reiniciar}
        user={user}
      />
    </div>
  );
};

export default CounterContainer;
