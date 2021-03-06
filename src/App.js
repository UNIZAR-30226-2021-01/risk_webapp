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
import Tienda from './components/tienda/Tienda'
//import FormCuenta from "./components/FormCuenta";
//import './assets/css/style.css'
import './assets/css/bootstrapCustom.css'

import AuthApi from './utils/AuthApi'
import Registrar from './components/sesion/Registrar'
import InicioSesion from './components/sesion/InicioSesion'
import ActualizacionConfiguracion from './components/sesion/ActualizacionConfiguracion'
import Sala from './components/menuSala/Sala'
import Partida from 'components/partida/Partida'

import Reglas from './components/Reglas/Reglas'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { recargarUsuario } from 'utils/restAPI'
import { Cargando } from 'components/partida/Cargando'
import { RestablecerClave } from 'components/sesion/RestablecerClave'
import { SolicitarRestablecer } from 'components/sesion/SolicitarRestablecer'
import { EliminarCuenta } from 'components/sesion/EliminarCuenta'

/**
 * App contiene el router, header/footer y metadatos de la aplicación,
 * previene al usuario de entrar a las páginas en las que se requiere
 * estar loggeado si no lo está y viceversa.
 */
function App() {
	const [auth, setAuth] = useState(constants.NULL_VALUES)
	const [recargando, setRecargando] = useState(true)

	/**
	 * Lee las cookies de usuario, y si las hay establece al usuario como
	 * loggeado.
	 */
	const readCookie = async () => {
		setRecargando(true)
		const user = Cookies.get(constants.COOKIE_USER)
		if (user) {
			let data = JSON.parse(user)
			data.logged = true
			setAuth(data)
			const nuestraInfo = {
				idUsuario: data.usuario.id,
				clave: data.usuario.clave,
			}
			const dataServer = await recargarUsuario(nuestraInfo)
			console.log(dataServer, 'dataServer')
			if ('err' in dataServer) {
				console.log('hayError')
				setAuth(constants.NULL_VALUES)
			} else {
				dataServer.logged = true
				setAuth(dataServer)
			}
			setRecargando(false)
		} else {
			setAuth(constants.NULL_VALUES)
		}
		setRecargando(false)
	}

	React.useEffect(() => {
		readCookie()
	}, [])

	return (
		<div className="App">
			<>
				<Head />
				{recargando && (
					<>
						<Cargando />
						<Footer />
					</>
				)}
				{!recargando && (
					<>
						<AuthApi.Provider value={{ auth, setAuth }}>
							<Router>
								<div className="wrapper">
									<Header />
									<hr />
									<Routes />
								</div>
								<Footer />
							</Router>
						</AuthApi.Provider>{' '}
					</>
				)}
			</>
		</div>
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
			<Route path="/restablecerClave/:token">
				<RestablecerClave />
			</Route>
			<Route path="/solicitarRestablecer">
				<SolicitarRestablecer />
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
				path="/sala/:id"
				auth={Auth.auth.logged}
				component={Sala}
			/>
			<ProtectedRoute
				path="/partida/:id"
				auth={Auth.auth.logged}
				component={Partida}
			/>
			<ProtectedRoute
				path="/actualizarCuenta"
				auth={Auth.auth.logged}
				component={ActualizacionConfiguracion}
			/>
			<ProtectedRoute
				path="/tienda"
				auth={Auth.auth.logged}
				component={Tienda}
			/>
			<ProtectedRoute
				path="/menuPrincipal"
				auth={Auth.auth.logged}
				component={MenuPrincipal}
			/>
			<ProtectedRoute
				path="/eliminarCuenta"
				auth={Auth.auth.logged}
				component={EliminarCuenta}
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
