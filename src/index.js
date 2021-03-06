import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

/**
 * Quitado modo debug
 */
console.log = () => {}

/**
 * Renderiza la aplicación
 * @requires App.js
 */
ReactDOM.render(<App />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//Quitado:
//<React.StrictMode>
//</React.StrictMode>,
