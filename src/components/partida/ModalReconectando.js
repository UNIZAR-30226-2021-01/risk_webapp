import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'

/**
 * Modal que indica que te has desconectado y has de recargar.
 * Usado cuando hay un error grave o se ha caído la conexión.
 */
export const ModalReconectando = ({ isOpen, error }) => {
	const history = useHistory()
	return (
		<MDBModal isOpen={isOpen} toggle={() => {}}>
			<MDBModalHeader>
				Te has desconectado. Sal y vuelve a entrar o recarga.
			</MDBModalHeader>
			<MDBModalBody>
				<ErroresServer serverErrors={error} />
				<MDBBtn
					onClick={() => {
						history.push('/')
					}}
				>
					Volver al menú principal
				</MDBBtn>
			</MDBModalBody>
		</MDBModal>
	)
}

ModalReconectando.propTypes = {
	/**
	 * Determina si el modal está abierto o no.
	 */
	isOpen: PropTypes.bool,

	/**
	 * Mensaje de error ha mostrar
	 */
	error: PropTypes.string,
}
