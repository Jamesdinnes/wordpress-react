import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const targets = document.querySelectorAll(".erw-root");
Array.prototype.forEach.call(targets, (target) => {
  // Retrieve this instance's unique ID from the dataset.
  const id = target.dataset.id;

  // Pull the settings object unique to this instance from the window-global
  // settings object.
  const settings = window.erwSettings[id];

  // Pass settings to our component as a named property ("prop").
  ReactDOM.render(<App settings={settings} />, target);
});
