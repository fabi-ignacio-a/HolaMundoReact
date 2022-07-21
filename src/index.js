import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const HelloWorld = React.createElement(
  "div",
  {
    className: "container"
  },
  //Es el hijo del componente HelloWorld, que es un array.
  ["Hola Mundo", " feliz día"]
);

//const Hello = "Hola Mundo";
const GoodBye = "Adios Mundo";

//const element1 = <div className="container"> {Hello} </div>;
const element = <div className="container"> {GoodBye} </div>;

ReactDOM.render(element, rootElement);
