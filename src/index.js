import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
ReactDOM.render(
  <div>
    <App />
    <List />
  </div>,
  document.getElementById("root")
);
