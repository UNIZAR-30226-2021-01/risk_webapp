import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import ListaAmigos from './components/panelAmigos/ListaAmigos';
import reportWebVitals from "./reportWebVitals";
//import './assets/css/style.css'

//const amigos = [{nombre: "Jose"}, {nombre: "Pepe"}] //Variable de prueba
/**
 * Renderiza la aplicación
 * @requires App.js
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<ListaAmigos usuarios={amigos}/>*/}
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
