import React, {useState, useContext} from 'react';
import Cookies from 'js-cookie'
import './index.css';
import constants from './constants.js';
import {
	Route, 
	BrowserRouter as Router, 
	Switch, 
	Redirect, 
	//Link 
} from "react-router-dom";

//import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import FormCuenta from "./components/FormCuenta";
import './assets/css/style.css'

import AuthApi from "./components/sesion/AuthApi"
import Registrar from "./components/sesion/Registrar"


/**	
 * App contiene el router y el header/footer de la aplicación,
 * previene al usuario de entrar a las páginas en las que se requiere
 * estar loggeado si no lo está y viceversa.
 * @todo Darle bien estilo a todo.
 */
function App() {

	const [auth, setAuth] = useState(constants.NULL_VALUES)

	const readCookie = () =>{
		const user = Cookies.get(constants.COOKIE_USER);
		if (user){
			let data = JSON.parse(user)
			data.logged = true
			setAuth(data);
		}
	}
	React.useEffect(() =>{
		readCookie();
	}, [])

  return (
	<div>
		<AuthApi.Provider value={{auth,setAuth}}>
  <Router>
		<div className="wrapper">
		<Header />
		<hr />
		<Routes />
		{/*
		<Switch>
			<Route exact path="/" component={Header} />
			<Route exact path="/init" component={Header} />
			{/*<Route path="/users" component=
			ejemplos...
			<Route path="/users" component={Users} />

			<Route component={Notfound} />

		</Switch>
			*/}
		</div>
	<Footer />
  </Router>
		</AuthApi.Provider> 
  </div>
  );
}

/**
 * Routes contiene todas las direcciones de la aplicación y qué componente
 * se ha de renderizar de manera segura.
 */
const Routes = () =>{
	const Auth = useContext(AuthApi)
	return(
		<Switch>
			<ProtectedLogin path="/login" auth={Auth.auth.logged} component={Registrar} />
			<ProtectedRoute path="/dashboard" auth={Auth.auth.logged}  component={Dashboard} />
			<ProtectedRoute path="/" auth={Auth.auth.logged}  component={Dashboard} />
		</Switch>
	)
}

/**
 * ProtectedRoute protege a una ruta de tratar de entrar si no
 * se está loggeado en el sistema.
 */
const ProtectedRoute = ({auth, component:Component, ...rest}) =>{
	return(
		<Route
		{...rest} 
		render ={()=>auth?(
			<Component/>
		):
		(
			<Redirect to="/login"/>
		)
	}
		/>
	)
}

/**
 * ProtectedLogin protege a una ruta de tratar de entrar si
 * se está loggeado en el sistema.
 */
const ProtectedLogin = ({auth, component:Component, ...rest}) =>{
	return(
		<Route
		{...rest} 
		render ={()=>!auth?(
			<Component/>
		):
		(
			<Redirect to="/dashboard"/>
		)
	}
		/>
	)
}

/**
 * Dashboard es una prueba de deslogeo, realmente no es necesario,
 * corresponderá al menú principal una vez loggeado
 */
const Dashboard = () =>{
	const Auth = useContext(AuthApi)
	const handleOnClick = ()=>{
		Auth.setAuth(constants.NULL_VALUES);
		Cookies.remove(constants.COOKIE_USER);
	}
	return(
		<div>
			<h1>Dashboard</h1>
			<button onClick={handleOnClick}>logout</button>
		</div>
	)
}


export default App;
