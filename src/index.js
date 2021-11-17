// import { useState, useEffect } = React;
const { useState, useEffect } = React;

function App() {
  console.log;
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
