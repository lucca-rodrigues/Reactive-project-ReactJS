const { useState, useEffect } = React;
console.log("funcionando!!");

function App() {
  console.log("funcionando!!");
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);
  console.log("render", count);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const rootElement = document.getElementById("teste");
ReactDOM.render(<App />, rootElement);
