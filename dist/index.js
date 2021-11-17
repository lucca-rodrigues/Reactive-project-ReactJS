// import { useState, useEffect } = React;
const {
  useState,
  useEffect
} = React;

function App() {
  console.log;
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);
  console.log("render", count);
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("p", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: decrement
  }, "-"), /*#__PURE__*/React.createElement("button", {
    onClick: increment
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById("app"));