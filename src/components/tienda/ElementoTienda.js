import React, { useState, useContext } from 'react'
import {
	MDBBtn,
	MDBIcon,
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBFooter,
} from 'mdbreact'
import AuthApi from './../../utils/AuthApi'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { comprarObjeto } from 'utils/restAPI'
import iconos from '../../assets/images/iconos'

const ElementoTienda = ({ datos, tipo }) => {
	const Auth = useContext(AuthApi)
	const [serverErrors, setServerErrors] = useState('')
	const [isOpen, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!isOpen)
	}

	console.log(iconos)

	const comprarObjetoInterno = () => async () => {
		setServerErrors('')
		const formData = {
			idUsuario: Auth.auth.usuario.id,
			cosmetico: datos.id,
			tipo: tipo,
			clave: Auth.auth.usuario.clave,
		}
		const data = await comprarObjeto(formData)

		if (data.code === 0) {
			toggle()
		} else {
			setServerErrors(data.err)
		}
	}

	return (
		<>
			<div className="item-tienda">
				<div className="imagenPrueba">
					<img src={iconos[datos.id].img} />
				</div>
				<MDBBtn color="primary" onClick={() => toggle()}>
					{datos.precio}
				</MDBBtn>
			</div>
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
					¿Quieres comprar este {tipo} por {datos.precio} riskos?
				</MDBModalHeader>
				<MDBModalBody className="d-flex justify-content-between">
					<ErroresServer serverErrors={serverErrors} />
				</MDBModalBody>
				<MDBFooter className="d-flex justify-content-around">
					<MDBBtn
						color="primary"
						onClick={() => {
							toggle()
						}}
					>
						{' '}
						Cancelar
					</MDBBtn>
					<MDBBtn color="success" onClick={comprarObjetoInterno()}>
						Comprar
					</MDBBtn>
				</MDBFooter>
			</MDBModal>
		</>
	)
}

export default ElementoTienda
