import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const targets = document.querySelectorAll(".erw-root");
Array.prototype.forEach.call(targets, (target) => {
  const id = target.dataset.id;
  const settings = window.erwSettings[id];
  ReactDOM.render(<App settings={settings} />, target);
});
