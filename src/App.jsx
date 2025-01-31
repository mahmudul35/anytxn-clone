import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-500 font-bold">This is H1 tag</h1>
      <h2 className="text-3xl shadow-2xl">Hello world</h2>
    </>
  );
}

export default App;
