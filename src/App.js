import React, { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import './index.css'
import constants from './utils/constants.js'
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
	//Link
} from 'react-router-dom'

import Head from './components/Head'
import Header from './components/Header'
import Footer from './components/Footer'
import MenuPrincipal from './components/MenuPrincipal'
//import FormCuenta from "./components/FormCuenta";
//import './assets/css/style.css'
import './assets/css/bootstrapCustom.css'

import AuthApi from './utils/AuthApi'
import Registrar from './components/sesion/Registrar'
import InicioSesion from './components/sesion/InicioSesion'
import ActualizacionConfiguracion from './components/sesion/ActualizacionConfiguracion'

import Reglas from './components/Reglas/Reglas'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

/**
 * App contiene el router y el header/footer de la aplicación,
 * previene al usuario de entrar a las páginas en las que se requiere
 * estar loggeado si no lo está y viceversa.
 * @todo Darle bien estilo a todo.
 */
function App() {
	const [auth, setAuth] = useState(constants.NULL_VALUES)

	/**
	 * Lee las cookies de usuario, y si las hay establece al usuario como
	 * loggeado.
	 */
	const readCookie = () => {
		const user = Cookies.get(constants.COOKIE_USER)
		if (user) {
			let data = JSON.parse(user)
			data.logged = true
			setAuth(data)
		} else {
			setAuth(constants.NULL_VALUES)
		}
	}

	React.useEffect(() => {
		readCookie()
	}, [])

	return (
		<>
			<Head />
			<AuthApi.Provider value={{ auth, setAuth }}>
				<Router>
					<div className="wrapper">
						<Header />
						<hr />
						<Routes />
					</div>
					<Footer />
				</Router>
			</AuthApi.Provider>
		</>
	)
}

/**
 * Routes contiene todas las direcciones de la aplicación y qué componente
 * se ha de renderizar de manera segura.
 */
const Routes = () => {
	const Auth = useContext(AuthApi)
	return (
		<Switch>
			<Route path="/reglas">
				<Reglas />
			</Route>
			<ProtectedLogin
				path="/registro"
				auth={Auth.auth.logged}
				component={Registrar}
			/>
			<ProtectedLogin
				path="/inicioSesion"
				auth={Auth.auth.logged}
				component={InicioSesion}
			/>
			<ProtectedRoute
				path="/menuPrincipal"
				auth={Auth.auth.logged}
				component={MenuPrincipal}
			/>
			<ProtectedRoute
				path="/actualizarCuenta"
				auth={Auth.auth.logged}
				component={ActualizacionConfiguracion}
			/>
			<ProtectedRoute
				path="/"
				auth={Auth.auth.logged}
				component={MenuPrincipal}
			/>
		</Switch>
	)
}

/**
 * ProtectedRoute protege a una ruta de tratar de entrar si no
 * se está loggeado en el sistema.
 */
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => (auth ? <Component /> : <Redirect to="/registro" />)}
		/>
	)
}

/**
 * ProtectedLogin protege a una ruta de tratar de entrar si
 * se está loggeado en el sistema.
 */
const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => (!auth ? <Component /> : <Redirect to="/menuPrincipal" />)}
		/>
	)
}

export default App
