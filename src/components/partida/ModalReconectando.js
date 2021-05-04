import React from 'react'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'

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
