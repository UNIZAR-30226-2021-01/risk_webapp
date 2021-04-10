import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBIcon,
	MDBBtn,
	MDBFooter,
} from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { eliminarAmigo } from 'utils/restAPI'
import { obtenerCredenciales } from 'utils/usuarioVO'

/**
 * Botón que se utilizará en la lista de amigos junto al componente
 * "Amigo" y que permitirá la eliminación del mismo haciendo uso
 * de la API del servidor de juego
 */
export const EliminarAmigo = ({ amigo }) => {
	const [isOpen, setOpen] = useState(false)
	const [serverErrors, setServerErrors] = useState('')
	const Auth = useContext(AuthApi)

	const toggle = () => {
		setOpen(!isOpen)
	}

	const eliminarAmigoInterno = (amigo) => async () => {
		setServerErrors('')
		let formData = obtenerCredenciales(Auth)
		formData.idAmigo = amigo.id
		const data = await eliminarAmigo(formData)

		if (data.code === 0) {
			toggle()
		} else {
			setServerErrors(data.err)
		}
	}

	return (
		<>
			<MDBBtn className="btn-borrar" onClick={toggle}>
				<MDBIcon far icon="trash-alt" />
			</MDBBtn>

			<MDBModal isOpen={isOpen} toggle={toggle}>
				<MDBModalHeader toggle={toggle}>
					¿Estás seguro de que quieres eliminar a {amigo.nombre}?
				</MDBModalHeader>
				<MDBModalBody className="d-flex justify-content-between">
					<ErroresServer serverErrors={serverErrors} />
				</MDBModalBody>
				<MDBFooter className="d-flex justify-content-around">
					<MDBBtn color="primary" onClick={toggle}>
						{' '}
						Cancelar
					</MDBBtn>
					<MDBBtn color="danger" onClick={eliminarAmigoInterno(amigo)}>
						Eliminar
					</MDBBtn>
				</MDBFooter>
			</MDBModal>
		</>
	)
}

EliminarAmigo.propTypes = {
	/**
	 * Datos del amigo a eliminar
	 */
	amigo: PropTypes.shape({
		nombre: PropTypes.string,
		id: PropTypes.number,
	}),
}

export default EliminarAmigo
