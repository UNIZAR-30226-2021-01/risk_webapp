import React from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact'
import loading from 'assets/UI/loading.png'

export const ModalReconectando = ({ isOpen }) => {
	return (
		<MDBModal isOpen={isOpen}>
			<MDBModalHeader>
				Te has desconectado. Intentando reconectar... (no implementado)
			</MDBModalHeader>
			<MDBModalBody>
				<div className="loader">
					<img src={loading} id="load-spinner" />
				</div>
			</MDBModalBody>
		</MDBModal>
	)
}
