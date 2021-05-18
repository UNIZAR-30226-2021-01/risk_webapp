import React, { useContext, useState } from 'react'
import FormActualizar from './FormActualizar.js'
import { useHistory } from 'react-router-dom'
import constants from 'utils/constants.js'
import AuthApi from 'utils/AuthApi'
import Cookies from 'js-cookie'
import { MDBContainer } from 'mdbreact'
import { obtenerCredenciales } from 'utils/usuarioVO'
import { recargarUsuarioServer } from 'utils/AuthServer'
import { MDBBtn } from 'mdbreact'
import './formCuenta.css'
import { actualizarConfiguracion } from 'utils/restAPI.js'

/**
 * ActualizacionConfiguracion, si la actualización es correcta actualiza las
 * cookies de sesión al cliente y el contexto de la aplicación.
 */
const ActualizacionConfiguracion = () => {
	const Auth = useContext(AuthApi)
	const history = useHistory()

	const [values, setValues] = useState(Auth.auth.usuario)

	function ucFirst(str) {
		if (!str) return str

		return str[0].toUpperCase() + str.slice(1)
	}

	/**
	 * Intenta cambiar el parámetro campo si se ha modificado
	 * @param {datos_de_sesion} oldValues Valores antiguos de sesion
	 * @param {string} campo Valor a consultar y modificar
	 * @param {nuevos_datos} formData Valores recogidos en el formulario
	 */
	const actualizarCampo = async (oldValues, campo, formData) => {
		const nuevoValor = formData[campo]
		let cuerpo = obtenerCredenciales(Auth)
		cuerpo.nuevoDato = nuevoValor
		cuerpo.tipo = ucFirst(campo)
		console.log(oldValues.usuario[campo], '=?', nuevoValor)
		if (oldValues.usuario[campo] !== nuevoValor) {
			console.log(
				'Peticion de cambio de:',
				campo,
				':',
				oldValues.usuario[campo],
				'=>',
				nuevoValor
			)
			const data = await actualizarConfiguracion(cuerpo)
			console.log(data)
			if (data.code !== 0) {
				return data
			} else {
				oldValues.usuario[campo] = nuevoValor
				Auth.setAuth(oldValues)
				setValues(oldValues.usuario)
				Cookies.set(constants.COOKIE_USER, oldValues, constants.OPTIONS_COOKIE)
			}
			return data
		} else {
			return { code: 0 }
		}
	}

	/**
	 * Hace una petición al server de registro con los datos recibidos como parámetro
	 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
	 * de un usuario en el servidor
	 * @returns Respuesta recibida a la petición de registro en JSON
	 * @todo testear
	 */
	const actualizarServer = async (formData) => {
		let oldValues = Auth.auth
		console.log(formData)
		let tags = ['nombre', 'correo', 'recibeCorreos', 'icono', 'aspecto']
		if (formData.correo === '') {
			tags = ['nombre', 'recibeCorreos', 'correo', 'icono', 'aspecto']
		}
		formData.icono = parseInt(formData.icono)
		formData.aspecto = parseInt(formData.aspecto)

		for (let i = 0; i < tags.length; i++) {
			let data = await actualizarCampo(oldValues, tags[i], formData)
			if (data.code !== 0) {
				return data
			}
		}

		console.log('cambioClave', formData.cambioClave)
		if (formData.cambioClave === true) {
			let data = await actualizarCampo(oldValues, 'clave', formData)
			if (data.code !== 0) {
				return data
			}
		}

		recargarUsuarioServer(Auth)
		return { code: 0, err: '' }
	}

	return (
		<MDBContainer className="d-flex align-items-center flex-column">
			<h2> Actualizar configuración </h2>
			<FormActualizar
				defaults={values}
				submitText={'Actualizar'}
				submitData={actualizarServer}
				iconos={Auth.auth.iconos}
				aspectos={Auth.auth.aspectos}
				//iconos={Auth.auth.iconos}
				//aspectos={Auth.auth.aspectos}
			/>

			<MDBBtn
				onClick={() => {
					history.push('/eliminarCuenta')
				}}
			>
				Eliminar cuenta
			</MDBBtn>
		</MDBContainer>
	)
}

export default ActualizacionConfiguracion
