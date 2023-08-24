import React, { useState } from "react";
import Counter from "./components/Counter";
import Product from "./components/Product";
import "./App.css";
const App = () => {
  const [name, setName] = useState("Revathi");
  return (
    <div className="App">
      {/* <Counter customName={name} />
      <Child n={name} age={30} /> */}
      <Product />
    </div>
  );
};

export default App;

const Child = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props.n}</div>
      <span>{props.age}</span>
    </div>
  );
};
