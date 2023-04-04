const CounterPresentation = ({
  user,
  reiniciar,
  sumar,
  restar,
  counter,
  sumar10,
  login,
}) => {
  return (
    <div>
      <h1>Este es el contador</h1>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar10}>Sumar 10</button>
      <button onClick={reiniciar}> Reiniciar</button>
      <button onClick={login}>Login</button>

      <h2>Bienvenido {user}</h2>
    </div>
  );
};

export default CounterPresentation;
