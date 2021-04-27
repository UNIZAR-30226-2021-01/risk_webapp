import React from 'react'
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact'

export const ModalReconectando = ({ isOpen }) => {
	return (
		<MDBModal isOpen={isOpen}>
			<MDBModalHeader>
				Te has desconectado. Sal y vuelve a entrar o recarga.
			</MDBModalHeader>
			<MDBModalBody>
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
