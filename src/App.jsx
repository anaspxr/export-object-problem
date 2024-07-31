/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count++
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px",
        }}
      >
        <Component1 prop={count} />
        <Component2 prop={count} />
      </div>
    </>
  );
}

export default App;
