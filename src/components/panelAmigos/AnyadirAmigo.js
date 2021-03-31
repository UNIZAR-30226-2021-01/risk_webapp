import React, { useState } from 'react'
import {
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBContainer,
	MDBCol,
	MDBBtn,
} from 'mdbreact'
import { FormAnyadirAmigo } from './FormAnyadirAmigo'
import qs from 'qs'
import constants from './../../utils/constants.js'

/**
 * Implementa un pop-up para añadir un amigo, este pop-up contiene
 * un formulario donde insertar el nombre del amigo.
 * @todo Conexión con servidor, css...
 */
export const AnyadirAmigo = ({ usuario }) => {
	const [isOpen, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!isOpen)
	}

	const enviarSolicitud = async (formData) => {
		console.log(formData)
		const url = `${constants.BASE_SERVER_URL}enviarSolicitudAmistad`
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: qs.stringify(formData),
		}
		const res = await fetch(url, options)
		const data = await res.json()
		console.log(data, 'JSON recibido de registrar')
		return data
	}

	return (
		<MDBContainer>
			<MDBBtn
				color="primary"
				className="btn-addfriend"
				onClick={() => {
					toggle()
				}}
			>
				Añadir amigo
			</MDBBtn>
			<MDBModal
				isOpen={isOpen}
				toggle={() => {
					toggle()
				}}
			>
				<MDBModalHeader
					toggle={() => {
						toggle()
					}}
				>
					Añadir amigo
				</MDBModalHeader>
				<MDBCol middle="true">
					<MDBModalBody>
						<FormAnyadirAmigo
							usuario={usuario}
							enviarSolicitud={enviarSolicitud}
						/>
					</MDBModalBody>
				</MDBCol>
			</MDBModal>
		</MDBContainer>
	)
}

export default AnyadirAmigo
