import React from "react";
import ReactDOM from "react-dom/client";
import CalculadoraRefinanciacion from "./CalculadoraRefinanciacion";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><CalculadoraRefinanciacion /></React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}